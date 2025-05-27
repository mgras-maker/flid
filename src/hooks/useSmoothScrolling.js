import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for smooth scrolling behavior 
 * Provides smooth scrolling for anchor links only (hash links)
 * Normal page navigation is handled by useScrollRestoration
 */
const useSmoothScrolling = () => {
  const { hash } = useLocation();

  // Handle anchor (hash) links smoothly
  useEffect(() => {
    // Only handle hash links
    if (hash) {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [hash]);

  return null;
};

export default useSmoothScrolling;
