'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/Button';

const Nav = () => {
  return (
    <nav className="hidden gap-1 items-center p-6 rounded-full md:flex bg-primary-900/50">
      {Object.entries(siteConfig.translations.en.navLinks).map(([key, value]) => (
        <Button key={key} asChild variant="ghost">
          <Link href={`#${key.toLowerCase()}`}>{value}</Link>
        </Button>
      ))}
      <Button asChild variant="primary" size="sm" className="px-4 py-2 ml-2 text-sm rounded-full">
        <Link href="/login">Login</Link>
      </Button>
    </nav>
  );
};

export default Nav;
