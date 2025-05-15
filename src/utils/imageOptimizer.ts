/**
 * Image optimization utilities for the application
 * This helps with lazy loading and responsive images
 */
// React hooks removed as they're not used in this utility file

// Track images that have been loaded to prevent duplicate processing
const loadedImages = new Set<string>();

// LRU cache for processed images (limit to 50 entries to save memory)
const processedImageCache = new Map<string, HTMLImageElement>();
const MAX_CACHE_SIZE = 50;

interface ImageOptions {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  formats?: Array<'webp' | 'avif' | 'jpg' | 'png'>;
}

/**
 * Optimizes image loading with lazy loading for non-priority images
 * @param options - Image optimization options
 */
/**
 * Optimizes image loading with lazy loading and caching
 * @param options - Image optimization options
 */
export const optimizeImage = (options: ImageOptions): HTMLImageElement => {
  const {
    src,
    width,
    height,
    quality = 75,
    placeholder = 'empty',
    priority = false,
    fetchPriority = priority ? 'high' : 'auto',
    formats = ['webp', 'jpg'],
  } = options;
  
  // Check cache first for better performance
  const cacheKey = `${src}-${width || 'auto'}-${height || 'auto'}`;
  if (processedImageCache.has(cacheKey)) {
    return processedImageCache.get(cacheKey)!;
  }
  
  const img = document.createElement('img');
  
  // Set image attributes
  img.src = src;
  if (width) img.width = width;
  if (height) img.height = height;
  img.setAttribute('fetchpriority', fetchPriority);
  img.setAttribute('data-quality', quality.toString());
  
  // Add loading attribute for non-priority images
  if (!priority) {
    img.loading = 'lazy';
    img.decoding = 'async';
  } else {
    img.decoding = 'sync';
  }
  
  // Generate srcset for responsive images if width is provided
  if (width && width > 0) {
    const viewportWidths = [
      Math.round(width * 0.5), // Small screens
      width,                   // Base size
      Math.round(width * 2)    // High DPI screens (2x)
    ];
    img.srcset = generateSrcSet(src, viewportWidths);
    
    // Create picture element with webp/avif support if formats are specified
    if (formats.length > 1) {
      const extension = src.split('.').pop() || 'jpg';
      const basePath = src.substring(0, src.lastIndexOf('.'));
      
      formats.forEach(format => {
        if (format !== extension) {
          const source = document.createElement('source');
          source.srcset = generateSrcSet(`${basePath}.${format}`, viewportWidths);
          source.type = `image/${format}`;
          const picture = document.createElement('picture');
          picture.appendChild(source);
          picture.appendChild(img);
        }
      });
    }
  }
  
  // Add blur placeholder if requested
  if (placeholder === 'blur' && !loadedImages.has(src)) {
    img.style.filter = 'blur(20px)';
    img.style.transition = 'filter 0.3s ease-out';
    
    img.onload = () => {
      img.style.filter = '';
      loadedImages.add(src);
        // Cache the processed image
      if (processedImageCache.size >= MAX_CACHE_SIZE) {
        // Remove the first (oldest) item if we exceed the cache limit
        const firstKey = processedImageCache.keys().next().value;
        if (firstKey) {
          processedImageCache.delete(firstKey);
        }
      }
      processedImageCache.set(cacheKey, img);
    };
  }
  
  return img;
};

/**
 * Preloads critical images for faster rendering
 * @param imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths: string[]): void => {
  imagePaths.forEach(path => {
    if (!loadedImages.has(path)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = 'image';
      document.head.appendChild(link);
      loadedImages.add(path);
    }
  });
};

/**
 * Generates a responsive source set for different screen sizes
 * @param src - Base image source
 * @param widths - Array of widths for srcset
 * @returns - Srcset string for responsive images
 */
export const generateSrcSet = (src: string, widths: number[]): string => {
  // Extract file extension
  const extension = src.split('.').pop() || 'jpg';
  const basePath = src.substring(0, src.lastIndexOf('.'));
    return widths
    .map(width => `${basePath}-${width}.${extension} ${width}w`)
    .join(', ');
};

export default {
  optimizeImage,
  preloadImages,
  generateSrcSet,
};
