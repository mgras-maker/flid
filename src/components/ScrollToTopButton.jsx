import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion, useIsMobile } from '../hooks/useMatchMedia';
import { scrollToTop } from '../utils/scrollHelper';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  
  // Reduce animations based on device or user preference
  const shouldReduceMotion = prefersReducedMotion || isMobile;    // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // First check if we have a custom scroll container
      const customScrollContainer = document.querySelector('.custom-scroll-container');
      let scrollY = 0;
      
      if (customScrollContainer) {
        // Use custom container's scroll position
        scrollY = customScrollContainer.scrollTop;
      } else {
        // Fallback to window scroll position
        scrollY = window.scrollY;
      }
      
      // Show button when page is scrolled more than 300px (reduced threshold)
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Add event listeners to both window and custom container
    // Use a timeout to ensure DOM is ready
    const setupScrollListener = () => {
      const customScrollContainer = document.querySelector('.custom-scroll-container');
      
      if (customScrollContainer) {
        customScrollContainer.addEventListener('scroll', toggleVisibility);
        // Initial check for custom container
        toggleVisibility();
        
        return () => {
          customScrollContainer.removeEventListener('scroll', toggleVisibility);
        };
      } else {
        window.addEventListener('scroll', toggleVisibility);
        // Initial check for window
        toggleVisibility();
        
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }
    };
    
    // Setup listener with small delay to ensure DOM is ready
    const timeout = setTimeout(setupScrollListener, 100);
    const cleanup = setupScrollListener();
    
    return () => {
      clearTimeout(timeout);
      if (cleanup) cleanup();
    };
  }, []);
  
  // Scroll to top function utilizing our shared scroll utility
  const handleScrollToTop = () => {
    scrollToTop(true); // Use smooth scrolling
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <ButtonContainer
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          transition={{ 
            duration: shouldReduceMotion ? 0.15 : 0.2,
            type: shouldReduceMotion ? "tween" : "spring"
          }}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 5L5 12M12 5L19 12M12 5V19" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </ButtonContainer>
      )}
    </AnimatePresence>
  );
};

const ButtonContainer = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px; /* Increased size */
  height: 60px; /* Increased size */
  border-radius: 50%;
  background: var(--primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25); /* Enhanced shadow */
  z-index: 9999; /* Increased z-index to ensure it's above all other elements */
  will-change: transform;
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 20px;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    bottom: 16px;
    right: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
    &:hover {
    background: var(--secondary);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  svg {
    width: 28px;
    height: 28px;
  }
`;

export default ScrollToTopButton;
