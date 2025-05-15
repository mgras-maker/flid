/**
 * Performance utilities for optimizing rendering and loading
 */
import * as React from 'react';

/**
 * Throttle a function call to limit execution frequency
 * @param fn The function to throttle
 * @param limit The minimum time between executions in ms
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

/**
 * Debounce a function call
 * @param fn The function to debounce
 * @param delay The delay in ms
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Custom hook to throttle values (e.g. for animations)
 * @param value The value to throttle
 * @param limit The throttle interval in ms
 */
export function useThrottle<T>(value: T, limit: number = 100): T {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastRan = React.useRef(Date.now());
  
  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));
    
    return () => clearTimeout(handler);
  }, [value, limit]);
  
  return throttledValue;
}

/**
 * Generate hash for content-based cache busting
 */
export function generateContentHash(content: string): string {
  let hash = 0;
  if (content.length === 0) return hash.toString();
  
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash).toString(16);
}

// Performance monitoring utilities
type PerformanceMetric = {
  name: string;
  value: number;
  category: 'rendering' | 'network' | 'resource' | 'user';
  timestamp: number;
};

// Store performance metrics
const metrics: PerformanceMetric[] = [];

/**
 * Record a custom performance metric
 */
export function recordMetric(name: string, value: number, category: PerformanceMetric['category'] = 'user'): void {
  metrics.push({
    name,
    value,
    category,
    timestamp: Date.now()
  });
  
  // Keep metrics array from growing too large
  if (metrics.length > 100) {
    metrics.shift();
  }
}

/**
 * Track component render time
 */
export function useTrackRender(componentName: string): void {
  const startTime = React.useRef(performance.now());
  
  React.useEffect(() => {
    const renderTime = performance.now() - startTime.current;
    recordMetric(`${componentName}-render`, renderTime, 'rendering');
    
    return () => {
      recordMetric(`${componentName}-unmount`, performance.now() - startTime.current, 'rendering');
    };
  }, [componentName]);
}

/**
 * Report all collected metrics
 */
export function reportMetrics(): PerformanceMetric[] {
  return [...metrics];
}

// Basic implementation to collect core web vitals using Performance API
export function collectWebVitals(): void {
  // Use standard Performance API which is widely supported
  if ('performance' in window) {
    // Observe paint metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metricName = entry.name;
        const value = entry.startTime;
        
        if (metricName === 'first-paint') {
          recordMetric('FP', value, 'rendering');
        }
        
        if (metricName === 'first-contentful-paint') {
          recordMetric('FCP', value, 'rendering');
        }
      }
    });
    
    observer.observe({ type: 'paint', buffered: true });
    
    // Track navigation timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navEntry) {
          // Time to First Byte
          recordMetric('TTFB', navEntry.responseStart - navEntry.requestStart, 'network');
          
          // DOM Content Loaded
          recordMetric('DCL', navEntry.domContentLoadedEventEnd - navEntry.fetchStart, 'rendering');
          
          // Load Complete
          recordMetric('Load', navEntry.loadEventEnd - navEntry.fetchStart, 'rendering');
        }
      }, 0);
    });
  }
}
