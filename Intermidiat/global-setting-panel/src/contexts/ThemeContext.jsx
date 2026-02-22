import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "gsp_theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "light";
  });

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleThemeLight = () => {
    console.log("light");
    setTheme("light");
  };

  const handleThemeDark = () => {
    console.log("dark");
    setTheme("dark");
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, handleThemeChange, handleThemeLight, handleThemeDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
