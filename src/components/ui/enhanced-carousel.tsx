'use client';

import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type EmblaCarouselType = ReturnType<typeof useEmblaCarousel>[1];
type EmblaOptionsType = {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
  dragFree?: boolean;
  skipSnaps?: boolean;
  containScroll?: 'trimSnaps' | 'keepSnaps' | boolean;
  axis?: 'x' | 'y';
  [key: string]: any;
};

export type CarouselApi = EmblaCarouselType;
type CarouselOptions = EmblaOptionsType;

type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
  showControls?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  setApi?: (api: EmblaCarouselType) => void;
  onInit?: (api: EmblaCarouselType) => void;
  onSelect?: () => void;
};

type CarouselContextType = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  opts?: CarouselOptions;
  orientation: 'horizontal' | 'vertical';
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollTo: (index: number) => void;
  scrollSnaps: number[];
} | null;

const CarouselContext = React.createContext<CarouselContextType>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

export function Carousel({
  opts,
  orientation = 'horizontal',
  className,
  children,
  showControls = true,
  showDots = false, // Make dots hidden by default
  autoPlay = false,
  autoPlayInterval = 5000,
  setApi,
  onInit,
  onSelect,
}: CarouselProps) {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: (orientation === 'horizontal' ? 'x' : 'y') as 'x' | 'y',
    align: opts?.align || 'start',
    containScroll: (opts?.containScroll === 'trimSnaps'
      ? 'trimSnaps'
      : opts?.containScroll === 'keepSnaps'
        ? 'keepSnaps'
        : false) as 'trimSnaps' | 'keepSnaps' | false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [orientationState, setOrientation] = React.useState<'horizontal' | 'vertical'>(
    orientation || 'horizontal',
  );

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollNext, scrollPrev],
  );

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    onSelect?.();
  }, [emblaApi, onSelect]);

  const handleInit = useCallback(() => {
    if (!emblaApi) return;
    setApi?.(emblaApi);
    onInit?.(emblaApi);
  }, [emblaApi, onInit, setApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    handleInit();
    handleSelect();
    emblaApi.on('select', handleSelect);
    emblaApi.on('reInit', handleSelect);

    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi, handleInit, handleSelect]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        scrollNext();
      } else {
        scrollTo(0);
      }
    }, autoPlayInterval);

    return () => {
      if (autoplay) clearInterval(autoplay);
    };
  }, [emblaApi, autoPlay, autoPlayInterval, scrollNext, scrollTo]);

  const value = React.useMemo(
    () =>
      ({
        carouselRef,
        api: emblaApi,
        opts,
        orientation: orientationState,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollTo,
        scrollSnaps,
      }) as const,
    [
      emblaApi,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      orientationState,
      scrollNext,
      scrollPrev,
      scrollSnaps,
      scrollTo,
      selectedIndex,
    ],
  );

  // Get the dots count from the carousel API if available
  const dotsCount = React.useMemo(() => {
    if (!emblaApi) return 0;
    return emblaApi.scrollSnapList().length;
  }, [emblaApi]);

  // Update scroll snaps when the carousel is initialized or updated
  React.useEffect(() => {
    if (!emblaApi) return;

    const updateScrollSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    emblaApi.on('reInit', updateScrollSnaps);
    updateScrollSnaps();

    return () => {
      emblaApi.off('reInit', updateScrollSnaps);
    };
  }, [emblaApi]);

  return (
    <CarouselContext.Provider value={value}>
      <div
        className={cn('relative flex flex-col h-full', className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
      >
        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col')}>
              {React.Children.map(children, (child, i) =>
                React.isValidElement(child)
                  ? React.cloneElement(child as React.ReactElement, {
                      className: cn(
                        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                        child.props.className,
                      ),
                    })
                  : child,
              )}
            </div>
          </div>

          {showControls && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </div>

        {showDots && (
          <div className="mt-4">
            <CarouselDots className="mt-4" />
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex w-full transition-transform duration-300 ease-out', className)}
      {...props}
    />
  );
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel();

  return (
    <div
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  );
}

export function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute left-4 top-1/2 -translate-y-1/2 rounded-full',
        !canScrollPrev && 'opacity-50 cursor-not-allowed',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  );
}

export function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'absolute right-4 top-1/2 -translate-y-1/2 rounded-full',
        !canScrollNext && 'opacity-50 cursor-not-allowed',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}

type CarouselDotsProps = {
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
};

export function CarouselDots({ className, dotClassName, activeDotClassName }: CarouselDotsProps) {
  const { scrollSnaps, scrollTo, selectedIndex } = useCarousel();

  if (scrollSnaps.length <= 1) return null;

  return (
    <div className={cn('flex justify-center gap-2 py-2', className)}>
      {scrollSnaps.map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          onClick={() => scrollTo(index)}
          className={cn(
            'h-2 w-2 p-0 rounded-full transition-all duration-300',
            dotClassName,
            index !== selectedIndex
              ? 'bg-muted/50 hover:bg-muted/80 w-2 h-2'
              : ['bg-primary w-6 h-2', activeDotClassName],
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? 'step' : undefined}
        />
      ))}
    </div>
  );
}
