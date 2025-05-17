# Script to build and deploy Vite project to GitHub Pages

# 1. Build the project
Write-Host "Building the project..."
npm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed. Aborting deployment."
    exit 1
}

# 2. Deploy to gh-pages branch
Write-Host "Deploying to GitHub Pages..."
npx gh-pages -d dist

# Check if deployment was successful
if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed."
    exit 1
}

Write-Host "Deployment successful!"
