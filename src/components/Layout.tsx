import React from 'react';
import type { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Nav from '@/components/Nav';
import ThemeSwitcher from '@/components/ThemeSwitcher';



import { Card, CardHeader, CardTitle } from './ui/card';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-primary focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className="flex fixed top-0 right-0 left-0 z-50 gap-4 justify-between items-center p-4 w-full border-b backdrop-blur-sm border-foreground/10 bg-background/80"
        role="banner"
      >
        <div className="flex gap-4 items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Home">
            <Card variant="transparent" className="rounded-full">
              <CardHeader>
                <CardTitle>
                  <Image
                    src="/logo.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="mr-2 w-auto h-8"
                    priority
                    aria-hidden="true"
                  />
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
          <Nav />
        </div>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>

      <main
        id="main-content"
        role="main"
        className="pt-20 bg-background min-h-screen"
        tabIndex={-1}
      >
        {children}
      </main>

      <footer role="contentinfo" className="border-t border-foreground/10 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Marcus Björke. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
