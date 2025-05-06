import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function HeroSection() {
  const { locale } = useLanguage();
  const hero = siteConfig.translations[locale].hero;

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center bg-background text-foreground"
    >
      <div className="flex w-full justify-end gap-2 mb-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <h2 className="text-lg font-medium text-secondary mb-2 tracking-tight">
        {hero.subheading}
      </h2>
      <h1 className="text-5xl md:text-6xl font-medium text-primary mb-4 tracking-tight leading-tight">
        {hero.heading}{" "}
        <span className="text-accent">{hero.highlight}</span>{" "}
        {hero.description}
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        {hero.callToAction}
      </p>
      <a
        href="#contact"
        className="inline-block rounded-2xl px-8 py-4 bg-primary text-primary-foreground font-medium shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      >
        {siteConfig.translations[locale].buttons.cta}
      </a>
    </section>
  );
}