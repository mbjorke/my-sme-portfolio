import { siteConfig } from '@/config/siteConfig';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const testimonials = (siteConfig.testimonials as Testimonial[]).filter(
    (t) => t.show && !!t.quote,
  );

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Move early return below all hooks

  const translations = {
    title: locale === 'sv' ? 'Vad andra säger' : 'What others say',
  };

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container flex flex-col items-center px-4 mx-auto">
        <div className="mb-12 w-full text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-foreground">
            {translations.title}
          </h2>
          <div className="mx-auto w-20 h-1 bg-primary"></div>
        </div>

        <div
          className="relative mx-auto w-full max-w-4xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card className={cn(cardBase, cardHover, 'relative group p-0')}>
            <div className={cn(cardGradient, cardBlur, 'rounded-xl')} />
            <Quote
              className="absolute top-8 left-8 w-12 h-12 text-primary/10 z-0 pointer-events-none md:w-16 md:h-16"
              strokeWidth={1.5}
            />
            <CardContent className={cn(cardContent, 'relative z-10')}>
              <div className="flex relative z-10 flex-col items-center md:flex-row md:items-start">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-glow">
                    <AvatarImage
                      src={currentTestimonial.badgeUrl}
                      alt={currentTestimonial.badge}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {currentTestimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <blockquote className="relative z-10 mb-6 text-lg md:text-xl text-foreground/80">
                    &quot;{currentTestimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-foreground/60">{currentTestimonial.type}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full text-primary hover:bg-primary/10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-110'
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full text-primary hover:bg-primary/10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
