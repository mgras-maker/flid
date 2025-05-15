import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  location: string; // Usually from router's location.pathname
}

/**
 * PageTransition component wraps pages in a smooth transition effect
 * This helps prevent loading flickers and provides a polished UX
 * Optimized for performance with reduced transition times
 */
const PageTransition = ({ children, location }: PageTransitionProps) => {
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevLocationRef = useRef(location);
  
  // Track page content height to maintain consistent layout during transitions
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | "auto">("auto");
  
  useEffect(() => {
    // Measure content height for smooth transitions
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  useEffect(() => {
    // Skip animation for initial render or when back to the same page
    if (location === displayLocation) return;
    
    // Enable the transition effect - but with very short timing for faster transitions
    setIsTransitioning(true);
    
    // Store previous location for scroll position restoration
    prevLocationRef.current = displayLocation;
      // Capture height before transition to avoid layout shifts
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
    
    // Much faster transition - almost immediate to avoid noticeable delay
    setDisplayLocation(location);
    
    // After content change, reset height to auto immediately
    requestAnimationFrame(() => {
      setContentHeight("auto");
      setIsTransitioning(false);
    });
    
    return () => {};
  }, [location, displayLocation]);

  // Transition variants
  const pageTransition = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div 
      style={{ 
        height: isTransitioning ? contentHeight : "auto",
        minHeight: isTransitioning ? contentHeight : "auto", 
        overflow: "hidden",
        position: "relative"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          ref={contentRef}
          key={displayLocation}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
