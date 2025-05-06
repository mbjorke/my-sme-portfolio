'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';

const COOKIE_NAME = 'NEXT_LOCALE';

type Locale = (typeof siteConfig.locales)[number];

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [locale, setLocaleState] = useState<Locale>(
    siteConfig.defaultLocale as Locale
  );
  const [mounted, setMounted] = useState(false);

  // Set locale from cookie or default on initial load
  useEffect(() => {
    const storedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1];

    if (storedLocale && siteConfig.locales.includes(storedLocale as Locale)) {
      setLocaleState(storedLocale as Locale);
    }
    
    setMounted(true);
  }, []);

  // Update the locale in the URL and cookie when it changes
  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // Update the state
    setLocaleState(newLocale);
    
    // Set the cookie
    document.cookie = `${COOKIE_NAME}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Update the URL with the new locale
    const segments = pathname.split('/');
    if (siteConfig.locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join('/');
    const search = searchParams.toString();
    const url = search ? `${newPath}?${search}` : newPath;
    
    router.push(url);
  }, [locale, pathname, router, searchParams]);

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
