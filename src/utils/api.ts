/**
 * Optimized API client for handling network requests
 * Includes request deduplication, caching, and retry mechanisms
 */

// Cache for API responses to prevent duplicate network requests
const apiCache = new Map<string, {
  data: any;
  timestamp: number;
  ttl: number;
}>();

// Track pending requests to avoid duplicate in-flight requests
const pendingRequests = new Map<string, Promise<any>>();

interface ApiOptions extends RequestInit {
  cacheTime?: number; // Time to cache in ms (0 = no cache)
  deduplicate?: boolean; // Whether to deduplicate in-flight requests
  retry?: number; // Number of retries on failure
  retryDelay?: number; // Delay between retries in ms
  timeout?: number; // Request timeout in ms
  tags?: string[]; // Cache invalidation tags
}

/**
 * Optimized fetch function with caching, deduplication and retry
 */
export const apiFetch = async <T = any>(
  url: string, 
  options: ApiOptions = {}
): Promise<T> => {
  const {
    cacheTime = 60000, // Default 1 minute cache
    deduplicate = true,
    retry = 1,
    retryDelay = 300,
    timeout = 8000,
    tags = [],
    ...fetchOptions
  } = options;
  
  // Generate cache key from URL and fetch options
  const cacheKey = getCacheKey(url, fetchOptions);
  
  // Check if response is in cache and still valid
  if (cacheTime > 0) {
    const cachedResponse = apiCache.get(cacheKey);
    if (cachedResponse && Date.now() - cachedResponse.timestamp < cachedResponse.ttl) {
      return cachedResponse.data as T;
    }
  }
  
  // Deduplicate in-flight requests to the same resource
  if (deduplicate && pendingRequests.has(cacheKey)) {
    return pendingRequests.get(cacheKey) as Promise<T>;
  }
  
  // Create a promise to handle the request with retries
  const fetchWithRetry = async (): Promise<T> => {
    let lastError: Error | null = null;
    
    // Try the request with retry logic
    for (let attempt = 0; attempt <= retry; attempt++) {
      try {
        // Create an AbortController to handle timeouts
        const controller = new AbortController();
        const signal = controller.signal;
        
        // Set up timeout
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        // Merge signal with options
        const requestOptions = {
          ...fetchOptions,
          signal,
        };
        
        // Make the request
        const response = await fetch(url, requestOptions);
        clearTimeout(timeoutId);
        
        // Handle non-2xx responses
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        // Parse response
        const data = await response.json();
        
        // Cache successful response if cache time > 0
        if (cacheTime > 0) {
          apiCache.set(cacheKey, {
            data,
            timestamp: Date.now(),
            ttl: cacheTime
          });
          
          // Add cache entry to tag index for invalidation
          if (tags.length > 0) {
            tags.forEach(tag => {
              const taggedKeys = tagIndex.get(tag) || new Set();
              taggedKeys.add(cacheKey);
              tagIndex.set(tag, taggedKeys);
            });
          }
        }
        
        // Remove from pending requests
        pendingRequests.delete(cacheKey);
        
        return data as T;
      } catch (error) {
        lastError = error as Error;
        
        // Don't wait on the last attempt
        if (attempt < retry) {
          // Incremental backoff
          await new Promise(resolve => 
            setTimeout(resolve, retryDelay * Math.pow(2, attempt))
          );
        }
      }
    }
    
    // Clean up pending requests on failure
    pendingRequests.delete(cacheKey);
    
    // All retries failed
    throw lastError;
  };
  
  // Track this request
  const request = fetchWithRetry();
  if (deduplicate) {
    pendingRequests.set(cacheKey, request);
  }
  
  return request;
};

// Cache invalidation by tags
const tagIndex = new Map<string, Set<string>>();

/**
 * Invalidate cache entries by tag
 */
export const invalidateCache = (tags: string[]): void => {
  tags.forEach(tag => {
    const keys = tagIndex.get(tag);
    if (keys) {
      keys.forEach(key => apiCache.delete(key));
      tagIndex.delete(tag);
    }
  });
};

/**
 * Generate a cache key from URL and options
 */
const getCacheKey = (url: string, options: RequestInit): string => {
  const { method = 'GET', headers = {}, body } = options;
  
  // For GET requests, URL is sufficient for the key
  if (method === 'GET' && !body) {
    return url;
  }
  
  // For other requests, consider method, headers, and body
  return `${method}:${url}:${JSON.stringify(headers)}:${body ? JSON.stringify(body) : ''}`;
};

/**
 * Clear entire API cache
 */
export const clearCache = (): void => {
  apiCache.clear();
  tagIndex.clear();
};
