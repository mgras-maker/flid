/**
 * Resource preloading utility
 * Handles preloading of critical resources for better performance
 */

interface PreloadLink {
  rel: string;
  href: string;
  as: string;
  type?: string;
  crossOrigin?: string;
  importance?: string;
}

export const preloadFonts = (): void => {
  // Critical fonts preload
  const preloadLinks: PreloadLink[] = [
    // Font files - improves Web Vitals by preloading fonts
    { rel: 'preload', href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff', as: 'font', type: 'font/woff', crossOrigin: 'anonymous', importance: 'high' },
    { rel: 'preload', href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff', as: 'font', type: 'font/woff', crossOrigin: 'anonymous', importance: 'high' }
  ];
    // Critical CSS - improves FCP
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'stylesheet';
  criticalCSS.href = '/flid/fonts/fonts.css';
  criticalCSS.setAttribute('fetchpriority', 'high');
  document.head.appendChild(criticalCSS);
  
  // Preconnect to domains for faster resource loading
  const preconnectDomains = [
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com'
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Add preload links with fetch priority
  preloadLinks.forEach((linkAttrs) => {
    const link = document.createElement('link');
    Object.entries(linkAttrs).forEach(([attr, value]) => {
      link.setAttribute(attr, value as string);
    });
    document.head.appendChild(link);
  });
  
  // Preload critical images and assets based on current route
  const criticalAssets = [
    { path: '/about/vision.jpg', type: 'image', route: 'about' },
    { path: '/projects/urban-sustainability.jpg', type: 'image', route: 'projects' }
  ];
    // Only preload images for the current route to avoid unnecessary downloads
  const currentPath = window.location.pathname;
  criticalAssets.forEach(asset => {
    // Only preload for the specific route, not on homepage
    if (currentPath.includes(asset.route)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = asset.type;
      link.href = asset.path;
      // Add fetchpriority to indicate importance
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  });
};
