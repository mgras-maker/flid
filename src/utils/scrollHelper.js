/**
 * Utility functions to help with scrolling and navigation
 */

/**
 * Reliably scrolls to the top of the page with multiple methods to ensure it works
 * across different browsers and situations, including custom scrollbar containers
 * 
 * @param {boolean} smooth - Whether to use smooth scrolling animation
 */
export const scrollToTop = (smooth = true) => {
  const behavior = smooth ? 'smooth' : 'auto';
  
  // First try to find custom scroll container
  const customScrollContainer = document.querySelector('.custom-scroll-container');
  
  if (customScrollContainer) {
    // If we have custom scrollbar, scroll that container
    customScrollContainer.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
    
    // Also set direct properties for reliability
    requestAnimationFrame(() => {
      customScrollContainer.scrollTop = 0;
    });
  } else {
    // Fallback to standard window scrolling
    // Method 1: Using scrollTo with options
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
    
    // Method 2: Direct scroll properties (for Safari and older browsers)
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }
};

/**
 * Force scroll to top with multiple methods for maximum reliability
 */
export const forceScrollToTop = () => {
  // First immediate scroll
  window.scrollTo(0, 0);
  
  // Set scroll directly
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Use requestAnimationFrame for reliability
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
};

/**
 * Helper to scroll to a specific element by ID
 * 
 * @param {string} elementId - ID of element to scroll to
 * @param {boolean} smooth - Whether to use smooth scrolling
 */
export const scrollToElement = (elementId, smooth = true) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start'
    });
  }
};

export default {
  scrollToTop,
  forceScrollToTop,
  scrollToElement
};
