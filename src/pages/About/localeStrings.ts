import { Translations } from "../../types/Language";

type Keys = "TITLE" | "CONTACT";

export const localeStrings: Record<Keys, Translations> = {
  TITLE: {
    en: "About",
    pt: "Sobre",
  },
  CONTACT: {
    en: "contact",
    pt: "contato",
  },
};
