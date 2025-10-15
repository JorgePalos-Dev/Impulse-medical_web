"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("EN");

  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <button
      onClick={toggleLang}
      className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md border border-black hover:bg-white hover:text-black hover:border-white transition-all duration-300"
      title="Cambiar idioma"
    >
      {lang}
    </button>
  );
}
