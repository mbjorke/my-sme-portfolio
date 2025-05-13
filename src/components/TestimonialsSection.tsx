import { siteConfig } from '@/config/siteConfig';
import Button from '@/components/ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import {
  cardBase,
  cardGradient,
  cardContent,
  cardBlur,
  cardHover,
} from '@/styles/card-decorations';
import { useLanguage } from '@/context/LanguageContext';
import { useCallback, useState, useEffect, useRef } from 'react';
import { Carousel } from './Carousel';
import { cn } from '@/lib/utils';

interface Testimonial {
  type: string;
  name: string;
  badge: string;
  badgeUrl: string;
  url: string;
  quote: string;
  show: boolean;
}

export function TestimonialsSection() {
  const { locale } = useLanguage();
  const testimonials = (siteConfig.testimonials as Testimonial[]).filter(
    (t) => t.show && !!t.quote,
  );

  const translations = {
    title: locale === 'sv' ? 'Vad andra säger' : 'What others say',
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container flex flex-col items-center px-4 mx-auto">
        <div className="mb-12 w-full text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
            {translations.title}
          </h2>
          <div className="mx-auto w-20 h-1 bg-primary"></div>
        </div>
        <div className="relative mx-auto w-full max-w-4xl">
          <Carousel
            autoPlay={3000}
            items={testimonials}
            renderItem={(testimonial: Testimonial) => (
              <div className="p-[2px] rounded-2xl bg-transparent transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#7ed6df] hover:via-[#16a085] hover:to-[#1de9b6]">
                <Card className={cn(cardBase, 'relative p-0 group')}>
                  {/* No cardGradient or cardBlur here */}
                  <Quote
                    className="absolute top-8 left-8 z-0 w-12 h-12 pointer-events-none text-primary/10 md:w-16 md:h-16"
                    strokeWidth={1.5}
                  />
                  <CardContent className={cn(cardContent, 'relative z-10')}>
                    <div className="flex relative z-10 flex-col items-center md:flex-row md:items-start">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-glow">
                          <AvatarImage
                            src={testimonial.badgeUrl}
                            alt={testimonial.badge}
                            className="object-cover"
                          />
                          <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                            {testimonial.name
                              .split(' ')
                              .map((n: string) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <blockquote className="relative z-10 mb-6 text-lg md:text-xl text-foreground/80">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-foreground/60">{testimonial.type}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
