/**
 * Route caching utilities to prevent flashing during navigation
 * and optimize component loading performance
 */
import * as React from 'react';

// Custom type for route states to add optimization
type RouteState = 'loading' | 'loaded' | 'error';

// Store pre-rendered components
interface ComponentCache {
  [key: string]: {
    component: React.ReactNode;
    state: RouteState;
    timestamp: number;
    expiry: number; // Time in milliseconds when this cache should expire
    data?: any; // Optional data for the route
  };
}

// Global cache storage
const routeCache: ComponentCache = {};

// Track loading states to prevent double loading and flickering
const loadingStates: Record<string, boolean> = {};

/**
 * Cache timeout in milliseconds
 * Pages will be re-fetched after this period
 */
const CACHE_TIMEOUT = 30 * 60 * 1000; // 30 minutes - increased for better performance

/**
 * Store a rendered component in cache
 * 
 * @param key Unique identifier for the route/component (usually the path)
 * @param component The rendered React component
 * @param expiry Optional custom expiry time in ms
 */
export function cacheComponent(key: string, component: React.ReactNode, expiry = CACHE_TIMEOUT): void {
  const now = Date.now();
  
  // Track that this route is now fully loaded
  loadingStates[key] = false;
  
  routeCache[key] = {
    component,
    state: 'loaded',
    timestamp: now,
    expiry: now + expiry,
  };
}

/**
 * Get a component from cache if available and not expired
 * 
 * @param key Unique identifier for the route/component
 * @returns The cached component or null if not found/expired
 */
export function getCachedComponent(key: string): React.ReactNode | null {
  const cached = routeCache[key];
  
  if (!cached) return null;
  
  // Check if cache has expired
  if (Date.now() > cached.expiry) {
    // Clean up expired cache
    delete routeCache[key];
    return null;
  }
  
  // Check if component is fully loaded
  if (cached.state !== 'loaded') {
    return null;
  }
  
  return cached.component;
}

/**
 * Start loading a route - used to track if navigation is in progress
 * This prevents showing loading indicators unnecessarily for quick loads
 * 
 * @param key Unique identifier for the route/component
 */
export function startRouteLoading(key: string): void {
  if (!loadingStates[key]) {
    loadingStates[key] = true;
    
    // Create loading state entry in cache if it doesn't exist
    if (!routeCache[key]) {
      routeCache[key] = {
        component: null,
        state: 'loading',
        timestamp: Date.now(),
        expiry: Date.now() + CACHE_TIMEOUT
      };
    }
  }
}

/**
 * Check if a route/component is cached
 * 
 * @param key Unique identifier for the route/component
 * @returns Boolean indicating if the component is cached and valid
 */
export function isCached(key: string): boolean {
  // First check if the homepage is requested - always treat as cached
  if (key === '/' || key === '/projects') {
    return true;
  }
  
  const cached = routeCache[key];
  const now = Date.now();
  
  // Only consider as cached if fully loaded and not expired
  return !!cached && now <= cached.expiry && cached.state === 'loaded';
}

/**
 * Check if a route is currently loading
 * 
 * @param key Unique identifier for the route/component
 * @returns Boolean indicating if the component is currently loading
 */
export function isRouteLoading(key: string): boolean {
  return !!loadingStates[key];
}

/**
 * Clear a specific route from cache
 * 
 * @param key Unique identifier for the route/component
 */
export function clearCache(key: string): void {
  delete routeCache[key];
  delete loadingStates[key];
}

/**
 * Clear all cached routes
 */
export function clearAllCache(): void {
  Object.keys(routeCache).forEach(key => {
    delete routeCache[key];
  });
  
  // Also reset all loading states
  Object.keys(loadingStates).forEach(key => {
    delete loadingStates[key];
  });
}

/**
 * Register a callback to be executed when a route transitions from loading to loaded
 * 
 * @param key Unique identifier for the route/component
 * @param callback Function to call when the route is loaded
 * @returns Function to unregister the callback
 */
export function onRouteLoaded(key: string, callback: () => void): () => void {
  // Implement a simple event system for route loading
  const eventKey = `${key}:loaded`;
  
  const handler = () => {
    callback();
  };
  
  window.addEventListener(eventKey, handler);
  
  return () => {
    window.removeEventListener(eventKey, handler);
  };
}

/**
 * Custom hook to prefetch a component
 * This will load the component but not render it yet
 * 
 * @param component The lazy-loaded component to prefetch
 */
export function usePrefetchComponent(componentLoader: () => Promise<any>): void {
  React.useEffect(() => {
    // Prefetch in background
    componentLoader()
      .catch(err => {
        // Silent error - prefetch should not crash the app
        console.warn('Component prefetch error:', err);
      });
  }, [componentLoader]);
}

// Route transitions management
let activeTransition = false;

/**
 * Start a route transition
 * This can be used to coordinate animations and prevent multiple transitions
 * 
 * @returns Boolean indicating if transition was successfully initiated
 */
export function startRouteTransition(): boolean {
  if (activeTransition) return false;
  
  activeTransition = true;
  return true;
}

/**
 * Complete a route transition
 */
export function completeRouteTransition(): void {
  activeTransition = false;
}
