# GitHub Pages deployment script

# Set environment variable for production build
$env:NODE_ENV = "production"

# Build the project
Write-Host "Building project for production..." -ForegroundColor Green
npm run build

# Check if build was successful
if (!(Test-Path -Path "dist")) {
    Write-Host "Build failed! Dist directory not found." -ForegroundColor Red
    exit 1
}

# Create or navigate to a temporary directory for the deployment
$tempDir = Join-Path $env:TEMP "flid-deploy"
if (Test-Path -Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -Path $tempDir -ItemType Directory | Out-Null
Write-Host "Created temporary directory: $tempDir" -ForegroundColor Cyan

# Clone the GitHub repository with depth 1
Write-Host "Cloning repository..." -ForegroundColor Cyan
git clone --depth 1 https://github.com/mgras-maker/flid.git -b gh-pages $tempDir 2>&1
$cloneSuccess = $?

# If the gh-pages branch doesn't exist, create it
if (-not $cloneSuccess) {
    Write-Host "gh-pages branch not found. Creating new branch..." -ForegroundColor Yellow
    git clone --depth 1 https://github.com/mgras-maker/flid.git $tempDir
    Set-Location $tempDir
    git checkout --orphan gh-pages
    git rm -rf .
    Write-Host "Created new gh-pages branch" -ForegroundColor Green
    Set-Location (Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path))
} else {
    Write-Host "Successfully cloned gh-pages branch" -ForegroundColor Green
}

# Copy the dist folder to the temporary directory
Write-Host "Copying build files to deployment directory..." -ForegroundColor Cyan
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

# Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
New-Item -Path (Join-Path $tempDir ".nojekyll") -ItemType File -Force | Out-Null

# Fix the index.html file to use the correct paths
Write-Host "Fixing paths in index.html..." -ForegroundColor Cyan
$indexPath = Join-Path $tempDir "index.html"

# Find the main JS file
$jsFile = Get-ChildItem -Path (Join-Path $tempDir "assets") -Filter "index-*.js" | Select-Object -First 1

# Create a new index.html from template
$templatePath = Join-Path (Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)) "public\index.html.template"
$templateContent = Get-Content $templatePath -Raw
$newIndexContent = $templateContent -replace '<!-- The script tag will be inserted here during the build process -->', "<script type=`"module`" src=`"./assets/$($jsFile.Name)`"></script>"

# Replace the old index.html
Set-Content -Path $indexPath -Value $newIndexContent

# Fix any remaining absolute paths
$indexContent = Get-Content $indexPath -Raw
$indexContent = $indexContent -replace '(src|href)="/', '$1="./'
Set-Content -Path $indexPath -Value $indexContent

# Navigate to the temporary directory
Set-Location $tempDir

# Configure Git
git config --local user.name "GitHub Actions Bot"
git config --local user.email "github-actions-bot@users.noreply.github.com"

# Add all files
git add -A

# Commit the changes
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

# Push to GitHub Pages
Write-Host "Pushing to GitHub Pages..." -ForegroundColor Cyan
git push -u origin gh-pages -f

# Navigate back and clean up
Set-Location (Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path))
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "Deployment complete! Your site should be available at https://mgras-maker.github.io/flid/" -ForegroundColor Green
