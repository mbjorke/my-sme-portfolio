'use client';

import React, { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

export default function CardGradientShowcase() {
  const [angle, setAngle] = useState(165);
  const [borderThickness, setBorderThickness] = useState(4);

  const gradient = `linear-gradient(${angle}deg, #01fdee 0%, #02d19d 10%, #07fae3 19%, #000000 29%)`;

  return (
    <div className="px-8 py-8 mx-auto max-w-xl">
      <h2 className="mb-4 text-lg font-semibold">Card Gradient Showcase</h2>

      <div className="my-6 space-y-6">
        {/* First Card Example */}
        <div>
          <div
            className="rounded-2xl"
            style={{
              background: gradient,
              padding: `${borderThickness}px`,
            }}
          >
            <Card className="bg-card border-2 border-primary/10 hover:border-primary/20 h-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold">Gradient Card</h3>
                <p className="text-muted-foreground mt-2">Custom gradient border</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-3 items-center mt-4">
            <span className="text-sm font-medium">Border Thickness:</span>
            <Slider
              min={1}
              max={24}
              step={1}
              value={[borderThickness]}
              onValueChange={([v]) => setBorderThickness(v)}
              className="w-[180px]"
            />
            <span className="text-sm w-8 text-right">{borderThickness}px</span>
          </div>
        </div>

        {/* Gradient Direction Control */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Gradient Direction:</span>
            <Slider
              min={0}
              max={360}
              step={1}
              value={[angle]}
              onValueChange={([v]) => setAngle(v)}
              className="w-[180px]"
            />
            <span className="text-sm w-10 text-right">{angle}°</span>
          </div>
        </div>

        {/* Second Card Example */}
        <div className="mt-8">
          <h3 className="text-md font-medium mb-4">shadcn Card with Gradient Border</h3>
          <div
            className="rounded-xl"
            style={{
              background: gradient,
              padding: `${borderThickness}px`,
            }}
          >
            <Card className="bg-card border-2 border-primary/10 hover:border-primary/20 rounded-lg min-h-[120px] flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <p className="font-semibold text-lg text-primary">
                  Editable Gradient Border Card (shadcn Card)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Gradient CSS Output */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <code className="text-xs break-all">{gradient}</code>
      </div>
    </div>
  );
}
