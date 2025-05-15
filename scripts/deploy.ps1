# This script builds and deploys the app to GitHub Pages
# Usage: .\scripts\deploy.ps1

Write-Host "🚀 Starting GitHub Pages deployment process..." -ForegroundColor Cyan

# Define variables
$repoUrl = "https://github.com/mgras-maker/flid.git"
$buildDir = "dist"
$branch = "gh-pages"
$tempDir = ".gh-pages-tmp"

# Step 1: Build the app for GitHub Pages
Write-Host "📦 Building app for GitHub Pages..." -ForegroundColor Yellow
.\scripts\build-ghpages.ps1

# Check if build succeeded
if (-not (Test-Path $buildDir)) {
    Write-Host "❌ Build failed. Directory '$buildDir' doesn't exist." -ForegroundColor Red
    exit 1
}

# Step 2: Create a temporary directory for deployment
Write-Host "🗂️ Preparing deployment..." -ForegroundColor Yellow

# Remove existing temp directory if it exists
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

# Create empty temporary directory
New-Item -Path $tempDir -ItemType Directory | Out-Null

# Initialize Git repo in temp directory
Push-Location $tempDir
git init
git checkout -b $branch

# Step 3: Copy build files to temp directory
Write-Host "📋 Copying build files..." -ForegroundColor Yellow
Copy-Item -Recurse -Force "..\$buildDir\*" .

# Step 4: Configure Git and deploy
Write-Host "🔧 Configuring Git..." -ForegroundColor Yellow
git add -A
git commit -m "Deploy to GitHub Pages [$(Get-Date)]"

Write-Host "☁️ Pushing to GitHub..." -ForegroundColor Yellow
git remote add origin $repoUrl
git push -f origin $branch

# Step 5: Clean up
Pop-Location
Remove-Item -Recurse -Force $tempDir

Write-Host "✅ Deployment complete! Your site should be live at https://mgras-maker.github.io/flid/" -ForegroundColor Green