import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContextObject';
import { usePrefersDarkMode } from '../hooks/usePrefersDarkMode';

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = usePrefersDarkMode();
  
  // Check if there's a theme preference in localStorage, otherwise use system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('flid-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return prefersDarkMode;
    }
  });
  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  // Sync with system preference changes if user hasn't explicitly set a preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('flid-theme');
    if (!savedTheme) {
      setDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);// Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('flid-theme', darkMode ? 'dark' : 'light');
      // Add transition classes first
    document.documentElement.classList.add('theme-transition');
    document.documentElement.classList.add('theme-transition-optimized');
    
    // Malutkie opóźnienie przed dodaniem/usunięciem klasy dark
    // zapewnia płynniejsze przejście
    setTimeout(() => {
      // This ensures the dark class is properly toggled
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, 10);    // Remove the transition classes after transition completes - extended time for smoother transition
    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
      document.documentElement.classList.remove('theme-transition-optimized');
    }, 1200); // Jeszcze dłuższy czas, aby wszystkie animacje zdążyły się zakończyć
    
    return () => clearTimeout(transitionTimeout);
  }, [darkMode]);

  // Provide theme context to children components
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
