"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/enhanced-carousel"

type CarouselDemoProps = {
  items: {
    title: string
    description: string
    content: React.ReactNode
  }[]
  autoPlay?: boolean
  showControls?: boolean
  showDots?: boolean
  className?: string
}

export function CarouselDemo({
  items,
  autoPlay = false,
  showControls = true,
  showDots = true,
  className,
}: CarouselDemoProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      autoPlay={autoPlay}
      showControls={showControls}
      showDots={showDots}
      className={className}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {item.content}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
