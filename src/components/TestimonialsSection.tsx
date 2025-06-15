import React from 'react';

import { Quote } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

import { Carousel } from './Carousel';
// cn is not used in this file
import { Avatar, AvatarImage } from './ui/avatar';

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

  // Get testimonials from siteConfig
  const allTestimonials = siteConfig.testimonials as Testimonial[];
  const testimonials = allTestimonials.filter((t) => t.show && !!t.quote);

  const translations = {
    title: locale === 'sv' ? 'Vad andra säger' : 'What others say',
  };

  if (testimonials.length === 0) return null;

  return (
    <section 
      id="testimonials" 
      className="relative z-10 py-16 md:py-24 bg-background/20"
      aria-label="Testimonials from clients and colleagues"
    >
      <div className="flex flex-col items-center px-4 mx-auto">
        <div className="relative z-10 mb-12 w-full text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
            {translations.title}
          </h2>
          <div 
            className="mx-auto w-20 h-1.5 bg-accent-950" 
            aria-hidden="true"
            role="presentation"
          ></div>
        </div>
        <div className="relative mx-auto w-full max-w-3xl h-[420px]">
          <Carousel
            autoPlay={3000}
            items={testimonials}
            className="h-full"
            nextButtonAriaLabel="Next testimonial"
            prevButtonAriaLabel="Previous testimonial"
            nextButtonClassName="text-foreground hover:bg-foreground/20"
            prevButtonClassName="text-foreground hover:bg-foreground/20"
            dotButtonClassName="bg-foreground/60 hover:bg-foreground/80"
            activeDotClassName="bg-foreground text-white"
            renderItem={(testimonial: Testimonial, index: number) => (
              <div 
                className="h-full" 
                role="group" 
                aria-roledescription="testimonial"
                aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
              >
                <Card variant="primary" className="relative h-full p-0 group bg-card/95 border border-foreground/10 shadow-lg">
                  <CardContent className="h-full flex flex-col p-6">
                    <div className="flex flex-col items-center h-full md:flex-row md:items-start">
                      <div className="relative z-0 flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <Quote
                          className="absolute left-1 top-4 z-10 w-10 h-10 text-accent"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <div className="pt-12">
                          <Avatar className="relative left-1 top-6 w-24 h-24">
                            <AvatarImage
                              src={testimonial.badgeUrl}
                              alt={testimonial.badge}
                              className="object-cover"
                            />
                          </Avatar>
                        </div>
                      </div>
                      <div className="flex-1 mt-6 min-h-[200px]">
                        <blockquote 
                          className="relative z-10 mb-6 text-lg md:text-xl text-foreground leading-relaxed"
                          cite={testimonial.url}
                        >
                          <span className="sr-only">Testimonial from {testimonial.name}:</span>
                          <span aria-hidden="true">&ldquo;</span>
                          <span>{testimonial.quote}</span>
                          <span aria-hidden="true">&rdquo;</span>
                        </blockquote>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground/95">
                            {testimonial.name}
                          </h3>
                          <p className="text-foreground/95">{testimonial.type}</p>
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
