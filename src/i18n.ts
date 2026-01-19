import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // loads translations from your public folder
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // default language if translation is missing
    debug: true, // enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}.json?v={{currentVersion}}', // path to your translation files
    },
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage'], // Order of language detection methods
    },
  });

export default i18n;
