import { useState, useEffect } from 'react';

/**
 * Hook to check if a media query matches
 * @param {string} query - Media query to check
 * @returns {boolean} - True if media query matches, false otherwise
 */
const useMatchMedia = (query) => {
  // Default to true for SSR
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Create media query list
    const mediaQuery = window.matchMedia(query);
    
    // Set initial state
    setMatches(mediaQuery.matches);
    
    // Define callback function
    const handleChange = (event) => {
      setMatches(event.matches);
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Remove event listener on cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]); // Re-run if query changes
  
  return matches;
};

/**
 * Predefined media query hooks
 */
export const useIsMobile = () => useMatchMedia('(max-width: 767px)');
export const useIsTablet = () => useMatchMedia('(min-width: 768px) and (max-width: 991px)');
export const useIsDesktop = () => useMatchMedia('(min-width: 992px)');
export const usePrefersReducedMotion = () => useMatchMedia('(prefers-reduced-motion: reduce)');

export default useMatchMedia;
