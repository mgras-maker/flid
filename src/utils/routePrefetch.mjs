/**
 * Route prefetch helper to improve navigation performance
 * This will prefetch routes that are likely to be visited next
 */

/**
 * Configuration for the prefetcher
 */
export const prefetchConfig = {
  // Maximum number of routes to prefetch at once
  maxPrefetchCount: 3,
  
  // Delay before prefetching in ms (after user hovers)
  prefetchDelay: 150,
  
  // Base path for GitHub Pages - adjust as needed 
  basePath: "/flid",
  
  // Number of prefetch attempts before giving up
  retryLimit: 2
};

/**
 * Track which routes have already been prefetched
 */
const prefetchedRoutes = new Set();

/**
 * Map of route names to their chunk file names
 * Updated manually when routes change
 */
export const routeChunks = {
  // Key routes
  "/": ["HomePage-chunk.js"],
  "/about": ["AboutPage-chunk.js"],
  "/projects": ["ProjectsPage-chunk.js", "ProjectCard-chunk.js"],
  "/process": ["ProcessPage-chunk.js", "DesignProcess-chunk.js"],
  "/contact": ["ContactPage-chunk.js"],
  
  // Project detail pages
  "/projects/energia-jutra": ["EnergiaJutraPage-chunk.js"],
  "/projects/sustainable-packaging": ["SustainablePackagingPage-chunk.js"],
  "/projects/lotnisko-wiec": ["ProjectDetailPage-chunk.js"]
};

/**
 * Create a unique key for intersection observer targets
 */
let observerTargetId = 0;

/**
 * Check if a route has already been prefetched
 */
export const isPrefetched = (route) => prefetchedRoutes.has(route);

/**
 * Mark a route as prefetched
 */
export const markAsPrefetched = (route) => {
  prefetchedRoutes.add(route);
};

/**
 * Get chunk names for a route
 */
export const getChunksForRoute = (route) => {
  return routeChunks[route] || [];
};

/**
 * Prefetch a route by loading its chunk files
 */
export const prefetchRoute = (route) => {
  if (isPrefetched(route)) return;
  
  const chunkNames = getChunksForRoute(route);
  
  if (!chunkNames.length) {
    console.warn(`No chunks defined for route: ${route}`);
    return;
  }
  
  // Only run after main content is loaded
  if (document.readyState === 'complete') {
    chunkNames.forEach(function (chunkName) {
        var script = document.createElement('link');
        script.rel = 'prefetch';
        script.href = "/flid/assets/".concat(chunkName);
        script.as = 'script';
        document.head.appendChild(script);
    });
  }
  else {
    window.addEventListener('load', function () {
      prefetchRoute(route);
    });
  }
  
  markAsPrefetched(route);
};

/**
 * Setup prefetching when user hovers over a link
 */
export const setupLinkPrefetch = (linkElement, route) => {
  if (!linkElement || !route) return;
  
  let prefetchTimeout;
  
  linkElement.addEventListener('mouseenter', () => {
    // Don't prefetch if already prefetched or on mobile
    if (isPrefetched(route) || window.innerWidth < 768) return;
    
    prefetchTimeout = setTimeout(() => {
      prefetchRoute(route);
    }, prefetchConfig.prefetchDelay);
  });
  
  linkElement.addEventListener('mouseleave', () => {
    clearTimeout(prefetchTimeout);
  });
};

/**
 * Setup intersection observer to prefetch as user scrolls near links
 */
export const observeLinksInView = (containerSelector = 'body', routeSelector = '[data-prefetch-route]') => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target;
          const route = link.dataset.prefetchRoute;
          
          if (route && !isPrefetched(route)) {
            prefetchRoute(route);
          }
          
          // Stop observing once prefetched
          observer.unobserve(link);
        }
      });
    },
    { rootMargin: '200px' }
  );
  
  // Start observing links
  const links = container.querySelectorAll(routeSelector);
  links.forEach((link) => observer.observe(link));
  
  return observer;
};

export default {
  prefetchRoute,
  setupLinkPrefetch,
  observeLinksInView,
  isPrefetched,
  getChunksForRoute,
  prefetchConfig
};
