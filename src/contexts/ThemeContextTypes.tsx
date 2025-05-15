import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  systemThemeIsDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
