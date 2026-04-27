import { getTranslations } from "next-intl/server";
import { Link2, BarChart3, Shield, Zap } from "lucide-react";
import Navbar from "@/components/home-page/navbar";
import HomePageFooter from "@/components/home-page/footer";
import URLShortenerForm from "@/components/home-page/url-shortener-form";
import { Link } from "@/lib/i18n/navigation";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <Navbar
        dashboardLabel={t("navbar.dashboard")}
        loginLabel={t("navbar.login")}
      />
      <main className="flex-1">
        <div className="min-h-[calc(100vh-4rem)]">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-linear-to-b from-cyan-950/20 to-zinc-950 border-b border-zinc-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

            <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 mb-8">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">{t("hero.badge")}</span>
                </div>

                <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                  {t("hero.title")}
                  <br />
                  <span className="text-cyan-400">{t("hero.highlight")}</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                  {t("hero.description")}
                </p>

                {/* URL Shortener Form */}
                <URLShortenerForm
                  placeholder={t("form.placeholder")}
                  submitLabel={t("form.submit")}
                  resultLabel={t("form.resultLabel")}
                  copyLabel={t("form.copy")}
                  copiedLabel={t("form.copied")}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t("features.analytics.title")}</h3>
                  <p className="text-zinc-400">{t("features.analytics.description")}</p>
                </div>

                <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t("features.security.title")}</h3>
                  <p className="text-zinc-400">{t("features.security.description")}</p>
                </div>

                <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t("features.speed.title")}</h3>
                  <p className="text-zinc-400">{t("features.speed.description")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-linear-to-t from-cyan-950/20 to-zinc-950 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">{t("cta.title")}</h2>
              <p className="text-xl text-zinc-400 mb-8">{t("cta.description")}</p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors"
              >
                {t("cta.button")}
                <Link2 className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <HomePageFooter copyright={t("footer.copyright")} />
    </>
  );
}