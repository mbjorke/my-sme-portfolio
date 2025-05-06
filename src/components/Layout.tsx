import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="flex w-full justify-end gap-2 p-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </header>
      <main>{children}</main>
    </div>
  );
}
