import Nav from '@/components/Nav';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="flex gap-4 justify-between items-center p-4 w-full">
        <div className="flex gap-4 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2 w-auto h-8"
              priority
            />
          </Link>
          <Nav />
        </div>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
