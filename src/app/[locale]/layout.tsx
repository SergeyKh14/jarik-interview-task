import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { Providers } from "@/context";
import { Locale, isValidLocale, locales } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import { notFound } from "next/navigation";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Users - Test Task",
  description: "User management application",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={openSans.className}>
        <Providers locale={locale} dictionary={dictionary}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
