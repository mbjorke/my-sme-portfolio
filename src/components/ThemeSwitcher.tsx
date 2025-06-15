import React from 'react';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

import Button from '@/components/ui/Button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setTheme(nextTheme);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      onKeyDown={handleKeyDown}
      className="flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-accent-50 dark:hover:bg-accent-900/20"
      aria-label={label}
      title={label}
    >
      <span className="sr-only">{label}</span>
      <Sun 
        className={`h-5 w-5 transition-transform duration-200 ${isDark ? 'scale-0' : 'scale-100'}`} 
        aria-hidden="true" 
      />
      <Moon 
        className={`absolute h-5 w-5 transition-transform duration-200 ${isDark ? 'scale-100' : 'scale-0'}`} 
        aria-hidden="true" 
      />
    </Button>
  );
};

export default ThemeSwitcher;
