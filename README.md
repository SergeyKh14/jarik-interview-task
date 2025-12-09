# Next.js App Test Task

A modern starter project built with:

- ✅ **Next.js (App Router)**
- ✅ **TypeScript**
- ✅ **Tailwind CSS**
- ✅ **ShadCN UI**
- ✅ **Framer Motion**

---

## 🚀 Getting Started\

```bash
git clone https://github.com/SergeyKh14/jarik-interview-task.git
cd jarik-interview-task
```

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🌍 Internationalization (i18n)

This project includes a comprehensive internationalization implementation supporting multiple languages.

### Supported Locales

- **English (en)** - Default locale
- **French (fr)**

### Architecture

The i18n implementation follows Next.js App Router best practices with a type-safe, server-side rendering approach:

#### 1. **Locale Configuration** (`src/lib/i18n/`)

- Centralized locale management with type-safe validation
- Supported locales: `en`, `fr`
- Default locale: `en`
- Type definitions for `Locale` and `Translations`

#### 2. **Translation Files** (`src/lib/i18n/locales/`)

- Separate translation files for each locale:
  - `en.ts` - English translations
  - `fr.ts` - French translations
- TypeScript ensures type safety across all translations
- Translations are organized by feature (users, table, pagination, etc.)

#### 3. **Middleware Routing** (`src/middleware.ts`)

- Automatically redirects routes without locale prefix to include locale
- Example: `/users` → `/en/users`
- Ensures all routes are locale-aware

#### 4. **Server-Side Dictionary Loading** (`src/app/[locale]/dictionaries.ts`)

- Lazy loads translations based on locale
- Uses `server-only` to ensure server-side execution
- Optimized for performance with dynamic imports

#### 5. **Locale Context** (`src/context/LocaleContext.tsx`)

- React Context provides locale and translations to client components
- Custom `useLocale()` hook for easy access:
  ```typescript
  const { locale, t } = useLocale();
  // Use translations: t.users.title, t.table.name, etc.
  ```

#### 6. **Language Switcher** (`src/components/layout/LanguageSwitcher.tsx`)

- Client component for switching between languages
- Preserves current route when switching locales
- Updates URL with new locale prefix

#### 7. **Dynamic Route Structure** (`src/app/[locale]/`)

- Uses Next.js dynamic routes: `[locale]`
- Generates static params for all supported locales
- Validates locale and handles invalid locales with 404

### Usage Example

**In Server Components:**

```typescript
import { getDictionary } from "@/app/[locale]/dictionaries";

export default async function Page({ params }: { params: { locale: string } }) {
  const dictionary = await getDictionary(params.locale);
  return <h1>{dictionary.users.title}</h1>;
}
```

**In Client Components:**

```typescript
"use client";
import { useLocale } from "@/context/LocaleContext";

export default function Component() {
  const { locale, t } = useLocale();
  return <h1>{t.users.title}</h1>;
}
```

### Adding New Translations

1. Add translations to `src/lib/i18n/locales/en.ts`
2. Add corresponding translations to `src/lib/i18n/locales/fr.ts`
3. TypeScript will ensure type safety across all locales

### URL Structure

- English: `http://localhost:3000/en`
- French: `http://localhost:3000/fr`
- All routes automatically include locale prefix

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
