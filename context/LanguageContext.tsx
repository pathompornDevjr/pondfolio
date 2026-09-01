"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.th;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "th",
  setLang: () => {},
  toggleLang: () => {},
  t: translations.th,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>("th");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("pond_portfolio_lang") as Language | null;
      if (savedLang === "th" || savedLang === "en") {
        setLangState(savedLang);
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("pond_portfolio_lang", newLang);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLang = () => {
    const nextLang: Language = lang === "th" ? "en" : "th";
    setLang(nextLang);
  };

  const t = translations[lang] || translations.th;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      <div className={mounted ? "" : "opacity-0"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
