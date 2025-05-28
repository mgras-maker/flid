import { useState } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../hooks/useMatchMedia';

/**
 * OptimizedImage component for responsive and lazy-loaded images
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.placeholderSrc - Low-quality placeholder image URL
 * @param {string} props.aspectRatio - Image aspect ratio (e.g., '16:9', '1:1')
 * @param {Object} props.imgStyles - Additional styles for the image
 * @param {boolean} props.priority - Whether this image should load with priority
 * @param {string} props.className - Additional class names
 */
const OptimizedImage = ({
  src,
  alt,
  placeholderSrc = '/images/placeholder.svg',
  aspectRatio = 'auto',
  imgStyles = {},
  priority = false,
  className = '',
  ...props
}) => {
  console.log('OptimizedImage rendering:', { src, alt, priority });
    const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isMobile = useIsMobile();
  
  // Calculate aspect ratio for container
  const aspectRatioParts = aspectRatio.split(':');
  const aspectRatioValue = aspectRatio !== 'auto' && aspectRatioParts.length === 2 
    ? (parseInt(aspectRatioParts[1]) / parseInt(aspectRatioParts[0]) * 100)
    : null;    // Handle image load
  const handleLoad = () => {
    console.log('Image loaded successfully:', src);
    setLoaded(true);
  };
  
  // Handle image error with improved fallback handling
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  return (
    <ImageContainer 
      className={`optimized-image ${className}`} 
      $aspectRatio={aspectRatioValue}
      $hasImage={loaded && !error}
      {...props}
    >
      {/* Debug info */}
      {console.log('Rendering OptimizedImage:', { src, loaded, error, aspectRatioValue })}
      
      {/* Main image - always render but control visibility */}
      <StyledImage
        src={error ? placeholderSrc : src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...imgStyles,
          opacity: loaded || error ? 1 : 0,
          transition: 'opacity 0.3s ease',
          ...(isMobile && {
            // Mobile-specific styles if needed
          })
        }}
        $aspectRatio={aspectRatioValue} // Pass the aspectRatioValue to StyledImage
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.$aspectRatio ? '0' : 'auto'};
  padding-bottom: ${props => props.$aspectRatio ? `${props.$aspectRatio}%` : '0'};
  overflow: hidden;
  background-color: var(--card-bg);
  display: block; // Ensure container takes up space

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--border);
    opacity: ${props => props.$hasImage ? 0 : 0.1};
    z-index: 0;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  z-index: 1; // To be above the ::before pseudo-element of ImageContainer

  ${props => props.$aspectRatio ? `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%; // Fill the container which has padding-bottom for aspect ratio
    object-fit: cover; // Cover the area defined by ImageContainer
  ` : `
    position: relative; // Take space in the document flow
    height: auto; // Natural height based on width and image's aspect ratio
    // object-fit is not strictly necessary here as width:100% and height:auto preserves aspect ratio.
  `}
`;

export default OptimizedImage;
