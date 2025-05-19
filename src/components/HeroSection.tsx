'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const { locale } = useLanguage();
  const hero = siteConfig.translations[locale as keyof typeof siteConfig.translations].hero;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden text-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/alone-surfer.jpg"
          alt="Surfer background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      {/* Content */}
      <div className="flex relative z-10 flex-col gap-6 justify-center items-start px-4 py-24 mx-auto w-full max-w-3xl md:py-44">
        <span className="mb-2 text-xs font-bold tracking-widest text-left uppercase md:text-sm text-white/70">
          {hero.subheading}
        </span>
        <h1 className="text-white text-[clamp(2.5rem,8vw,4rem)] leading-tight text-left mb-2 font-normal">
          {hero.heading} {/* Classic Tailwind gradient */}
          <span className="text-transparent bg-gradient-to-r from-[#7ed6df] via-[#16a085] to-[#1de9b6] bg-clip-text font-bold">
            {hero.highlight}
          </span>
        </h1>
        <p className="mb-2 max-w-xl text-base text-left md:text-lg text-white/80">
          {hero.description}
        </p>
        <p className="mb-2 max-w-xl text-base text-left md:text-lg text-white/80">
          {hero.callToAction}
        </p>
        <Button
          asChild
          className="flex justify-center items-center mt-2 w-16 h-16 text-black bg-white rounded-full shadow-xl transition-all duration-200 hover:bg-gray-200"
        >
          <Link href="#contact" aria-label={hero.callToAction}>
            <ArrowRight className="w-8 h-8" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
