import { useEffect } from 'react';
import { preloadFonts } from '../../utils/fontLoader.ts';

/**
 * Component to preload essential resources on application start
 */
const ResourcePreloader = () => {  useEffect(() => {    // Images that need preloading - match paths used in projectCardsData
    const imagesToPreload = [
      './projects/lotnisko-wiec.jpg',
      './projects/eco-packaging.jpg', 
      './projects/energia-jutra.jpg'
    ];
    
    // Create a promise for each image load
    const imagePromises = imagesToPreload.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`✓ Image loaded: ${src}`);
          resolve(src);
        };
        img.onerror = () => {
          console.error(`✗ Failed to load image: ${src}`);
          reject(src);
        };
        img.src = src;
      });
    });

    // Preload fonts using our utility
    const fontPromise = preloadFonts()
      .then(() => console.log('✓ Fonts preloaded via fontLoader'))
      .catch(err => console.error('✗ Error preloading fonts:', err));

    // Load all resources
    Promise.all([
      fontPromise,
      ...imagePromises
    ])
      .then(() => console.log('✓ All critical resources preloaded successfully'))
      .catch(err => console.error('✗ Some resources failed to preload', err));
    
  }, []);

  // This component doesn't render anything
  return null;
};

export default ResourcePreloader;
