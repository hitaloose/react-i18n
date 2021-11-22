import { Translations } from "../../types/Language";

type Keys = "WELCOME" | "P" | "GO_TO_ABOUT" | "NOT_FOUND";

export const strings: Record<Keys, Translations> = {
  WELCOME: {
    pt: "Bem vindo",
    en: "Welcome",
  },
  P: {
    en: "Test site of i18n",
    pt: "Site de teste de i18n",
  },
  GO_TO_ABOUT: {
    pt: "Ir para sobre",
    en: "Go to about",
  },
  NOT_FOUND: {
    en: "{model} not found",
    pt: "{model} não encontrado",
  },
};
