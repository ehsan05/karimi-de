// src/i18n.js
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import deTranslations from './locales/de/translation.json';

const i18n = createInstance({
  resources: {
    en: { translation: enTranslations },
    de: { translation: deTranslations }
  },
  lng: 'de',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

i18n.use(initReactI18next).init();

export default i18n; 