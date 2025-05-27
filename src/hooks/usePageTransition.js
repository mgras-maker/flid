import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Custom hook for managing page transitions
export const usePageTransition = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('idle');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      console.log('🚀 Starting transition from', displayLocation.pathname, 'to', location.pathname);
      setTransitionStage('exiting');
    }
  }, [location, displayLocation]);

  const onExitComplete = () => {
    console.log('🏁 Exit animation complete, updating display location');
    setDisplayLocation(location);
    setTransitionStage('entering');
    
    // Reset to idle after animation
    setTimeout(() => {
      setTransitionStage('idle');
    }, 100);
  };

  return {
    displayLocation,
    currentLocation: location,
    transitionStage,
    onExitComplete,
    isTransitioning: transitionStage !== 'idle'
  };
};

// Custom AnimatePresence wrapper
export const PageTransitionWrapper = ({ children, locationKey, onExitComplete }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={onExitComplete}
    >
      <div key={locationKey}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default usePageTransition;
