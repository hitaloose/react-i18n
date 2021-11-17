import { languages } from "../utils/languages";

export type Languages = typeof languages[number];

export type Translations = Record<Languages, string>;
