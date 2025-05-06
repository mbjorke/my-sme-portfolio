"use client";

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/button';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from './ui/enhanced-carousel';
import Image from 'next/image';

const staffMembers = siteConfig.teamMembers.slice(0, 3); // Get first 3 team members

export function HeroSection() {
  const hero = siteConfig.translations.en.hero;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % staffMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="py-20 text-center">
      <h2 className="mb-2 text-lg text-teal-400">{hero.subheading}</h2>

      <div className="flex flex-col gap-6 items-center px-4 mb-8 md:flex-row md:justify-center md:items-center">
        <h1 className="text-4xl font-bold text-center md:text-5xl md:text-left">
          {hero.heading} <span className="text-primary">{hero.highlight}</span> {hero.description}
        </h1>

        <div className="w-full max-w-xs">
          <div className="relative">
            <div className="flex overflow-hidden">
              {staffMembers.map((member, index) => (
                <div 
                  key={index}
                  className={`transition-transform duration-500 ease-in-out w-full flex-shrink-0 flex flex-col items-center ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <div className="overflow-hidden relative mb-2 w-16 h-16 rounded-full border-2 md:w-20 md:h-20 border-primary/20">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                      unoptimized={member.avatar.includes('github')}
                    />
                  </div>
                  <p className="text-sm font-medium text-center">{member.name}</p>
                  <p className="text-xs text-center text-muted-foreground">{member.title}</p>
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {staffMembers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mb-8 text-xl">{hero.callToAction}</p>
      <Button asChild>
        <Link href="#contact">{hero.callToAction}</Link>
      </Button>
    </section>
  );
}
