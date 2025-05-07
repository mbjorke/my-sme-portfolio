"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/enhanced-carousel"
import { cardBase, cardGradient, cardGlow } from "@/styles/card-decorations"
import { cn } from "@/lib/utils"

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
            <Card className={cn(cardBase, cardGlow)}>
              <div className={cardGradient} />
              <CardContent className={cn("flex relative z-10 justify-center items-center p-6 aspect-square")}>
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
