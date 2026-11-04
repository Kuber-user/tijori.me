import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enCommon from '../locales/en/common.json';
import enNavigation from '../locales/en/navigation.json';
import enHome from '../locales/en/home.json';
import enPlatform from '../locales/en/platform.json';
import enSolutions from '../locales/en/solutions.json';
import enCompany from '../locales/en/company.json';
import enNews from '../locales/en/news.json';

// Arabic translations
import arCommon from '../locales/ar/common.json';
import arNavigation from '../locales/ar/navigation.json';
import arHome from '../locales/ar/home.json';
import arPlatform from '../locales/ar/platform.json';
import arSolutions from '../locales/ar/solutions.json';
import arCompany from '../locales/ar/company.json';
import arNews from '../locales/ar/news.json';

export const defaultNS = 'common';

export const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    platform: enPlatform,
    solutions: enSolutions,
    company: enCompany,
    news: enNews,
  },
  ar: {
    common: arCommon,
    navigation: arNavigation,
    home: arHome,
    platform: arPlatform,
    solutions: arSolutions,
    company: arCompany,
    news: arNews,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    // Only real languages count, so a path like /pricing is not read as a language and detection
    // moves on to the visitor's saved choice, then the browser (ar-SA resolves to ar)
    supportedLngs: ['en', 'ar'],
    defaultNS,
    ns: ['common', 'navigation', 'home', 'platform', 'solutions', 'company', 'news'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
