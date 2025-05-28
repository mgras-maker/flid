// This utility script optimizes the navbar performance
// and handles various optimizations for a better user experience

import { getImagePath } from './paths';

/**
 * Preloads critical assets for faster initial rendering
 * Enhanced with intelligent lazy loading and priority management
 */
const preloadCriticalAssets = () => {
  // Only run in browser environment
  if (typeof document === 'undefined') return;  // Fonts are handled via @fontsource imports in main.jsx
  // No need for Google Fonts preloading since we use local font files
    // Get all critical images from the page that should be preloaded
  const criticalImagePaths = [
    // We're not preloading the logo since it's inline SVG
    // But we preload partner images that appear in the homepage
    getImagePath('partners/partner1.svg'),
    getImagePath('partners/partner2.svg'),
  ];
  
  // Preload critical images with priority management
  const preloadWithPriority = (paths) => {
    let delay = 0;
    
    paths.forEach(path => {
      setTimeout(() => {
        const img = new Image();
        img.fetchPriority = 'high'; // For modern browsers
        img.loading = 'eager';
        img.src = path;
        
        if (import.meta.env.DEV) {
          img.onload = () => console.debug(`[Preloader] Loaded: ${path}`);
          img.onerror = () => console.warn(`[Preloader] Failed: ${path}`);
        }
      }, delay);
      
      // Stagger preload requests to reduce initial load burst
      delay += 100;
    });
  };
  
  // Detect if we're on a fast connection to adjust preloading strategy
  if (navigator.connection && 
      (navigator.connection.saveData || 
       (navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')))) {
    // On slow connections or data-saving mode, don't preload non-critical assets
    console.debug('[Preloader] Data-saving or slow connection detected, limiting preloads');
  } else {
    // On fast connections, preload the critical assets
    preloadWithPriority(criticalImagePaths);
  }
};

/**
 * Detects high-density displays and dostosowuje odpowiednio wydajność
 * Zoptymalizowana dla zmniejszenia obciążenia GPU
 */
const optimizeForDisplayDensity = () => {
  const dpr = window.devicePixelRatio || 1;
  document.documentElement.style.setProperty('--device-pixel-ratio', dpr);
  
  // Całkowicie usuwamy efekty blur niezależnie od rozdzielczości - znacznie redukuje zużycie GPU
  document.documentElement.style.setProperty('--blur-quality', '0px');
};

/**
 * Add smooth scroll behavior when navbar links are clicked with improved user experience
 */
const setupSmoothNavigation = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Find all anchor links in the navbar (support both /#section and #section formats)
    const navLinks = document.querySelectorAll('.creative-navbar a[href^="/#"], .creative-navbar a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Get the target element
        const href = link.getAttribute('href');
        const isInPageLink = href.startsWith('#');
        const targetId = href.replace(/\/?#/, ''); // Remove / and # from the beginning
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Add a class for active state during scroll
          link.classList.add('scrolling-active');
          
          // Smooth scroll to the element with offset for navbar height
          const navbarHeight = document.querySelector('.creative-navbar')?.offsetHeight || 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20; // 20px extra padding
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Remove active state after scroll completes
          setTimeout(() => {
            link.classList.remove('scrolling-active');
          }, 1000);
          
          // Update URL without reload
          const newUrl = isInPageLink ? `#${targetId}` : `/#${targetId}`;
          history.pushState(null, null, newUrl);
        }
      });
    });
  });
};

// Run optimizations
preloadCriticalAssets();
optimizeForDisplayDensity();
setupSmoothNavigation();

export { preloadCriticalAssets, optimizeForDisplayDensity, setupSmoothNavigation };
