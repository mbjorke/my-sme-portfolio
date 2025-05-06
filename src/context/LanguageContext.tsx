import { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

type Locale = (typeof siteConfig.locales)[number];

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(siteConfig.defaultLocale as Locale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}

export function LanguageAwareComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // ...your code that uses useLanguage or useTheme
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
