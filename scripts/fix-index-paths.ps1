# This script fixes paths in index.html for GitHub Pages deployment
# Usage: .\scripts\fix-index-paths.ps1

Write-Host "🔧 Fixing paths in index.html for GitHub Pages..." -ForegroundColor Cyan

$indexPath = "dist\index.html"

if (-not (Test-Path $indexPath)) {
    Write-Host "❌ Error: $indexPath not found." -ForegroundColor Red
    exit 1
}

# Read the content of the file
$content = Get-Content -Path $indexPath -Raw

# Replace /src/ with /flid/src/ (adjust the base path according to your GitHub Pages URL)
$content = $content -replace 'src="/', 'src="/flid/'
$content = $content -replace 'href="/', 'href="/flid/'

# Keep the root slash for absolute paths that already have the correct prefix
$content = $content -replace 'src="/flid/flid/', 'src="/flid/'
$content = $content -replace 'href="/flid/flid/', 'href="/flid/'

# Save the modified content back to the file
Set-Content -Path $indexPath -Value $content

Write-Host "✅ Paths fixed successfully!" -ForegroundColor Green
