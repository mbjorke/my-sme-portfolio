import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
// Utility functions can be imported here if needed

type HoverEffectType = 'SCALE' | 'COLOR' | 'GLOW';

interface HoverEffectExample {
  type: HoverEffectType;
  label: string;
  component: React.ReactNode;
}

const hoverEffectExamples: HoverEffectExample[] = [
  {
    type: 'SCALE',
    label: 'Scale on Hover',
    component: (
      <CardContent className="p-6 text-center group">
        <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full transition-transform duration-300 bg-primary/10 group-hover:scale-110">
          <ArrowUpRight className="w-8 h-8 text-primary" />
        </div>
        <div className="text-lg font-medium">Scale Effect</div>
        <p className="transition-colors duration-300 text-muted-foreground group-hover:text-foreground/80">
          Hover to scale up
        </p>
      </CardContent>
    ),
  },
  {
    type: 'COLOR',
    label: 'Color Transition',
    component: (
      <CardContent className="p-6 text-center group">
        <Heart className="w-8 h-8 transition-colors duration-300 text-muted-foreground group-hover:text-primary" />
        <div className="mt-3 text-lg font-medium">Color Transition</div>
        <p className="transition-colors duration-300 text-muted-foreground group-hover:text-foreground/80">
          Hover to change colors
        </p>
      </CardContent>
    ),
  },
  {
    type: 'GLOW',
    label: 'Glow on Hover',
    component: (
      <CardContent className="overflow-hidden relative p-6 text-center group">
        <div
          className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          }}
        />
        <div className="relative z-10">
          <div className="text-lg font-medium">Glow Effect</div>
          <p className="transition-colors duration-300 text-muted-foreground group-hover:text-foreground/80">
            Hover to see glow effect
          </p>
        </div>
      </CardContent>
    ),
  },
];

export function HoverEffectsShowcase() {
  const [activeTab, setActiveTab] = React.useState<HoverEffectType>('SCALE');

  return (
    <div className="mx-auto w-full max-w-4xl">
      <h2 className="mb-6 text-2xl font-bold">Hover Effects</h2>

      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
        {hoverEffectExamples.map(({ type, component }) => (
          <div key={type} className="cursor-pointer" onClick={() => setActiveTab(type)}>
            <Card
              variant={activeTab === type ? 'primary' : 'secondary'}
              className="h-full transition-all duration-200"
            >
              {component}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverEffectsShowcase;
