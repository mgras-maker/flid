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

There are two ways to deploy:

1. **Manual Deployment**: Run `npm run deploy` on your local machine
2. **Automatic Deployment**: Push to the `main` branch, and the GitHub Actions workflow will deploy automatically

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
