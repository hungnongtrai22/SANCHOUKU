import { useTranslation } from "react-i18next";
import { useCallback } from "react";
// utils
import { localStorageGetItem } from "../newUtils/storage-available";
// components
//
import { allLangs, defaultLang } from "./config-lang";

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t } = useTranslation();

  // const langStorage = localStorageGetItem("i18nextLng");

  const currentLang =
  allLangs.find((lang) => lang.value === i18n.language) || defaultLang;

  const onChangeLang = useCallback(
    (newlang: string) => {
      // console.log("Test",newlang); // kiểm tra trước khi gọi changeLanguage

      // i18n.changeLanguage(newlang);
      localStorage.setItem("i18nextLng", newlang); // ✅ lưu lại
      i18n.changeLanguage(newlang); // ✅ đổi ngay
    },
    [i18n],
  );

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang,
  };
}
