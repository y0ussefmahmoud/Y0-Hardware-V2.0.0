import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('y0-hardware-theme');
    return savedTheme === 'dark';
  });

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('y0-hardware-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  // Apply theme to document body
  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.colors.background.primary;
    document.body.style.color = currentTheme.colors.text.primary;
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }, [currentTheme]);

  const value = {
    isDarkMode,
    toggleTheme,
    theme: currentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
