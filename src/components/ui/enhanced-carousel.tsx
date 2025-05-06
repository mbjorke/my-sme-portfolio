"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type EmblaCarouselType = ReturnType<typeof useEmblaCarousel>[1]
type EmblaOptionsType = {
  align?: 'start' | 'center' | 'end'
  loop?: boolean
  dragFree?: boolean
  skipSnaps?: boolean
  containScroll?: 'trimSnaps' | 'keepSnaps' | boolean
  axis?: 'x' | 'y'
  [key: string]: any
}

type CarouselApi = EmblaCarouselType
type CarouselOptions = EmblaOptionsType

type CarouselProps = {
  opts?: CarouselOptions
  orientation?: "horizontal" | "vertical"
  className?: string
  children: React.ReactNode
  showControls?: boolean
  showDots?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  setApi?: (api: EmblaCarouselType) => void
}

type CarouselContextType = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  opts?: CarouselOptions
  orientation: "horizontal" | "vertical"
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollTo: (index: number) => void
  scrollSnaps: number[]
} | null

const CarouselContext = React.createContext<CarouselContextType>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

export function Carousel({
  opts,
  orientation = "horizontal",
  className,
  children,
  showControls = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  setApi,
}: CarouselProps) {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: (orientation === "horizontal" ? "x" : "y") as 'x' | 'y',
    align: opts?.align || 'start',
    containScroll: (opts?.containScroll === 'trimSnaps' ? 'trimSnaps' : 
                  opts?.containScroll === 'keepSnaps' ? 'keepSnaps' : false) as 'trimSnaps' | 'keepSnaps' | false,
  })
  
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [orientationState, setOrientation] = React.useState<"horizontal" | "vertical">(
    orientation || "horizontal"
  )

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollNext, scrollPrev]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || !emblaApi) return
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        scrollNext()
      } else {
        scrollTo(0)
      }
    }, autoPlayInterval)
    
    return () => {
      if (autoplay) clearInterval(autoplay)
    }
  }, [emblaApi, autoPlay, autoPlayInterval, scrollNext, scrollTo])

  React.useEffect(() => {
    if (emblaApi && setApi) {
      setApi(emblaApi);
    }
  }, [emblaApi, setApi]);

  const value = React.useMemo(() => ({
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
  } as const), [
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
  ])

  return (
    <CarouselContext.Provider value={value}>
      <div
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
      >
        <div ref={carouselRef} className="overflow-hidden">
          <div
            className={cn(
              "flex",
              orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
            )}
          >
            {children}
          </div>
        </div>
        
        {showControls && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
        
        {showDots && <CarouselDots />}
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex", className)} {...props} />
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel()
  
  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 rounded-full",
        !canScrollPrev && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 rounded-full",
        !canScrollNext && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  )
}

function CarouselDots({
  className,
  dotClassName,
  activeDotClassName,
}: {
  className?: string
  dotClassName?: string
  activeDotClassName?: string
}) {
  const { api, selectedIndex, scrollTo } = useCarousel()
  const [slides, setSlides] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!api) return
    
    setSlides(Array.from({ length: api.scrollSnapList().length }, (_, i) => i))
    
    const onInit = () => {
      setSlides(Array.from({ length: api.scrollSnapList().length }, (_, i) => i))
    }
    
    api.on("reInit", onInit)
    return () => {
      api.off("reInit", onInit)
    }
  }, [api])

  if (slides.length <= 1) return null

  return (
    <div className={cn("flex justify-center gap-2 mt-4", className)}>
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => scrollTo(index)}
          className={cn(
            "h-2 w-2 rounded-full bg-gray-300 transition-colors",
            dotClassName,
            index === selectedIndex && ["bg-primary", activeDotClassName]
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? "step" : undefined}
        />
      ))}
    </div>
  )
}
