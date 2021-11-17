import { languages } from "../utils/languages";

export type Text = typeof languages[number];

export type Texts = Record<Text, string>;
