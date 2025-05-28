'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HoverEffectsShowcase } from '@/components/showcases/HoverEffectsShowcase';
import { IconUsageShowcase } from '@/components/showcases/IconUsageShowcase';
import { CardShowcase } from '@/components/showcases/CardShowcase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';

import { Download, Heart, ArrowRight, ExternalLink, Settings } from 'lucide-react';

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

// Navigation component for the design system
const DesignSystemNav = () => (
  <nav className="sticky top-4">
    <div className="space-y-1">
      <h3 className="text-sm font-medium mb-2 text-muted-foreground">Components</h3>
      <ul className="space-y-1">
        <li>
          <a href="#colors" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Colors
          </a>
        </li>
        <li>
          <a href="#typography" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Typography
          </a>
        </li>
        <li>
          <a href="#buttons" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Buttons
          </a>
        </li>
        <li>
          <a href="#cards" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Cards
          </a>
        </li>
        <li>
          <a href="#badges" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Badges
          </a>
        </li>
        <li>
          <a href="#icons" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Icons
          </a>
        </li>
        <li>
          <a href="#card-variants" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Card Variants
          </a>
        </li>
        <li>
          <a href="#hover-effects" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Hover Effects
          </a>
        </li>
        <li>
          <a href="#forms" className="block px-3 py-1.5 rounded-md hover:bg-accent text-sm">
            Form Elements
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

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
    <div className="space-y-2 mb-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground max-w-3xl">{description}</p>}
    </div>
    {children}
  </section>
);

// Component example card
const ComponentExample = ({
  title,
  description,
  children,
  className = '',
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`space-y-4 ${className}`.trim()}>
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">{children}</div>
  </div>
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
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-white md:text-6xl drop-shadow-lg">
            Design System
          </h1>
          <p className="mt-4 text-xl text-white/90 drop-shadow-md">
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
              <div className="space-y-8">
                {/* Variants */}
                <ComponentExample
                  title="Variants"
                  description="Different styles of buttons for various use cases."
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Default</h4>
                      <Button>Default</Button>
                      <p className="text-xs text-muted-foreground">For primary actions</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Secondary</h4>
                      <Button variant="secondary">Secondary</Button>
                      <p className="text-xs text-muted-foreground">For secondary actions</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Outline</h4>
                      <Button variant="outline">Outline</Button>
                      <p className="text-xs text-muted-foreground">For less prominent actions</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Ghost</h4>
                      <Button variant="ghost">Ghost</Button>
                      <p className="text-xs text-muted-foreground">
                        For subtle or tertiary actions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Tab</h4>
                      <div className="flex border-b">
                        <Button variant="tab" active className="rounded-none">
                          Active Tab
                        </Button>
                        <Button variant="tab" className="rounded-none">
                          Inactive Tab
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        For tabbed navigation interfaces
                      </p>
                    </div>
                  </div>
                </ComponentExample>

                {/* Sizes */}
                <ComponentExample
                  title="Sizes"
                  description="Buttons are available in different sizes to fit various contexts."
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Small</h4>
                      <Button size="sm">Button</Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Default</h4>
                      <Button size="default">Button</Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Large</h4>
                      <Button size="lg">Button</Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Icon</h4>
                      <Button size="icon" aria-label="Settings">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </ComponentExample>

                {/* With Icons */}
                <ComponentExample
                  title="With Icons"
                  description="Enhance buttons with icons for better visual hierarchy and clarity."
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline">
                      <Heart className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="ghost">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="link" className="text-primary">
                      View All
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </ComponentExample>

                {/* States */}
                <ComponentExample
                  title="States"
                  description="Different states to indicate interactivity and status."
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Default</h4>
                      <Button>Default</Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Hover</h4>
                      <Button className="hover:bg-primary/90">Hover</Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Focus</h4>
                      <Button className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        Focus
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Disabled</h4>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>
                </ComponentExample>

                {/* Custom Styling */}
                <ComponentExample
                  title="Custom Styling"
                  description="Buttons can be customized with additional Tailwind classes."
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                      Gradient
                    </Button>
                    <Button className="rounded-full px-6">Rounded</Button>
                    <Button className="shadow-lg hover:shadow-xl transition-shadow">
                      With Shadow
                    </Button>
                  </div>
                </ComponentExample>
              </div>
            </Section>

            {/* Cards Section */}
            <Section id="cards" title="Cards" description="Card components for displaying content.">
              <div className="grid gap-4 md:grid-cols-2">
                <ComponentExample
                  title="Default Card"
                  description="A basic card with header and content."
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Card content goes here. This is a basic example of a card component.</p>
                    </CardContent>
                  </Card>
                </ComponentExample>
                <ComponentExample title="With Footer" description="Card with a footer section.">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Footer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This card includes a footer section below the content.</p>
                    </CardContent>
                    <div className="px-6 py-3 bg-muted/50 border-t">
                      <p className="text-sm text-muted-foreground">Card footer</p>
                    </div>
                  </Card>
                </ComponentExample>
                <ComponentExample
                  title="Gradient Cards"
                  description="Beautiful cards with gradient backgrounds using our color palette."
                  className="md:col-span-2"
                >
                  <CardShowcase />
                </ComponentExample>
              </div>
            </Section>

            {/* Badges Section */}
            <Section
              id="badges"
              title="Badges"
              description="Small status indicators for labels, tags, and status markers."
            >
              <div className="space-y-8">
                {/* Variants */}
                <ComponentExample
                  title="Variants"
                  description="Badges come in different variants to indicate various states and purposes."
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </ComponentExample>

                {/* Sizes */}
                <ComponentExample
                  title="Sizes"
                  description="Badges are available in different sizes to fit various contexts."
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Small</h4>
                      <Badge variant="primary" size="sm">
                        Small
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Default</h4>
                      <Badge variant="primary">Default</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Large</h4>
                      <Badge variant="primary" size="lg">
                        Large
                      </Badge>
                    </div>
                  </div>
                </ComponentExample>

                {/* Usage with Icons */}
                <ComponentExample
                  title="With Icons"
                  description="Badges can include icons for better visual communication."
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Settings className="h-3 w-3" /> Settings
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Download className="h-3 w-3" /> Download
                    </Badge>
                    <Badge variant="destructive" className="gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive-foreground" />
                      Offline
                    </Badge>
                  </div>
                </ComponentExample>
              </div>
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
