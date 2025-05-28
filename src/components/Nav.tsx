'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/Button';

const Nav = () => {
  return (
    <nav className="hidden gap-1 items-center md:flex bg-background/50">
      {Object.entries(siteConfig.translations.en.navLinks).map(([key, value]) => (
        <Button
          key={key}
          asChild
          variant="ghost"
          className="px-4 py-2 h-auto text-sm font-medium text-foreground/90 hover:bg-transparent hover:text-foreground"
        >
          <Link href={`#${key.toLowerCase()}`}>{value}</Link>
        </Button>
      ))}
      <Button asChild variant="default" size="sm" className="px-4 py-2 ml-2 text-sm rounded-full">
        <Link href="/login">Login</Link>
      </Button>
    </nav>
  );
};

export default Nav;
