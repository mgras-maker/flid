import { useContext } from 'react';
import { ThemeContext } from './ThemeContextTypes.tsx';
import type { ThemeContextType } from './ThemeContextTypes.tsx';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
