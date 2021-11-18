import { Translations } from "../../types/Language";

export type Keys = "TITLE" | "CONTACT" | "ERROR";

export const localeStrings: Record<Keys, Translations> = {
  TITLE: {
    en: "About",
    pt: "Sobre",
  },
  CONTACT: {
    en: "contact",
    pt: "contato",
  },
  ERROR: {
    en: "Error code {code}",
    pt: "Código de erro {code}",
  },
};
