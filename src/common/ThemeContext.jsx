import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();   // Context creation

export const useTheme = () => useContext(ThemeContext);     // Custom Hook

export const ThemeProvider = ({ children }) => {

  // The initial theme state is retrieved from localStorage. Default theme is Light
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // Stores the selected theme in localStorage to persist it across sessions
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // It switches b/w light & dark themes dynamically
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // It will make both function accessible to all child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
