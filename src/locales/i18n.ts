import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { localStorageGetItem } from "../newUtils/storage-available";
import { defaultLang } from './config-lang';

import translationJp from './langs/jp.json';
import translationVi from './langs/vi.json';

const isServer = typeof window === "undefined";

// 🔥 QUAN TRỌNG: KHÔNG đọc localStorage trên server
const lng = isServer
  ? defaultLang.value
  : localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translations: translationVi },
      jp: { translations: translationJp },
    },
    lng,
    fallbackLng: defaultLang.value, // luôn fallback về default
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
