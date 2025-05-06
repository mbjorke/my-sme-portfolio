'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
  const pathname = usePathname() || '';
  
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
  const setLocale = useCallback(async (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // Update the state
    setLocaleState(newLocale);
    
    // Set the cookie
    document.cookie = `${COOKIE_NAME}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Get the current path without the locale
    const pathSegments = pathname.split('/');
    let pathWithoutLocale = pathname;
    
    // If the first segment is a locale, remove it
    if (pathSegments.length > 1 && siteConfig.locales.includes(pathSegments[1] as Locale)) {
      pathWithoutLocale = '/' + pathSegments.slice(2).join('/');
    }
    
    // Handle root path
    if (pathWithoutLocale === '') {
      pathWithoutLocale = '/';
    }
    
    // Construct the new URL with the new locale
    const newPath = newLocale === siteConfig.defaultLocale 
      ? pathWithoutLocale 
      : `/${newLocale}${pathWithoutLocale}`;
    
    // Use replace with shallow routing to prevent full page reload
    await router.replace(newPath, { scroll: false });
    
    // Force a full page reload to ensure all content is updated
    window.location.href = newPath;
  }, [locale, pathname, router]);

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
