import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/lib/i18n/routing";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: Pick<Props, "params">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "HomePage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout(props: Props) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${notoSansThai.variable} ${notoSans.variable} min-h-full flex flex-col antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={null}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}