import { Translations } from "./locales/en";

export type Locale = "en" | "fr";

export function isValidLocale(locale: string): locale is Locale {
  return locale === "en" || locale === "fr";
}

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

// Re-export Translations type for convenience
export type { Translations };
