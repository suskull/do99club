import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import en from '../locales/en.json';
import ja from '../locales/ja.json';
import vi from '../locales/vi.json';

export const DEFAULT_LANG = 'en';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: DEFAULT_LANG,
    lng: DEFAULT_LANG,
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: en },
      ja: { translation: ja },
      vi: { translation: vi },
    },
  });

export default i18n;
