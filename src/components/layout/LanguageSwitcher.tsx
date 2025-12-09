"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { Button } from "@/components/ui/button";
import { Locale, locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <Button
          key={loc}
          variant={locale === loc ? "default" : "outline"}
          size="sm"
          onClick={() => switchLocale(loc)}
          className="uppercase"
        >
          {loc}
        </Button>
      ))}
    </div>
  );
}
