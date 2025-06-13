import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { gradientStyles, GradientVariant } from '@/config/gradients';

export function CardShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries({
        primary: {
          emoji: '1️⃣',
          title: 'NexusCore',
          description: 'Trusted by industry leaders for reliable solutions',
        },
        secondary: {
          emoji: '2️⃣',
          title: 'Scale & Grow',
          description: 'Sustainable solutions for tomorrow',
        },
        tertiary: {
          emoji: '3️⃣',
          title: 'Edit & Refine',
          description: 'Perfecting every detail',
        },
        quaternary: {
          emoji: '4️⃣',
          title: 'Horizon Peak',
          description: 'Where creativity meets opportunity',
        },
        blueberry: {
          emoji: '5️⃣',
          title: 'Blueberry',
          description: 'Deep blue gradient',
        },
        sunset: {
          emoji: '6️⃣',
          title: 'Sunset',
          description: 'Warm and vibrant colors',
        },
        transparent: {
          emoji: '7️⃣',
          title: 'Transparent',
          description: 'Minimal and clean design',
        },
      }).map(([variant, { emoji, title, description }]) => {
        const isPrimary = variant === 'primary';
        const isTransparent = variant === 'transparent';
        const textColor = isPrimary
          ? 'text-primary-foreground'
          : isTransparent
            ? 'text-foreground'
            : 'text-white';
        const textMuted = isPrimary ? 'text-primary-foreground/80' : 'text-white/80';
        const textExtraMuted = isPrimary ? 'text-primary-foreground/60' : 'text-white/60';
        const bgCircle = isPrimary ? 'bg-primary/20' : 'bg-white/20';
        const zIndexClass = isPrimary ? '' : 'relative z-10';

        return (
          <Card key={variant} variant={variant as GradientVariant}>
            <CardHeader className={zIndexClass}>
              <div className="flex gap-2 items-center mb-2">
                <div
                  className={`flex justify-center items-center w-8 h-8 rounded-full ${bgCircle}`}
                >
                  <span className={textColor}>{emoji}</span>
                </div>
                <CardDescription className={textMuted}>{variant}</CardDescription>
              </div>
              <CardTitle className={`text-2xl font-bold ${textColor}`}>{title}</CardTitle>
            </CardHeader>
            <CardContent className={zIndexClass}>
              <p className={`mb-2 text-sm ${textMuted}`}>{description}</p>
            </CardContent>
            <CardFooter className={zIndexClass}>
              <div className={`font-mono text-xs ${textExtraMuted}`}>
                {gradientStyles[variant as keyof typeof gradientStyles]}
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
