import { motion } from 'framer-motion';
import { memo, useEffect } from 'react';

interface LoadingAnimationProps {
  size?: 'small' | 'medium' | 'large';
  fadeIn?: boolean;
}

// Size mappings - moved outside the component to avoid recreation on each render
const sizeMap = {
  small: 'h-8 w-8',
  medium: 'h-16 w-16',
  large: 'h-24 w-24',
};

// Add typing for window object
declare global {
  interface Window {
    __FLID_LOADING?: boolean;
    __FLID_LAST_LOAD_TIME?: number;
  }
}

// Optimize with memo to prevent unnecessary re-renders
const LoadingAnimation = memo(({ size = 'medium' }: LoadingAnimationProps) => {
  // Always show loading, without any state changes that could cause flickering
  const stableLoading = true;
  
  // Skip all loading state management to prevent any flicker
  useEffect(() => {
    // Simply mark that loading has started with no conditions
    if (typeof window !== 'undefined') {
      window.__FLID_LOADING = true;
      window.__FLID_LAST_LOAD_TIME = Date.now();
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.__FLID_LOADING = false;
      }
    };
  }, []);

  // Variants for animation
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity
      }
    }
  };  const dotVariants = {
    initial: { scale: 0.8 },
    animate: { 
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };
  
  // Only show if stable loading is true to prevent flashing
  if (!stableLoading) {
    return null;
  }
  
  return (
    <motion.div
      className={`relative ${sizeMap[size]}`}
      variants={containerVariants}      initial={{ opacity: 1 }}
      animate={{ 
        opacity: 1,
        rotate: 360
      }}
      transition={{ 
        opacity: { duration: 0 },
        rotate: {
          duration: 2,
          ease: "linear",
          repeat: Infinity
        }
      }}
    >
      {[...Array(4)].map((_, i) => {
        const angle = (i * 90) * (Math.PI / 180); // Convert to radians
        const radius = size === 'small' ? 30 : size === 'medium' ? 45 : 60; // Adjust radius based on size
        const x = Math.cos(angle) * radius; 
        const y = Math.sin(angle) * radius;
        
        // Calculate dot size based on component size
        const dotSize = size === 'small' ? '8px' : size === 'medium' ? '12px' : '16px';
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-flid-accent"
            style={{
              width: dotSize,
              height: dotSize,
              top: '50%',
              left: '50%',
              x: x,
              y: y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 0.2, // stagger the animations
            }}
          />
        );
      })}
    </motion.div>  );
});

// Export the memoized component
export default LoadingAnimation;
