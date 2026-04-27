import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // two-letter language codes
  locales: ["th", "en"],
  defaultLocale: "th",
  localePrefix: "always",
  localeDetection: true,
  localeCookie: true,
});