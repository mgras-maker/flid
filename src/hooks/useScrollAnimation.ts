import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

const useScrollAnimation = (elementId: string, options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.2, once = true, rootMargin = '0px' } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize the callback function to prevent unnecessary observer recreation
  const observerCallback = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      // If once is true, unobserve after becoming visible
      if (once) {
        const element = document.getElementById(elementId);
        if (element && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      }
    } else if (!once) {
      // Only reset if the once option is false
      setIsVisible(false);
    }
  }, [elementId, once]);

  useEffect(() => {
    // Create the observer with memoized callback
    observerRef.current = new IntersectionObserver(
      observerCallback,
      { threshold, rootMargin }
    );

    const element = document.getElementById(elementId);
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
    
    // Proper cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementId, threshold, once, rootMargin, observerCallback]);

  return isVisible;
};

export default useScrollAnimation;
