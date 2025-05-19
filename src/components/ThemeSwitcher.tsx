import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import Button from '@/components/ui/Button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300 
                  ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-black bg-gray-200'}`}
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
