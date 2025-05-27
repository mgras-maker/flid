import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CustomScrollbar = ({ children }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollbarActive, setIsScrollbarActive] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0, scrollTop: 0 });
  
  const containerRef = useRef(null);
  const thumbRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Show scrollbar on interaction and hide after delay
  const showScrollbar = () => {
    setIsScrollbarActive(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDragging) {
        setIsScrollbarActive(false);
      }
    }, 1500); // Hide after 1.5 seconds of inactivity
  };  // Simplified scroll wheel handling - let browser handle natural scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Simple wheel event listener just for showing scrollbar
    const handleWheel = () => {
      showScrollbar();
    };

    // Use passive listener for better performance
    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [showScrollbar]);

  // Calculate scrollbar dimensions and visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollbar = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      // Check if content is scrollable
      const contentScrollable = scrollHeight > clientHeight;
      setIsVisible(contentScrollable);
      
      if (contentScrollable) {
        // Calculate scroll percentage
        const maxScroll = scrollHeight - clientHeight;
        const percent = maxScroll > 0 ? scrollTop / maxScroll : 0;
        setScrollPercent(percent);
        
        // Calculate thumb height (proportional to viewport/content ratio)
        const thumbHeightRatio = clientHeight / scrollHeight;
        const minThumbHeight = 24; // Minimum thumb height in pixels
        const maxThumbHeight = clientHeight * 0.3; // Maximum 30% of container height
        const calculatedHeight = Math.max(
          minThumbHeight, 
          Math.min(maxThumbHeight, thumbHeightRatio * clientHeight)
        );
        setThumbHeight(calculatedHeight);
        
        // Show scrollbar on scroll
        showScrollbar();
      }
    };

    const handleScroll = () => {
      updateScrollbar();
      showScrollbar();
    };

    const handleMouseEnter = () => {
      showScrollbar();
    };

    const handleMouseLeave = () => {
      if (!isDragging) {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
        hideTimeoutRef.current = setTimeout(() => {
          setIsScrollbarActive(false);
        }, 500);
      }
    };

    // Initial calculation
    updateScrollbar();

    // Listen for scroll events with passive option for better performance
    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Listen for resize events
    const resizeObserver = new ResizeObserver(updateScrollbar);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isDragging, showScrollbar]);  // Handle thumb drag with simplified logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setIsScrollbarActive(true);
    setDragStart({
      y: e.clientY,
      scrollTop: container.scrollTop
    });

    document.body.style.userSelect = 'none';

    // Clear hide timeout during drag
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = containerRef.current;
    if (!container) return;

    const { scrollHeight, clientHeight } = container;
    const maxScroll = scrollHeight - clientHeight;
    
    // Calculate movement delta
    const deltaY = e.clientY - dragStart.y;
    
    // Calculate new scroll position
    const trackHeight = clientHeight - thumbHeight;
    const scrollRatio = deltaY / trackHeight;
    const newScrollTop = dragStart.scrollTop + (scrollRatio * maxScroll);
    
    // Apply scroll with bounds checking
    const targetScroll = Math.max(0, Math.min(maxScroll, newScrollTop));
    
    // Direct assignment for immediate response during drag
    container.scrollTop = targetScroll;
  };  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    // Start hide timer after drag ends
    hideTimeoutRef.current = setTimeout(() => {
      setIsScrollbarActive(false);
    }, 1500);
  };  // Handle track click with direct scrolling
  const handleTrackClick = (e) => {
    const container = containerRef.current;
    const thumb = thumbRef.current;
    if (!container || !thumb) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    
    const { scrollHeight, clientHeight } = container;
    const maxScroll = scrollHeight - clientHeight;
    
    // Calculate click position as percentage of track
    const trackHeight = clientHeight - thumbHeight;
    const clickPercent = Math.max(0, Math.min(1, clickY / trackHeight));
    
    // Calculate target scroll position
    const targetScroll = clickPercent * maxScroll;
    
    // Direct scroll to position
    container.scrollTop = targetScroll;
  };

  // Calculate thumb position
  const thumbTop = isVisible ? 
    scrollPercent * (containerRef.current?.clientHeight - thumbHeight || 0) : 0;

  return (
    <>
      <ScrollContainer 
        ref={containerRef}
        className="custom-scroll-container"
      >
        {children}
      </ScrollContainer>
        {isVisible && (
        <ScrollbarTrack 
          className="custom-scrollbar"
          onClick={handleTrackClick}
          $isActive={isScrollbarActive}
          onMouseEnter={() => setIsScrollbarActive(true)}
          onMouseLeave={() => {
            if (!isDragging) {
              hideTimeoutRef.current = setTimeout(() => {
                setIsScrollbarActive(false);
              }, 500);
            }
          }}
        >
          <ScrollbarThumb
            ref={thumbRef}
            className="custom-scrollbar-thumb"
            style={{
              height: `${thumbHeight}px`,
              top: `${thumbTop}px`
            }}
            onMouseDown={handleMouseDown}
            $isDragging={isDragging}
            $isActive={isScrollbarActive}
          />
        </ScrollbarTrack>
      )}
    </>
  );
};

const ScrollContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 1;
  scroll-behavior: smooth;
  
  /* Webkit browsers optimization */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }
  
  /* Enhanced scrolling performance */
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  
  /* Performance optimizations */
  will-change: scroll-position;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 14px;
  height: 100vh;
  background: linear-gradient(to bottom, 
    rgba(var(--lavender-rgb), 0.03) 0%, 
    rgba(var(--lavender-rgb), 0.06) 50%, 
    rgba(var(--lavender-rgb), 0.03) 100%
  );
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-left: 1px solid rgba(var(--lavender-rgb), 0.08);
  backdrop-filter: blur(4px);
  opacity: ${props => props.$isActive ? 1 : 0.6};
  transform: translateX(${props => props.$isActive ? '0' : '6px'});

  &:hover {
    width: 16px;
    opacity: 1;
    transform: translateX(0);
    background: linear-gradient(to bottom, 
      rgba(var(--lavender-rgb), 0.08) 0%, 
      rgba(var(--lavender-rgb), 0.12) 50%, 
      rgba(var(--lavender-rgb), 0.08) 100%
    );
    border-left-color: rgba(var(--lavender-rgb), 0.15);
    box-shadow: inset 2px 0 8px rgba(var(--lavender-rgb), 0.1);
  }

  [data-theme="dark"] & {
    background: linear-gradient(to bottom, 
      rgba(var(--lavender-rgb), 0.12) 0%, 
      rgba(var(--lavender-rgb), 0.18) 50%, 
      rgba(var(--lavender-rgb), 0.12) 100%
    );
    border-left-color: rgba(var(--lavender-rgb), 0.2);
    opacity: ${props => props.$isActive ? 1 : 0.7};
  }

  [data-theme="dark"] &:hover {
    width: 16px;
    opacity: 1;
    transform: translateX(0);
    background: linear-gradient(to bottom, 
      rgba(var(--lavender-rgb), 0.18) 0%, 
      rgba(var(--lavender-rgb), 0.25) 50%, 
      rgba(var(--lavender-rgb), 0.18) 100%
    );
    border-left-color: rgba(var(--lavender-rgb), 0.3);
    box-shadow: inset 2px 0 12px rgba(var(--lavender-rgb), 0.2);
  }

  @media (max-width: 768px) {
    width: 10px;
    transform: translateX(${props => props.$isActive ? '0' : '4px'});
    
    &:hover {
      width: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 8px;
    transform: translateX(${props => props.$isActive ? '0' : '3px'});
    background: linear-gradient(to bottom, 
      rgba(var(--lavender-rgb), 0.02) 0%, 
      rgba(var(--lavender-rgb), 0.04) 50%, 
      rgba(var(--lavender-rgb), 0.02) 100%
    );
    
    &:hover {
      width: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: width 0.2s ease, background 0.2s ease, opacity 0.2s ease;
    transform: none;
  }
`;

const ScrollbarThumb = styled.div`
  position: absolute;
  left: 3px;
  width: 8px;
  background: linear-gradient(135deg, 
    var(--lavender-500) 0%, 
    var(--lavender-400) 50%, 
    var(--lavender-600) 100%
  );
  border-radius: 8px;
  cursor: grab;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 24px;
  user-select: none;
  box-shadow: 
    0 2px 8px rgba(var(--lavender-rgb), 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(var(--lavender-rgb), 0.3);
  opacity: ${props => props.$isActive ? 1 : 0.7};
  transform: ${props => props.$isActive ? 'scale(1)' : 'scale(0.8)'};

  &:hover {
    background: linear-gradient(135deg, 
      var(--lavender-400) 0%, 
      var(--lavender-300) 50%, 
      var(--lavender-500) 100%
    );
    width: 10px;
    left: 2px;
    opacity: 1;
    transform: scale(1) translateX(-1px);
    box-shadow: 
      0 4px 16px rgba(var(--lavender-rgb), 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 0 0 1px rgba(var(--lavender-rgb), 0.2);
    border-color: rgba(var(--lavender-rgb), 0.4);
  }

  &:active,
  ${props => props.$isDragging && `
    cursor: grabbing;
    opacity: 1;
    transform: scale(1.05) translateX(-1px);
    background: linear-gradient(135deg, 
      var(--lavender-600) 0%, 
      var(--lavender-500) 50%, 
      var(--lavender-700) 100%
    );
    box-shadow: 
      0 6px 20px rgba(var(--lavender-rgb), 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 0 2px rgba(var(--lavender-rgb), 0.3);
  `}

  [data-theme="dark"] & {
    background: linear-gradient(135deg, 
      rgba(var(--lavender-rgb), 0.7) 0%, 
      rgba(var(--lavender-rgb), 0.8) 50%, 
      rgba(var(--lavender-rgb), 0.6) 100%
    );
    border-color: rgba(var(--lavender-rgb), 0.5);
    box-shadow: 
      0 2px 8px rgba(var(--lavender-rgb), 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    opacity: ${props => props.$isActive ? 1 : 0.8};
  }

  [data-theme="dark"] &:hover {
    background: linear-gradient(135deg, 
      rgba(var(--lavender-rgb), 0.8) 0%, 
      rgba(var(--lavender-rgb), 0.9) 50%, 
      rgba(var(--lavender-rgb), 0.7) 100%
    );
    opacity: 1;
    transform: scale(1) translateX(-1px);
    box-shadow: 
      0 4px 16px rgba(var(--lavender-rgb), 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 0 1px rgba(var(--lavender-rgb), 0.3);
  }

  [data-theme="dark"] &:active,
  [data-theme="dark"] ${props => props.$isDragging && `
    opacity: 1;
    transform: scale(1.05) translateX(-1px);
    background: linear-gradient(135deg, 
      rgba(var(--lavender-rgb), 0.9) 0%, 
      rgba(var(--lavender-rgb), 1) 50%, 
      rgba(var(--lavender-rgb), 0.8) 100%
    );
    box-shadow: 
      0 6px 20px rgba(var(--lavender-rgb), 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 2px rgba(var(--lavender-rgb), 0.4);
  `}

  @media (max-width: 768px) {
    width: 6px;
    left: 2px;

    &:hover {
      width: 8px;
      left: 1px;
    }
  }

  @media (max-width: 480px) {
    width: 5px;
    left: 1.5px;
    border-radius: 6px;

    &:hover {
      width: 5px;
      left: 1.5px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    transform: none !important;
  }

  @media (prefers-contrast: high) {
    background: var(--lavender-700);
    border-color: var(--lavender-800);

    [data-theme="dark"] & {
      background: var(--lavender-200);
      border-color: var(--lavender-100);
    }
  }

  /* Dodaj animację pulsowania podczas ładowania */
  @keyframes thumbPulse {
    0%, 100% { 
      box-shadow: 
        0 2px 8px rgba(var(--lavender-rgb), 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    50% { 
      box-shadow: 
        0 4px 12px rgba(var(--lavender-rgb), 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
  }

  /* Subtelny efekt świecenia podczas interakcji */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, 
      rgba(var(--lavender-rgb), 0.3), 
      rgba(var(--lavender-rgb), 0.1)
    );
    border-radius: 10px;
    opacity: ${props => props.$isActive ? 0.5 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
    filter: blur(4px);
  }
  &:hover::after {
    opacity: 1;
  }
`;

export default CustomScrollbar;
