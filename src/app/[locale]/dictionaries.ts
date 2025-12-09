import "server-only";
import { Locale } from "@/lib/i18n";

const dictionaries = {
  en: () => import("@/lib/i18n/locales/en").then((module) => module.en),
  fr: () => import("@/lib/i18n/locales/fr").then((module) => module.fr),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
