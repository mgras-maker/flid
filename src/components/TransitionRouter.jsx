import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Individual page wrapper that ensures proper animation lifecycle
const AnimatedPage = ({ children, pageKey }) => {
  const [isExiting, setIsExiting] = useState(false);

  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.995,
      y: 15,
      filter: "blur(1px)",
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 1.005,
      y: -8,
      filter: "blur(0.5px)",
      transition: {
        duration: 0.6,
        ease: [0.7, 0, 0.84, 0],
        delay: 0
      }
    }
  };

  return (
    <motion.div
      key={pageKey}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="animated-page"
      data-page={pageKey}
      data-exiting={isExiting}
      onAnimationStart={(definition) => {
        console.log(`🎬 [${pageKey}] Animation started:`, definition);
        if (definition === "exit") {
          console.log(`🚪 [${pageKey}] Exit animation starting!`);
          setIsExiting(true);
        }
      }}
      onAnimationComplete={(definition) => {
        console.log(`✅ [${pageKey}] Animation completed:`, definition);
        if (definition === "exit") {
          console.log(`🚪 [${pageKey}] Exit animation completed!`);
          setIsExiting(false);
        }
      }}
      style={{ 
        willChange: 'transform, opacity, filter',
        transformStyle: 'preserve-3d',
        position: 'relative',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children}
    </motion.div>
  );
};

// Router wrapper that handles transitions properly
const TransitionRouter = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    console.log('🗺️ Location changed from', displayLocation.pathname, 'to', location.pathname);
    
    if (location !== displayLocation) {
      setTransitionStage('exit');
    }
  }, [location, displayLocation]);

  return (
    <AnimatePresence 
      mode="wait"
      initial={false}
      onExitComplete={() => {
        console.log('🔄 Exit complete, updating display location');
        setDisplayLocation(location);
        setTransitionStage('enter');
      }}
    >
      <div key={displayLocation.pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export { AnimatedPage, TransitionRouter };
