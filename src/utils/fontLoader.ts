/**
 * Font management utility for the application
 * This module helps with:
 * - Preloading fonts used in the app
 * - Providing consistent fonts for components that need them
 */

// Font paths for Three.js Text components
export const fonts = {
  // Default fonts
  regular: undefined, // Use the default Three.js font
  
  // Application fonts - Using Google Fonts CDN URLs for better reliability
  roboto: {
    regular: undefined, // Default font when not specified
    bold: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    light: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
  }
};

// Check font availability
export const checkFontAvailability = async (fontUrls: string[]): Promise<string[]> => {
  const unavailableFonts: string[] = [];
  
  for (const url of fontUrls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        unavailableFonts.push(url);
        console.error(`Font not available: ${url}`);
      }
    } catch (error) {
      unavailableFonts.push(url);
      console.error(`Error checking font: ${url}`, error);
    }
  }
  
  return unavailableFonts;
};

// Preload fonts
export const preloadFonts = async (): Promise<void> => {
  const fontUrls = [
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
    // Add other fonts here as needed
  ];
    
  // Add actual font-face definitions to ensure proper loading for Three.js
  const fontFaceCSS = `
    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Roboto';
      font-weight: 300;
      src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2') format('woff2');
    }
  `;
  
  // Inject font-face CSS directly
  const style = document.createElement('style');
  style.textContent = fontFaceCSS;
  document.head.appendChild(style);
  
  // Create link preload tags to prioritize font loading
  fontUrls.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = fontUrl;
    link.as = 'font';
    link.type = 'font/ttf';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });  // Create a stylesheet link to ensure fonts are loaded
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = './public/fonts.css';
  document.head.appendChild(cssLink);
  
  // Wait for availability check
  const unavailableFonts = await checkFontAvailability(fontUrls);
  
  if (unavailableFonts.length > 0) {
    console.warn('Some fonts are not available:', unavailableFonts);
  }
};

export default {
  fonts,
  checkFontAvailability,
  preloadFonts
};
