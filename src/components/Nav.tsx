'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return;

      const sections = Object.keys(siteConfig.translations.en.navLinks).map((key) => ({
        id: key.toLowerCase(),
        element: document.getElementById(key.toLowerCase()),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const { id, element } of sections) {
        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle nav link click (for mobile menu)
  const handleNavLinkClick = (e: React.MouseEvent) => {
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Handle keyboard navigation for the nav menu
  const handleKeyDown = (e: React.KeyboardEvent, index: number, totalItems: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % totalItems;
      const nextButton = navRef.current?.querySelector<HTMLButtonElement>(
        `button:nth-child(${nextIndex + 1})`,
      );
      nextButton?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + totalItems) % totalItems;
      const prevButton = navRef.current?.querySelector<HTMLButtonElement>(
        `button:nth-child(${prevIndex + 1})`,
      );
      prevButton?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstButton = navRef.current?.querySelector<HTMLButtonElement>('button:first-child');
      firstButton?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastButton = navRef.current?.querySelector<HTMLButtonElement>('button:last-child');
      lastButton?.focus();
    }
  };

  // Handle language change
  const handleLanguageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newLang = e.currentTarget.getAttribute('data-lang');
    if (newLang === 'sv' || newLang === 'en') {
      router.push(
        {
          pathname,
          query: { ...router.query, lang: newLang },
        },
        undefined,
        { locale: newLang },
      );
    }
  };

  const navItems = Object.entries(siteConfig.translations.en.navLinks);
  const totalItems = navItems.length + 1; // +1 for login button

  return (
    <nav
      ref={navRef}
      className="hidden gap-1 items-center p-6 rounded-full md:flex bg-primary-950/95 backdrop-blur-sm"
      aria-label="Main navigation"
      role="navigation"
    >
      {navItems.map(([key, value], index) => {
        const href = `#${key.toLowerCase()}`;
        const isActive = activeSection === key.toLowerCase();

        return (
          <div key={key} className="relative group">
            <Button
              key={key}
              asChild
              variant="link"
              className={`focus:outline-none px-3 py-2 text-white hover:text-white/90 transition-colors ${
                isActive ? 'text-white focus:ring-primary' : 'text-white/70 focus:ring-primary'
              }`}
              active={isActive}
              onKeyDown={(e) => handleKeyDown(e, index, totalItems)}
              aria-current={isActive ? 'page' : undefined}
            >
              <Link
                href={href}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded"
                aria-label={`${value} ${isActive ? '(current section)' : ''}`}
              >
                {value}
              </Link>
            </Button>
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-200 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </div>
        );
      })}

      <Button
        asChild
        variant="ghost"
        size="sm"
        className="px-4 py-2 ml-2 text-sm font-medium rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onKeyDown={(e) => handleKeyDown(e, navItems.length, totalItems)}
      >
        <Link
          href="/login"
          className="font-medium focus:outline-none"
          aria-label="Login to your account"
        >
          Login
        </Link>
      </Button>
    </nav>
  );
};

export default Nav;
