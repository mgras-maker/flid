import { useState, useEffect } from 'react';

/**
 * Hook that delays animations until after initial page load
 * Use this to make pages appear instantly and then animate elements
 * 
 * @param delayMs - Optional delay in milliseconds before allowing animations
 * @returns Boolean indicating if animations should run
 */
export function useDelayedAnimation(delayMs: number = 0): boolean {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  
  useEffect(() => {
    // Start by marking that page has initially rendered
    if (typeof window !== 'undefined') {
      window.__FLID_RENDERED = true;
    }
    
    // Then enable animations after a delay
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delayMs);
    
    return () => clearTimeout(timer);
  }, [delayMs]);
  
  return shouldAnimate;
}

// Add typing for window object
declare global {
  interface Window {
    __FLID_RENDERED?: boolean;
  }
}
