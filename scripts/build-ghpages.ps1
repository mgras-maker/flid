# This script builds the app for GitHub Pages
# Usage: .\scripts\build-ghpages.ps1

Write-Host "🔨 Building app for GitHub Pages deployment..." -ForegroundColor Cyan

# Set environment to production
$env:NODE_ENV = "production" 

# Clean up existing build
if (Test-Path "dist") {
    Write-Host "🧹 Cleaning up existing build..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "dist"
}

# Build the app
Write-Host "🏗️ Running build..." -ForegroundColor Yellow
npm run build

# Ensure build succeeded
if (-not (Test-Path "dist")) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Fix paths in index.html for GitHub Pages
Write-Host "🔧 Fixing paths for GitHub Pages..." -ForegroundColor Yellow
.\scripts\fix-index-paths.ps1

# Copy GitHub Pages specific files
Write-Host "📄 Adding GitHub Pages specific files..." -ForegroundColor Yellow

# Copy 404.html to root of dist
Copy-Item -Force "public\404.html" "dist\404.html"

Write-Host "✅ Build for GitHub Pages completed successfully!" -ForegroundColor Green