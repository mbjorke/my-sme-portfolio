'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

const Nav = () => {
  return (
    <nav className="hidden items-center gap-1 md:flex">
      {Object.entries(siteConfig.translations.en.navLinks).map(([key, value]) => (
        <Link
          key={key}
          href={`#${key.toLowerCase()}`}
          className="group relative px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        >
          <span className="relative z-10">{value}</span>
          <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
        </Link>
      ))}
      <Link
        href="/login"
        className="ml-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-sm"
      >
        Login
      </Link>
    </nav>
  );
};

export default Nav;
