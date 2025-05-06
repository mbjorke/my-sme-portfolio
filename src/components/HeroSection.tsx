"use client";

import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

const carouselMembers = siteConfig.teamMembers.slice(0, 3); // Get first 3 team members

export function HeroSection() {
  const hero = siteConfig.translations.en.hero;
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
  }, [api])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Auto-advance the carousel
  useEffect(() => {
    if (!api) return
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="hero" className="py-20 text-center">
      <h2 className="mb-2 text-lg text-teal-400">{hero.subheading}</h2>

      <div className="flex flex-col gap-6 items-center px-4 mb-8 md:flex-row md:justify-center md:items-center">
        <h1 className="text-4xl font-bold text-center md:text-5xl md:text-left">
          {hero.heading} <span className="text-primary">{hero.highlight}</span> {hero.description}
        </h1>

        <div className="w-full max-w-xs">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {carouselMembers.map((member, index) => (
                <CarouselItem key={index} className="flex flex-col items-center">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: count }).map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    'h-2 w-2 p-0 rounded-full transition-colors',
                    index === current - 1 ? 'bg-primary' : 'bg-muted hover:bg-muted/80'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      <p className="mb-8 text-xl">{hero.callToAction}</p>
      <Button asChild>
        <Link href="#contact">{hero.callToAction}</Link>
      </Button>
    </section>
  );
}
