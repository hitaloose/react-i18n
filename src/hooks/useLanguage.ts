import { LanguageStore } from "../stores/LanguageStore";
import { Languages, Translations } from "../types/Language";

export const useLanguage = (localeStrings: Record<string, Translations>) => {
  const currentLanguage = LanguageStore.useState((state) => state);

  const changeLanguage = (language: Languages) => {
    LanguageStore.update(() => language);
  };

  const t = (key: keyof typeof localeStrings) =>
    localeStrings[key][currentLanguage];

  return { t, changeLanguage, currentLanguage };
};
