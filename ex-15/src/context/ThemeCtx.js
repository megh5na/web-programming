import React, { createContext, useState } from 'react';

export const ThemeCtx = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}