import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from './ThemeContextTypes.tsx';
import type { ThemeMode } from './ThemeContextTypes.tsx';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get user's system preference
  const [systemThemeIsDark, setSystemThemeIsDark] = useState<boolean>(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-color-scheme: dark)').matches 
      : false
  );
  
  // Get stored theme preference or default to system
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('flid-theme-mode');
    return stored ? (stored as ThemeMode) : 'system';
  });
  
  // Calculate if current theme is dark based on mode and system preference
  const isDarkMode = themeMode === 'system'
    ? systemThemeIsDark
    : themeMode === 'dark';
  
  // Update theme when preferences change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Store preference
    localStorage.setItem('flid-theme-mode', themeMode);
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Watch for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setSystemThemeIsDark(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode, isDarkMode]);
    // Set theme mode with validation - using useCallback to memoize
  const setThemeMode = useCallback((mode: ThemeMode) => {
    if (['light', 'dark', 'system'].includes(mode)) {
      setThemeModeState(mode);
    }
  }, []);
  
  // Toggle between light and dark - using useCallback to memoize
  const toggleTheme = useCallback(() => {
    if (themeMode === 'system') {
      setThemeModeState(systemThemeIsDark ? 'light' : 'dark');
      return;
    }
    setThemeModeState(themeMode === 'light' ? 'dark' : 'light');
  }, [themeMode, systemThemeIsDark]);
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    themeMode, 
    isDarkMode, 
    setThemeMode, 
    toggleTheme,
    systemThemeIsDark
  }), [themeMode, isDarkMode, setThemeMode, toggleTheme, systemThemeIsDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>  );
};

// Use the hook from ThemeHooks.tsx
import { useTheme } from './ThemeHooks.tsx';

// Re-export useTheme for convenience
export { useTheme };

// Theme switcher component
export const ThemeSwitcher = ({ className = '' }: { className?: string }) => {
  const { themeMode, toggleTheme, setThemeMode, systemThemeIsDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <motion.button 
        className="w-9 h-9 rounded-full bg-white/90 dark:bg-flid-dark/90 shadow-md flex items-center justify-center"
        onClick={() => toggleTheme()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >        {themeMode === 'light' || (themeMode === 'system' && !systemThemeIsDark) ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-flid-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.button>

      {/* Dropdown menu */}
      {isOpen && (
        <motion.div 
          className="absolute right-0 mt-2 w-36 py-2 bg-white dark:bg-flid-dark shadow-xl rounded-lg z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {(['light', 'dark', 'system'] as ThemeMode[]).map((mode) => (
            <button
              key={mode}
              className={`w-full px-4 py-2 text-left text-sm ${
                themeMode === mode 
                  ? 'text-flid-accent font-medium' 
                  : 'text-flid-dark/80 dark:text-white/80 hover:bg-flid-light dark:hover:bg-flid-dark/50'
              }`}
              onClick={() => {
                setThemeMode(mode);
                setIsOpen(false);
              }}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
