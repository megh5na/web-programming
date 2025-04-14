import React, { useContext } from 'react';
import { ThemeCtx, ThemeProvider } from '../context/ThemeCtx';

function ThemeContent() {
  const { theme, toggle } = useContext(ThemeCtx);
  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px'
  };
  return (
    <div style={style}>
      <p>Theme: {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}

export default Theme;