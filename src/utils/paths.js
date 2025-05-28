/**
 * Utility functions for handling asset paths in different environments
 */

/**
 * Get the base path for the current environment
 * @returns {string} Base path (empty string for dev, '/flid' for production)
 */
export const getBasePath = () => {
  return import.meta.env.PROD ? '/flid' : '';
};

/**
 * Generate a properly formatted image path for the current environment
 * @param {string} imagePath - The image path relative to /images/ (e.g., 'placeholder.svg')
 * @returns {string} Complete image path with base path
 */
export const getImagePath = (imagePath) => {
  const basePath = getBasePath();
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const cleanImagePath = cleanPath.startsWith('images/') ? cleanPath : `images/${cleanPath}`;
  return `${basePath}/${cleanImagePath}`;
};

/**
 * Generate a properly formatted asset path for the current environment
 * @param {string} assetPath - The asset path (e.g., '/images/logo.svg', 'images/logo.svg', 'logo.svg')
 * @returns {string} Complete asset path with base path
 */
export const getAssetPath = (assetPath) => {
  const basePath = getBasePath();
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${basePath}/${cleanPath}`;
};
