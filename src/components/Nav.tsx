'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

const Nav = () => {
  return (
    <nav className="hidden gap-6 text-sm font-medium md:flex">
      {Object.entries(siteConfig.translations.en.navLinks).map(([key, value]) => (
        <Link
          key={key}
          href={`#${key.toLowerCase()}`}
          className="transition-colors hover:text-primary"
        >
          {value}
        </Link>
      ))}
      <Link href="/signup" className="transition-colors hover:text-primary">
        Sign Up
      </Link>
    </nav>
  );
};

export default Nav;
