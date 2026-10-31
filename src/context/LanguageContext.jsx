/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { en } from '../i18n/en';
import { am } from '../i18n/am';

const translations = { en, am };
const STORAGE_KEY = 'solomon_preferred_language';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'am') {
        return stored;
      }
    } catch {
      // localStorage may be blocked or unavailable
    }
    return 'en';
  });

  // Keep <html> lang attribute synced with selected language
  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // document access fallback
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => {
      const nextLang = prevLang === 'en' ? 'am' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, nextLang);
      } catch {
        // localStorage may be unavailable
      }
      return nextLang;
    });
  }, []);

  /**
   * Translate a given key with optional token replacements e.g. {name}, {count}
   */
  const t = useCallback((key, params = {}) => {
    if (!key) return '';

    const currentDict = translations[language];
    const englishDict = translations.en;

    let text = currentDict?.[key];

    // Fall back to English if missing in current language
    if (text === undefined) {
      text = englishDict?.[key];
    }

    // Fall back to key itself and warn in development
    if (text === undefined) {
      if (import.meta.env?.DEV) {
        console.warn(`[i18n] Missing translation key: "${key}" for language "${language}"`);
      }
      text = key;
    }

    // Interpolate tokens like {name}, {phone}, {count}
    if (params && typeof text === 'string') {
      return text.replace(/{([^{}]+)}/g, (match, token) => {
        const replacement = params[token.trim()];
        return replacement !== undefined ? replacement : match;
      });
    }

    return text;
  }, [language]);

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
