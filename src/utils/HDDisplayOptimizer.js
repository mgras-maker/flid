// HD Display optimizer for FLID website
// This script ensures proper transitions on HD and Ultra HD displays

class HDDisplayOptimizer {
  constructor() {
    this.addEventListeners();
    this.detectDisplaySize();
  }
  
  // Detect HD or Ultra HD displays and add appropriate classes
  detectDisplaySize() {
    const width = window.screen.width;
    const height = window.screen.height;
    const body = document.body;
      // Add classes for UHD (4K) displays
    if (width >= 3840 || height >= 2160) {
      body.classList.add('ultra-hd-display');
      body.classList.add('hd-display');
      // Only log in development mode
      if (import.meta.env.DEV) {
        console.log('Ultra HD display detected');
      }
    } 
    // Add classes for HD (1080p and above) displays
    else if (width >= 1920 || height >= 1080) {
      body.classList.add('hd-display');
      // Only log in development mode
      if (import.meta.env.DEV) {
        console.log('HD display detected');
      }
    }
  }
  // Zoptymalizowana wersja - mniej obciążająca animacje
  optimizeForDisplayType() {
    // Usuwamy specjalne efekty dla różnych rozdzielczości
    // i ustawiamy jednolite wartości dla wszystkich typów ekranów
    document.documentElement.style.setProperty('--transition-multiplier', '1.0');
    document.documentElement.style.setProperty('--blur-quality', '0px'); // Usunięcie efektu blur
  }
  
  // Ensure navigation transitions are smooth on high-res displays
  enhanceNavigationTransitions() {
    const navLinks = document.querySelectorAll('a[href^="/"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (!e.ctrlKey && !e.metaKey) {
          // Only for internal navigation, not new tabs
          const currentPath = window.location.pathname;
          const targetPath = link.getAttribute('href');
          
          if (currentPath !== targetPath) {
            // Add transition class to prevent flashing
            document.documentElement.classList.add('page-transition-active');
            
            // Remove the class after animation completes
            setTimeout(() => {
              document.documentElement.classList.remove('page-transition-active');
            }, 700);
          }
        }
      });
    });
  }
  
  // Add event listeners for resizing and page loads
  addEventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
      this.detectDisplaySize();
      this.optimizeForDisplayType();
      this.enhanceNavigationTransitions();
    });
    
    window.addEventListener('resize', () => {
      this.detectDisplaySize();
      this.optimizeForDisplayType();
    });
  }
}

// Initialize the optimizer as a singleton to prevent multiple instances
let hdOptimizer;

// Check if we're in the browser environment and if it hasn't been initialized yet
if (typeof window !== 'undefined' && !hdOptimizer) {
  hdOptimizer = new HDDisplayOptimizer();
}

export default hdOptimizer;
