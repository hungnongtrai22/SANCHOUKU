import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { localStorageGetItem } from "../newUtils/storage-available";
import { defaultLang } from './config-lang';

import translationJp from './langs/jp.json';
import translationVi from './langs/vi.json';

const isServer = typeof window === "undefined";

// ✅ chỉ detect ở client
// if (!isServer) {
//   i18n.use(LanguageDetector);
// }

const lng = defaultLang.value; // ❗ luôn giống server

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translations: translationVi },
      jp: { translations: translationJp },
    },
    lng,
    fallbackLng: defaultLang.value,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    // detection: {
    //   order: ['localStorage'], // ❗ bỏ navigator
    //   caches: ['localStorage'],
    // },
  });

export default i18n;