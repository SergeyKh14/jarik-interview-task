"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersProvider } from "./UserContext";
import { LocaleProvider } from "./LocaleContext";
import { Locale } from "@/lib/i18n";
import { Translations } from "@/lib/i18n/locales/en";

const queryClient = new QueryClient();

interface ProvidersProps extends PropsWithChildren {
  locale: Locale;
  dictionary: Translations;
}

export function Providers({ children, locale, dictionary }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider locale={locale} dictionary={dictionary}>
        <UsersProvider>{children}</UsersProvider>
      </LocaleProvider>
    </QueryClientProvider>
  );
}
