import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink, Heart } from 'lucide-react';

// Define all possible hover effect types
type HoverEffectType = 'LIFT' | 'SCALE' | 'COLOR' | 'GLOW' | 'BUTTON' | 'NAVIGATION' | 'CARD';

interface HoverEffectExample {
  type: HoverEffectType;
  label: string;
  component: React.ReactNode;
}

const hoverEffectExamples: HoverEffectExample[] = [
  {
    type: 'SCALE',
    label: 'Scale Effect',
    component: (
      <div className="group relative p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="text-lg font-medium mb-2">Scale Effect</div>
        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          Hover to see subtle scaling
        </p>
      </div>
    ),
  },
  {
    type: 'COLOR',
    label: 'Color Transition',
    component: (
      <div className="group p-6 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors duration-300">
        <Heart className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        <div className="mt-3 text-lg font-medium">Color Transition</div>
        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          Hover to see color transitions
        </p>
      </div>
    ),
  },
  {
    type: 'GLOW',
    label: 'Glow Effect',
    component: (
      <div className="group relative p-6 rounded-lg bg-background border border-border hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-primary/30 transition-all duration-300">
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
        }} />
        <div className="relative z-10">
          <div className="text-lg font-medium">Glow Effect</div>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            Hover to see the glow
          </p>
        </div>
      </div>
    ),
  },
  {
    type: 'BUTTON',
    label: 'Button Hover',
    component: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link" className="gap-1">
            Link <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Hover over buttons to see different hover effects
        </p>
      </div>
    ),
  },
  {
    type: 'NAVIGATION',
    label: 'Navigation Links',
    component: (
      <div className="space-y-4">
        <div className="flex gap-6">
          <a href="#" className="relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors duration-200">
            <span>Home</span>
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </a>
          <a href="#" className="relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors duration-200">
            <span>Projects</span>
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </a>
          <a href="#" className="relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors duration-200">
            <span>About</span>
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Hover over navigation links to see the underline animation
        </p>
      </div>
    ),
  },
  {
    type: 'CARD',
    label: 'Project Card',
    component: (
      <div className="group relative overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
              View Project
              <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium group-hover:text-primary transition-colors duration-300">Project Title</h3>
          <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            Project description goes here with some details about what it does.
          </p>
        </div>
      </div>
    ),
  },
];

export function HoverEffectsShowcase() {
  return (
    <div className="grid gap-4 p-4">
      {hoverEffectExamples.map((example) => (
        <Card key={example.type} className="p-4">
          <CardHeader>
            <CardTitle>{example.label}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-4">
            {example.component}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
