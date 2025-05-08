import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

type Locale = 'en' | 'sv'; // Add all supported locales here

export function HowSection() {
  const { locale } = useLanguage();
  const how = siteConfig.translations[locale as Locale].how;

  return (
    <section id="how" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">{how.title}</h2>
      {/* Render steps or other content here */}
      <p>Hello from How Section</p>
    </section>
  );
}
