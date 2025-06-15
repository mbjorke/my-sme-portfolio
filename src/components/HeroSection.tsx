'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
// TestimonialsSection is not used in this file

export function HeroSection() {
  const { locale } = useLanguage();
  const hero = siteConfig.translations[locale as keyof typeof siteConfig.translations].hero;

  return (
    <section
      id="hero"
      className="flex relative flex-col justify-center items-center pt-20 w-full min-h-screen text-center"
    >
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/assets/alone-surfer-horizontal.jpg"
            alt="Surfer background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>
      {/* Content */}
      <div className="flex relative z-10 flex-col gap-6 justify-center items-start px-4 py-24 mx-auto w-full max-w-3xl md:py-44">
        <span className="mb-2 text-xs font-bold tracking-widest text-left uppercase md:text-sm text-white">
          {hero.subheading}
        </span>
        <h1 className="text-white text-[clamp(2.5rem,8vw,4rem)] leading-tight text-left mb-2 font-normal">
          {hero.heading}{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-100 via-success-300 to-success-500">
            {hero.highlight}
          </span>
        </h1>
        <p className="mb-2 max-w-xl text-base text-left md:text-lg text-white">
          {hero.callToAction}
        </p>
        <div className="mt-4">
          <Button asChild variant="primary" size="lg">
            <Link href="#contact" aria-label={hero.callToAction}>
              <span>{hero.callToAction}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
