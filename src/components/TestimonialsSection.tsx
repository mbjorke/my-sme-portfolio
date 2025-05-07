import { siteConfig } from "@/config/siteConfig";
import { Card, CardContent, CardHeader, Button, Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { ExternalLink, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";
import { useCallback, useState } from "react";

export function TestimonialsSection() {
  const { locale } = useLanguage();
  const [api, setApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.socialProof.filter((t) => t.show && t.quote);

  if (testimonials.length === 0) return null;

  const translations = {
    title: locale === 'sv' ? 'Vad våra klienter säger' : 'What Our Clients Say',
    viewMore: locale === 'sv' ? 'Läs mer' : 'Read more',
  };

  const onInit = useCallback((api: any) => {
    // Optional: Handle any initialization if needed
    setApi(api);
  }, []);

  const onSelect = useCallback(() => {
    // Optional: Handle selection changes if needed
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    if (!api) return;
    api.scrollTo(index);
  }, [api]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto flex flex-col items-center">
        <div className="w-full text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {translations.title}
          </h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-12"></div>
        </div>

        <div className="w-full max-w-4xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            showDots={true}
            onInit={onInit}
            onSelect={onSelect}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="flex flex-col h-full">
                    <CardHeader className="flex-grow">
                      <div className="flex gap-3 items-center mb-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={testimonial.badgeUrl} alt={testimonial.badge} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                        </div>
                      </div>
                      <div className="text-left text-muted-foreground">
                        <Quote className="inline-block mb-1 w-4 h-4 text-primary" />
                        <p className="inline pl-1">{testimonial.quote}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="link" size="sm" asChild className="px-0">
                        <a
                          href={testimonial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 items-center"
                        >
                          {translations.viewMore}
                          <ExternalLink className="ml-1 w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-col items-center mt-6 gap-4">
              <div className="flex gap-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
