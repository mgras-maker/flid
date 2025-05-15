/**
 * Route prefetch helper to improve navigation performance
 * This will prefetch routes that are likely to be visited next
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Add type definition for Navigator.connection
declare global {
  interface Navigator {
    connection?: {
      saveData: boolean;
      effectiveType: string;
    };
  }
}

// Add type definition for requestIdleCallback
declare global {
  interface Window {
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  }
}

type PrefetchOptions = {
  paths: string[];
  enabledInProd?: boolean;
  scriptTimeout?: number;
  prefetchTimeout?: number;
};

/**
 * Hook to prefetch routes that are likely to be visited next
 * This improves navigation performance by loading routes in the background
 */
export const usePrefetchRoutes = ({
  paths,
  enabledInProd = true,
  scriptTimeout = 2000,  // Reduced wait time for initial render to be more responsive
  prefetchTimeout = 200  // Faster delay between prefetches
}: PrefetchOptions) => {
  const location = useLocation();
  
  useEffect(() => {
    // Only prefetch in production or if explicitly enabled
    const isProd = import.meta.env.PROD;
    if (!isProd && !enabledInProd) return;
    
    // Don't prefetch if we have network issues or slow connection
    // This avoids consuming bandwidth when it's limited
    if (navigator.connection && 
        (navigator.connection.saveData || 
         (navigator.connection as any).effectiveType === '2g')) {
      return;
    }
    
    // Avoid prefetching on pages with complex UI
    // Don't prefetch if the route has hash/search params (dynamic content)
    if (location.search !== '' || location.hash !== '') return;
      // Use the global prefetched routes set to avoid duplicates across renders
      // We'll use setTimeout for consistent behavior across browsers
    // Note: could use requestIdleCallback for future optimization if needed
      // Main prefetching function - using a properly declared timer
    const timer = setTimeout(() => {
      // Prefetch each path with a small delay between them
      paths.forEach((path, index) => {
        // Skip current page, already prefetched routes, and empty paths
        if (!path || path === '' || path === location.pathname || globalPrefetchedRoutes.has(path)) return;
        
        // Mark as prefetched
        globalPrefetchedRoutes.add(path);
        
        // Add a small delay between prefetches to avoid network congestion
        setTimeout(() => {
          try {
            // We'll skip prefetching in development as it causes 404 errors
            // In production with proper build this should work
            if (isProd) {
              const link = document.createElement('link');
              link.rel = 'prefetch';
              link.as = 'document';
              link.href = path;
              document.head.appendChild(link);
            }
            
            // For development debugging
            if (!isProd) {
              console.log(`Route prefetching is disabled in development to avoid 404 errors`);
            }
          } catch (error) {
            // Silently handle errors in prefetching
            console.debug('Prefetch error:', error);
          }
        }, index * prefetchTimeout);
      });
    }, scriptTimeout);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
};

// Create a global Set to track prefetched routes across the application
const globalPrefetchedRoutes = new Set<string>();

// Expose prefetched routes for external access
export const getPrefetchedRoutes = () => [...globalPrefetchedRoutes];

/**
 * Function to prefetch a single route on demand
 * @param path The route path to prefetch
 * @param immediate Whether to prefetch immediately (without delay)
 */
export const prefetchRoute = (path: string, immediate = false) => {
  // Skip if already prefetched
  if (globalPrefetchedRoutes.has(path)) return;
    // Mark as prefetched
  globalPrefetchedRoutes.add(path);
  
  const prefetch = () => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'document';
    // Use base path for GitHub Pages
    const basePath = import.meta.env.BASE_URL || '/';
    link.href = `${basePath}${path.startsWith('/') ? path.slice(1) : path}`;
    document.head.appendChild(link);
      if (import.meta.env.DEV) {
      console.log(`Manually prefetched route: ${path}`);
    }
  };
  
  if (immediate) {
    prefetch();
  } else {
    // Small delay for browser to handle more critical tasks first
    setTimeout(prefetch, 100);
  }
};

/**
 * Function to eagerly load critical chunks for faster interactions
 * @param chunkNames Array of chunk names to preload
 */
export const preloadChunks = (chunkNames: string[]) => {
  // Skip if no chunks provided
  if (!chunkNames || !Array.isArray(chunkNames) || chunkNames.length === 0) return;
  
  // Only run after main content is loaded
  if (document.readyState === 'complete') {
    chunkNames.forEach(chunkName => {
      const script = document.createElement('link');
      script.rel = 'prefetch';
      script.href = `/assets/${chunkName}`;
      script.as = 'script';
      document.head.appendChild(script);
    });
  } else {
    window.addEventListener('load', () => preloadChunks(chunkNames));
  }
};
