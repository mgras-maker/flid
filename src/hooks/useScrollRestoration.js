import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * A custom hook that handles scroll restoration behavior when navigating between pages.
 * - When navigating forward or backward in history, it restores the previous scroll position
 * - When clicking a link (PUSH navigation), it scrolls to top
 * - Provides improved behavior compared to browser's default scroll restoration
 */
const useScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    // Check if this is a new navigation (PUSH) or history traversal (POP)
    if (navigationType === 'PUSH') {
      // For new navigation (clicking links), scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' for immediate scrolling
      });
      
      // Ensure scroll is really at the top with requestAnimationFrame
      requestAnimationFrame(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
      });
    } else {
      // For back/forward navigation, we'll use browser's built-in history scroll restoration
      // which is enabled by default in modern browsers
      
      // Extra insurance in case browser's scroll restoration isn't working
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    }
  }, [location.pathname, navigationType]);
};

export default useScrollRestoration;
