"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ lang: "lo", toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("lo"); // "lo" = Lao, "en" = English

  const toggle = () => setLang((l) => (l === "lo" ? "en" : "lo"));

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

/**
 * Helper: pick the right string based on current language.
 * Usage: t(lang, "ຂໍ້ຄວາມລາວ", "English text")
 */
export const t = (lang, lo, en) => (lang === "lo" ? lo : en);
