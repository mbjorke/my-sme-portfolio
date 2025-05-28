import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Carousel } from './Carousel';
// cn is not used in this file
import { useLanguage } from '@/context/LanguageContext';
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
    <section id="testimonials" className="relative z-10 py-16 md:py-24 bg-background/60">
      <div className="flex flex-col items-center px-4 mx-auto">
        <div className="relative z-10 mb-12 w-full text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
            {translations.title}
          </h2>
          <div className="mx-auto w-20 h-1 bg-primary"></div>
        </div>
        <div className="relative mx-auto w-full max-w-3xl">
          <Carousel
            autoPlay={3000}
            items={testimonials}
            renderItem={(testimonial: Testimonial) => (
              <Card variant="transparent" className="relative p-0 group">
                <CardContent>
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <div className="relative z-0 mb-6 md:mb-0 md:mr-8">
                      <Quote
                        className="absolute left-1 top-4 z-10 w-10 h-10 text-accent/40"
                        strokeWidth={1.5}
                      />
                      <div className="p-1 rounded-full border-4 border-primary/20 shadow-glow">
                        <Avatar className="relative left-1 top-6 w-24 h-24">
                          <AvatarImage
                            src={testimonial.badgeUrl}
                            alt={testimonial.badge}
                            className="object-cover"
                          />
                        </Avatar>
                      </div>
                    </div>
                    <div className="flex-1 mt-6">
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
            )}
          />
        </div>
      </div>
    </section>
  );
}
