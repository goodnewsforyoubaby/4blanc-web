import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeName, ThemeOption } from '../types';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeOption[];
}

const themes: ThemeOption[] = [
  { id: 'minimal', name: 'Minimal', description: 'iOS baseline and clean' },
  { id: 'shopify', name: 'Shopify', description: 'Apple retail with gradient lines' },
  { id: 'classic', name: 'Classic', description: 'Elegant blue and editorial' },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('4blanc-theme');
    return (saved as ThemeName) || 'minimal';
  });

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('4blanc-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
