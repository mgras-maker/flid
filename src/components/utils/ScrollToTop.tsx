import { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls to the top of the page whenever the route changes
 * Place this component near the root of your app, inside the Router but outside of Routes
 * Memoized to prevent unnecessary re-renders
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes - using instant scroll to avoid flickering
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }, [pathname]);

  return null;
};

// Memoize component as it never needs to re-render based on props
export default memo(ScrollToTop);
