"use client";
import { createContext, useContext, useState } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const translations = { es, en };

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("es");

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => (obj && obj[k] ? obj[k] : null), translations[lang]);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
