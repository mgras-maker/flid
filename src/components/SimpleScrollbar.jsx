import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const SimpleScrollbar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const updateScrollbar = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // Check if page is scrollable
      const isScrollable = scrollHeight > clientHeight;
      setIsVisible(isScrollable);
      
      if (isScrollable) {
        // Calculate scroll percentage
        const maxScroll = scrollHeight - clientHeight;
        const percent = maxScroll > 0 ? scrollTop / maxScroll : 0;
        setScrollPercent(Math.max(0, Math.min(1, percent)));
      }
    };

    const showScrollbar = () => {
      setIsActive(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 1500);
    };

    const handleScroll = () => {
      updateScrollbar();
      showScrollbar();
    };

    const handleWheel = () => {
      showScrollbar();
    };

    // Initial calculation
    updateScrollbar();

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('resize', updateScrollbar);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', updateScrollbar);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = rect.height;
    const clickPercent = clickY / trackHeight;
    
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const maxScroll = scrollHeight - clientHeight;
    const targetScroll = clickPercent * maxScroll;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <ScrollbarTrack
      $isActive={isActive}
      onClick={handleTrackClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => {
        hideTimeoutRef.current = setTimeout(() => {
          setIsActive(false);
        }, 500);
      }}
    >
      <ScrollbarThumb
        $isActive={isActive}
        style={{
          height: `${Math.max(24, window.innerHeight * 0.3)}px`,
          top: `${scrollPercent * (window.innerHeight - Math.max(24, window.innerHeight * 0.3))}px`
        }}
      />
    </ScrollbarTrack>
  );
};

const ScrollbarTrack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 12px;
  height: 100vh;
  background: linear-gradient(to bottom, 
    rgba(var(--lavender-rgb), 0.03) 0%, 
    rgba(var(--lavender-rgb), 0.06) 50%, 
    rgba(var(--lavender-rgb), 0.03) 100%
  );
  z-index: 1000;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${props => props.$isActive ? 0.8 : 0.4};
  transform: translateX(${props => props.$isActive ? '0' : '4px'});

  &:hover {
    opacity: 1;
    transform: translateX(0);
    width: 14px;
  }

  @media (max-width: 768px) {
    width: 8px;
    
    &:hover {
      width: 10px;
    }
  }
`;

const ScrollbarThumb = styled.div`
  position: absolute;
  left: 2px;
  width: 8px;
  background: linear-gradient(135deg, 
    var(--lavender-500) 0%, 
    var(--lavender-400) 50%, 
    var(--lavender-600) 100%
  );
  border-radius: 6px;
  transition: all 0.3s ease;
  min-height: 24px;
  opacity: ${props => props.$isActive ? 1 : 0.7};

  &:hover {
    width: 10px;
    left: 1px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 6px;
    left: 1px;

    &:hover {
      width: 8px;
      left: 0px;
    }
  }
`;

export default SimpleScrollbar;
