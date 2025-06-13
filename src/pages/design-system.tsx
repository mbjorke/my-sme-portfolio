'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HoverEffectsShowcase } from '@/components/showcases/HoverEffectsShowcase';
import { IconUsageShowcase } from '@/components/showcases/IconUsageShowcase';
import { CardShowcase } from '@/components/showcases/CardShowcase';
import { ButtonShowcase } from '@/components/showcases/ButtonShowcase';
import { BadgeShowcase } from '@/components/showcases/BadgeShowcase';

// Dynamically import the ColorPalette component with no SSR
const ColorPalette = dynamic(() => import('@/components/showcases/ColorPalette'), {
  ssr: false,
  loading: () => <div>Loading colors...</div>,
});

// Metadata is not supported in client components
// Moved to layout.tsx or page.tsx in the design system folder
// export const metadata: Metadata = {
//   title: 'Design System',
//   description: 'Comprehensive documentation of the design system components and patterns',
// };

// Import the DesignSystemNav component
import { DesignSystemNav } from '@/components/DesignSystemNav';

// Section component for consistent section layout
const Section = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-12 scroll-mt-20">
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="max-w-3xl text-muted-foreground">{description}</p>}
    </div>
    {children}
  </section>
);

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Alone Surfer Image */}
      <section className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden text-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/alone-surfer.jpg"
            alt="Surfer riding a wave"
            fill
            className="object-cover"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>
        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
            Design System
          </h1>
          <p className="mt-4 text-xl drop-shadow-md text-white/90">
            Consistent, accessible design patterns for the application
          </p>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
          <div className="hidden md:block">
            <DesignSystemNav />
          </div>
          <div className="space-y-16">
            {/* Colors Section */}
            <Section
              id="colors"
              title="Color System"
              description="Comprehensive color palette with semantic usage and examples."
            >
              <ColorPalette />
            </Section>

            {/* Typography Section */}
            <Section id="typography" title="Typography" description="Type scale and font styles.">
              <div className="space-y-6">
                {[
                  { name: 'Display', class: 'text-4xl font-bold' },
                  { name: 'Heading 1', class: 'text-3xl font-bold' },
                  { name: 'Heading 2', class: 'text-2xl font-semibold' },
                  { name: 'Heading 3', class: 'text-xl font-semibold' },
                  { name: 'Body', class: 'text-base' },
                  { name: 'Small', class: 'text-sm' },
                  { name: 'Muted', class: 'text-sm text-muted-foreground' },
                ].map((type) => (
                  <div key={type.name}>
                    <p className="text-sm font-medium text-muted-foreground">{type.name}</p>
                    <p className={type.class}>The quick brown fox jumps over the lazy dog.</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Buttons Section */}
            <Section id="buttons" title="Buttons" description="Button variants and usage.">
              <ButtonShowcase />
            </Section>

            {/* Cards Section */}
            <Section id="cards" title="Cards" description="Card components for displaying content.">
              <div className="space-y-8">
                <CardShowcase />
              </div>
            </Section>

            {/* Badges Section */}
            <Section
              id="badges"
              title="Badges"
              description="Small status indicators for labels, tags, and status markers."
            >
              <BadgeShowcase />
            </Section>

            {/* Icons Section */}
            <Section
              id="icons"
              title="Icon Usage"
              description="Consistent patterns for using icons throughout the application."
            >
              <IconUsageShowcase />
            </Section>

            {/* Card Variants Section */}
            <Section
              id="card-variants"
              title="Card Variants"
              description="Pre-styled card variants with gradient backgrounds and subtle border effects."
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Gradient Backgrounds</h3>
                  <p className="text-sm text-muted-foreground">
                    Cards use gradient backgrounds defined in the design system. The gradients are
                    responsive and include subtle hover effects.
                  </p>
                </div>
              </div>
            </Section>

            {/* Hover Effects Section */}
            <Section
              id="hover-effects"
              title="Hover Effects"
              description="Interactive hover effects for cards and other elements."
            >
              <HoverEffectsShowcase />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
