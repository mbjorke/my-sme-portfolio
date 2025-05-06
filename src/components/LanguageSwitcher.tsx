import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2">
      {siteConfig.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-3 py-1 rounded-2xl ${
            locale === loc ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
