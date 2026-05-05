import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nl', 'en', 'fr', 'de'],
  defaultLocale: 'nl',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};
