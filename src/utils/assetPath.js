// Asset path utility for GitHub Pages deployment
// This ensures all assets are correctly prefixed with the base path

/**
 * Get the correct asset path for the current environment
 * @param {string} path - The relative path to the asset
 * @returns {string} - The correctly prefixed path
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present to make it relative
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Vite automatically handles the base path, so we just need to ensure
  // the path starts with a slash for proper resolution
  return `/${cleanPath}`;
};

/**
 * Get the base URL for the application
 * @returns {string} - The base URL
 */
export const getBaseUrl = () => {
  if (import.meta.env.PROD) {
    return '/flid';
  }
  return '';
};

export default getAssetPath;
