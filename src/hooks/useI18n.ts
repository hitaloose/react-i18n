import { LanguageStore } from "../stores/LanguageStore";
import { Languages, Translations } from "../types/Language";

export const useI18n = <T>(localeStrings: Record<keyof T, Translations>) => {
  const currentLanguage = LanguageStore.useState((state) => state);

  const changeLanguage = (language: Languages) => {
    LanguageStore.update(() => language);
  };

  const t = (
    key: keyof typeof localeStrings,
    replacer: Record<string, string | Translations> = {}
  ) => {
    const phrase = localeStrings[key][currentLanguage];

    const keys = Object.keys(replacer);

    const completePhase = keys.reduce((prev, key) => {
      const value = replacer[key];
      const reg = new RegExp(`{${key}}`, "g");

      if (typeof value === "string") {
        return prev.replace(reg, value);
      }

      return prev.replace(reg, value[currentLanguage]);
    }, phrase);

    return completePhase;
  };

  return { t, changeLanguage, currentLanguage };
};
