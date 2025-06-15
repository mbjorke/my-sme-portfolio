'use client';
import React, { useState, useEffect } from 'react';

import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

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
        setLocale(newLocale);
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
          <div key={loc} className="w-10 h-8 animate-pulse bg-muted" aria-hidden="true" />
        ))}
      </div>
    );
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, loc: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLocaleChange(loc);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = siteConfig.locales.indexOf(loc);
      const nextIndex = (currentIndex + 1) % siteConfig.locales.length;
      const nextButton = document.querySelector<HTMLButtonElement>(
        `button[data-locale="${siteConfig.locales[nextIndex]}"]`
      );
      nextButton?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = siteConfig.locales.indexOf(loc);
      const prevIndex = (currentIndex - 1 + siteConfig.locales.length) % siteConfig.locales.length;
      const prevButton = document.querySelector<HTMLButtonElement>(
        `button[data-locale="${siteConfig.locales[prevIndex]}"]`
      );
      prevButton?.focus();
    }
  };

  return (
    <div 
      className="flex gap-2" 
      role="radiogroup" 
      aria-label="Select language"
      aria-busy={isChanging}
    >
      {siteConfig.locales.map((loc) => {
        const isActive = locale === loc;
        const label = `${languageNames[loc] || loc.toUpperCase()} ${isActive ? '(selected)' : ''}`;
        
        return (
          <Button
            key={loc}
            data-locale={loc}
            onClick={() => handleLocaleChange(loc)}
            onKeyDown={(e) => handleKeyDown(e, loc)}
            variant={isActive ? 'primary' : 'outline'}
            size="sm"
            className={`min-w-[3rem] transition-all ${isChanging ? 'opacity-70' : ''} ${
              isActive ? 'ring-2 ring-offset-2 ring-primary' : 'hover:bg-accent/50'
            }`}
            aria-label={label}
            title={label}
            role="radio"
            aria-checked={isActive}
            disabled={isChanging}
            tabIndex={isActive ? 0 : -1}
          >
            <span className="sr-only">{languageNames[loc] || loc.toUpperCase()}</span>
            <span aria-hidden="true">{loc.toUpperCase()}</span>
          </Button>
        );
      })}
    </div>
  );
}
