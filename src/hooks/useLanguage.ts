import { LanguageStore } from "../stores/LanguageStore";
import { Text, Texts } from "../types/Text";

export const useLanguage = (localeStrings: Record<string, Texts>) => {
  const currentLanguage = LanguageStore.useState((state) => state);

  const changeLanguage = (language: Text) => {
    LanguageStore.update(() => language);
  };

  const t = (key: keyof typeof localeStrings) =>
    localeStrings[key][currentLanguage];

  return { t, changeLanguage, currentLanguage };
};
