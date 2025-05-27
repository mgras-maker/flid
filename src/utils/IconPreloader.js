// This utility script preloads SVG icons to ensure they appear instantly
// Completely optimized version - minimal GPU and memory usage

/**
 * Icon preloader - minimized to reduce GPU and memory usage
 * This version doesn't add any DOM elements or create unnecessary objects
 */
export const preloadIcons = () => {
  // No preloading - modern browsers handle SVG icons efficiently
  // This function is kept as a stub to maintain compatibility
  if (import.meta.env.DEV) {
    console.debug('[IconPreloader] Icon preloading disabled for better performance');
  }
  return;
};

// No need to run preloader on every page load - reduces unnecessary operations
// Just export the function which does nothing
export default preloadIcons;
