import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import nl from './nl';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, nl },
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false
    }
  });
