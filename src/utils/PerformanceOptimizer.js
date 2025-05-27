/**
 * PerformanceOptimizer.js
 * 
 * Utility file that contains functions to optimize application performance
 * and reduce GPU usage across the application
 */

/**
 * Utilities to reduce GPU and CPU load from animations and effects
 */
class PerformanceOptimizer {
  constructor() {
    this.isReducedMotion = this.checkReducedMotion();
    this.isLowPowerMode = this.checkLowPowerMode();
    this.reduceAnimations = this.isReducedMotion || this.isLowPowerMode;
    
    // Add CSS custom properties to control animations globally
    this.applyOptimizations();
    
    // Listen for changes
    this.addMediaQueryListeners();
  }
  
  /**
   * Check if user prefers reduced motion
   */
  checkReducedMotion() {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  
  /**
   * Check if device is likely in low power mode based on battery API or user agent
   */
  checkLowPowerMode() {
    if (typeof window === 'undefined') return false;
    
    // Try to use battery API if available
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        // If battery level is low, enable optimizations
        if (battery.level < 0.2 && !battery.charging) {
          this.isLowPowerMode = true;
          this.applyOptimizations();
        }
      }).catch(() => {
        // Battery API failed, ignore
      });
    }
    
    return false;
  }
  
  /**
   * Apply performance optimizations to the document
   */
  applyOptimizations() {
    if (typeof document === 'undefined') return;
    
    document.documentElement.style.setProperty('--animation-duration-multiplier', 
      this.reduceAnimations ? '0.5' : '1');
    
    document.documentElement.style.setProperty('--animation-enabled', 
      this.reduceAnimations ? '0' : '1');
    
    document.documentElement.style.setProperty('--blur-enabled', 
      this.reduceAnimations ? '0' : '1');
      
    document.documentElement.style.setProperty('--blur-strength', 
      this.reduceAnimations ? '0px' : 'var(--blur-quality, 5px)');
      
    document.documentElement.style.setProperty('--effects-level',
      this.reduceAnimations ? '0' : '1');
      
    // Add class to body for CSS-based optimizations
    if (this.reduceAnimations) {
      document.body.classList.add('reduced-animations');
      document.body.classList.add('performance-optimized');
    }
  }
  
  /**
   * Add media query listeners to adjust optimizations when preferences change
   */
  addMediaQueryListeners() {
    if (typeof window === 'undefined') return;
    
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.isReducedMotion = e.matches;
      this.reduceAnimations = this.isReducedMotion || this.isLowPowerMode;
      this.applyOptimizations();
    });
  }
}

// Initialize as a singleton
const performanceOptimizer = (typeof window !== 'undefined') ? new PerformanceOptimizer() : null;

export default performanceOptimizer;
