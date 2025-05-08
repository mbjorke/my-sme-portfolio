import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem theme={theme}>
      {children}
    </NextThemesProvider>
  );
}
