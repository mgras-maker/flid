# FLID Foundation

This is the website for the FLID Foundation, built with React, TypeScript, and Vite.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Previews the production build locally.

### `npm run deploy`

Deploys the app to GitHub Pages using the PowerShell script in `scripts/deploy.ps1`.

## Deployment

This project is set up to deploy to GitHub Pages at https://mgras-maker.github.io/flid/

### Recommended Deployment Method

Run the no-favicon deployment script (recommended to avoid 404 errors):

```bash
npm run deploy:no-favicon
```

This script:
1. Builds the project with the correct production settings
2. Removes the favicon reference from HTML to avoid 404 errors
3. Fixes all asset paths to work correctly on GitHub Pages
4. Creates the .nojekyll file to bypass Jekyll processing
5. Deploys everything to the gh-pages branch

Alternatively, you can use the standard deployment method (if favicon issues are resolved):

```bash
npm run deploy:ultimate
```

### Alternative Deployment Methods

- **Manual Step-by-Step Deployment**:
  ```bash
  # 1. Build the project
  $env:NODE_ENV="production" 
  npm run build
  
  # 2. Fix paths and prepare for GitHub Pages
  npm run fix-paths
  
  # 3. Create .nojekyll file
  $null > .\dist\.nojekyll
  
  # 4. Copy favicon and other assets
  Copy-Item -Path .\public\favicon.svg -Destination .\dist\ -Force
  Copy-Item -Path .\public\404.html -Destination .\dist\ -Force
  
  # 5. Deploy to GitHub Pages
  # Use any GitHub Pages deployment tool or manually push to gh-pages branch
  ```

- **Automatic Deployment**: Push to the `main` branch, and the GitHub Actions workflow will deploy automatically

### Troubleshooting

#### Favicon 404 Error

The site previously had issues with the favicon.svg file returning 404 errors on GitHub Pages. To resolve this:

1. We've removed the favicon reference from the HTML completely
2. Created a special deployment script `deploy-no-favicon.ps1` that handles this automatically
3. For more details, see [FAVICON_ISSUE.md](./FAVICON_ISSUE.md)

#### Other Asset Issues

If you encounter other issues with assets not loading (404 errors):

1. Make sure all paths in index.html use the `/flid/` prefix for GitHub Pages
2. Check that the .nojekyll file is present in the root of the deployed site
3. Use the path-checker.html page to diagnose asset loading issues: https://mgras-maker.github.io/flid/path-checker.html

## Project Structure

```
src/
  ├── components/    # Reusable components
  ├── contexts/      # React contexts
  ├── data/          # Static data files
  ├── hooks/         # Custom React hooks
  ├── pages/         # Page components
  ├── types/         # TypeScript types
  └── utils/         # Utility functions
```

## License

This project is proprietary and not open for public use beyond viewing the deployed website.
