import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user's system prefers dark mode
 * and listen for changes to that preference
 */
export const usePrefersDarkMode = () => {
  // Initialize with current system preference
  const [prefersDarkMode, setPrefersDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  useEffect(() => {
    // Create media query list
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Define handler to update state
    const handleChange = (event) => {
      setPrefersDarkMode(event.matches);
    };
    
    // Add event listener for changes to color scheme preference
    if (mediaQuery.addEventListener) {
      // Modern browsers
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Older browsers
      mediaQuery.addListener(handleChange);
    }
    
    // Clean up event listener
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  
  return prefersDarkMode;
};

export default usePrefersDarkMode;
