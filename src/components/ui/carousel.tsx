"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

export function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  )
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function CarouselItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex-[0_0_100%]", className)}>{children}</div>
}

export function CarouselNext() {
  // Placeholder for next button
  return <button>{">"}</button>
}

export function CarouselPrevious() {
  // Placeholder for previous button
  return <button>{"<"}</button>
}