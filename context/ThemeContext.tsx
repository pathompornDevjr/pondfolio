"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initialTheme: Theme = "dark";
    try {
      const savedTheme = localStorage.getItem("pond_portfolio_theme") as Theme | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        initialTheme = savedTheme;
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        initialTheme = prefersDark ? "dark" : "light";
      }
    } catch {
      initialTheme = "dark";
    }

    setThemeState(initialTheme);
    applyThemeToDOM(initialTheme);
    setMounted(true);
  }, []);

  const applyThemeToDOM = (t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem("pond_portfolio_theme", newTheme);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={mounted ? "" : "opacity-0"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
