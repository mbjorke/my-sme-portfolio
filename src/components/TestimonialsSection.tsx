import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  cardBase,
  cardGradient,
  cardContent,
  cardQuoteIcon,
  cardBlur,
  cardHover,
} from "@/styles/card-decorations";
import { useLanguage } from "@/context/LanguageContext";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

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
  const testimonials = (siteConfig.testimonials as Testimonial[]).filter(t => t.show && !!t.quote);

  if (testimonials.length === 0) return null;

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

        <div className="relative mx-auto w-full max-w-4xl">
          <Card className={cn(cardBase, cardHover, 'p-8 md:p-12')}>
            <CardContent className={cn(cardContent, 'p-0')}>
              <div className={cn(cardGradient, cardBlur, 'rounded-xl')} />
              <Quote className={cardQuoteIcon} />
              <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="overflow-hidden w-24 h-24 rounded-full border-4 border-primary/20 shadow-glow">
                    <AvatarImage
                      src={currentTestimonial.badgeUrl}
                      alt={currentTestimonial.badge}
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="flex justify-center items-center w-full h-full text-2xl bg-primary/10 text-primary">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="relative z-10 mb-6 text-lg md:text-xl text-foreground/80">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{currentTestimonial.name}</h4>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary' : 'bg-primary/20'
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
