"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Locale } from "@/lib/i18n";
import { Translations } from "@/lib/i18n/locales/en";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
  dictionary: Translations;
}

export const LocaleProvider = ({
  children,
  locale,
  dictionary,
}: LocaleProviderProps) => {
  return (
    <LocaleContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
