import { siteConfig } from "@/config/siteConfig";

export function HeroSection() {
  const hero = siteConfig.translations.en.hero;

  return (
    <section id="hero" className="py-20 text-center">
      <h2 className="text-lg text-teal-400 mb-2">{hero.subheading}</h2>
      <h1 className="text-5xl font-bold mb-4">
        {hero.heading} <span className="text-primary">{hero.highlight}</span> {hero.description}
      </h1>
      <p className="text-xl mb-8">{hero.callToAction}</p>
      <a href="#contact" className="inline-block px-8 py-4 bg-primary text-white rounded-2xl shadow-lg">
        Let’s chat
      </a>
    </section>
  );
}