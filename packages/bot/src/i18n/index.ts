import { en, type Translations } from "./en.js";
import { ru } from "./ru.js";
import { zh } from "./zh.js";
import { es } from "./es.js";
import { fr } from "./fr.js";
import { de } from "./de.js";
import { pt } from "./pt.js";
import { tr } from "./tr.js";
import { ja } from "./ja.js";
import { ko } from "./ko.js";
import { ar } from "./ar.js";
import { hi } from "./hi.js";
import { id } from "./id.js";
import { uk } from "./uk.js";

export type Lang = "en" | "ru" | "zh" | "es" | "fr" | "de" | "pt" | "tr" | "ja" | "ko" | "ar" | "hi" | "id" | "uk";

export const languages: Record<Lang, Translations> = { en, ru, zh, es, fr, de, pt, tr, ja, ko, ar, hi, id, uk };

export const langList: { code: Lang; flag: string; name: string }[] = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "ru", flag: "🇷🇺", name: "Русский" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "tr", flag: "🇹🇷", name: "Türkçe" },
  { code: "ja", flag: "🇯🇵", name: "日本語" },
  { code: "ko", flag: "🇰🇷", name: "한국어" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "hi", flag: "🇮🇳", name: "हिन्दी" },
  { code: "id", flag: "🇮🇩", name: "Indonesia" },
  { code: "uk", flag: "🇺🇦", name: "Українська" },
];

export function t(lang: Lang): Translations {
  return languages[lang] || languages.en;
}

export type { Translations };
