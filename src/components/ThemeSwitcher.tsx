import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import Button from '@/components/ui/Button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`flex justify-center items-center p-2 rounded-lg transition-colors duration-300`}
    >
      <span className="check">
        <span className="icon">
          <Sun className={`w-5 h-5 ${theme === 'dark' ? 'hidden' : ''}`} />
          <Moon className={`w-5 h-5 ${theme === 'dark' ? '' : 'hidden'}`} />
        </span>
      </span>
    </Button>
  );
};

export default ThemeSwitcher;
