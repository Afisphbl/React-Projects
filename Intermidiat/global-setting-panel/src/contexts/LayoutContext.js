import React, { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext();

const STORAGE_KEY = "gsp_layout";

export function LayoutProvider({ children }) {
  const [density, setDensity] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "comfortable";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, density);
    document.documentElement.setAttribute("data-density", density);
  }, [density]);

  return (
    <LayoutContext.Provider value={{ density, setDensity }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error("useLayout must be used inside LayoutProvider");
  return ctx;
}
