'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/button';

const languageNames: Record<string, string> = {
  en: 'English',
  sv: 'Svenska',
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale || isChanging) return;
    
    setIsChanging(true);
    
    // Use a small timeout to ensure the UI updates before the navigation
    setTimeout(() => {
      try {
        setLocale(newLocale as any);
      } catch (error) {
        console.error('Failed to change language:', error);
        setIsChanging(false);
      }
    }, 50);
  };

  if (!mounted) {
    return (
      <div className="flex gap-2" aria-label="Loading language switcher">
        {siteConfig.locales.map((loc) => (
          <div
            key={loc}
            className="w-10 h-8 rounded-2xl bg-muted animate-pulse"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }


  return (
    <div className="flex gap-2" role="radiogroup" aria-label="Select language">
      {siteConfig.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <Button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            variant={isActive ? 'default' : 'outline'}
            size="sm"
            className={`rounded-2xl transition-opacity ${isChanging ? 'opacity-70' : ''}`}
            aria-label={`${languageNames[loc] || loc.toUpperCase()} ${isActive ? '(selected)' : ''}`}
            role="radio"
            aria-checked={isActive}
            disabled={isChanging}
          >
            {loc.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
}
