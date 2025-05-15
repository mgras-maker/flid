import { useState, useEffect, useMemo, useCallback } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const defaultBreakpoints: BreakpointConfig = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Hook for responsive design that provides current breakpoint and utility functions
 */
export const useResponsive = (customBreakpoints?: Partial<BreakpointConfig>) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [state, setState] = useState({
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { windowWidth } = state;
  // Get current breakpoint - memoized to prevent recalculation on every render
  const getCurrentBreakpoint = useCallback((): Breakpoint => {
    if (windowWidth >= breakpoints['2xl']) return '2xl';
    if (windowWidth >= breakpoints.xl) return 'xl';
    if (windowWidth >= breakpoints.lg) return 'lg';
    if (windowWidth >= breakpoints.md) return 'md';
    if (windowWidth >= breakpoints.sm) return 'sm';
    return 'xs';
  }, [windowWidth, breakpoints]);
  // Cache current breakpoint
  const currentBreakpoint = getCurrentBreakpoint();
  
  // Memoize breakpoint comparison functions
  const isGreaterThan = useCallback((bp: Breakpoint) => {
    const currentIndex = Object.keys(breakpoints).indexOf(getCurrentBreakpoint());
    const comparisonIndex = Object.keys(breakpoints).indexOf(bp);
    return currentIndex > comparisonIndex;
  }, [breakpoints, getCurrentBreakpoint]);
  
  const isLessThan = useCallback((bp: Breakpoint) => {
    const currentIndex = Object.keys(breakpoints).indexOf(getCurrentBreakpoint());
    const comparisonIndex = Object.keys(breakpoints).indexOf(bp);
    return currentIndex < comparisonIndex;
  }, [breakpoints, getCurrentBreakpoint]);
  
  const isBreakpoint = useCallback((bp: Breakpoint) => getCurrentBreakpoint() === bp, [getCurrentBreakpoint]);
  
  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(() => ({
    width: windowWidth,
    height: state.windowHeight,
    breakpoint: currentBreakpoint,
    isMobile: windowWidth < breakpoints.md,
    isTablet: windowWidth >= breakpoints.md && windowWidth < breakpoints.lg,
    isDesktop: windowWidth >= breakpoints.lg,
    isSmallScreen: windowWidth < breakpoints.sm,
    isMediumScreen: windowWidth >= breakpoints.md && windowWidth < breakpoints.xl,
    isLargeScreen: windowWidth >= breakpoints.xl,
    isBreakpoint,
    isGreaterThan,    isLessThan,
  }), [windowWidth, state.windowHeight, currentBreakpoint, breakpoints, isBreakpoint, isGreaterThan, isLessThan]);
};

export default useResponsive;
