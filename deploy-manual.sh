#!/bin/bash

# Manual deployment script for GitHub Pages
echo "Building the project..."
npm run build

echo "Creating gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

echo "Copying build files..."
cp -r dist/* .
cp dist/.nojekyll . 2>/dev/null || echo ".nojekyll not found"

echo "Committing and pushing..."
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

echo "Switching back to main branch..."
git checkout main

echo "Deployment complete! Your site should be available at:"
echo "https://mgras-maker.github.io/flid/"
