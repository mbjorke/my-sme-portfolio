import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type HoverEffectType = 'SCALE' | 'COLOR' | 'GLOW';

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
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          }}
        />
        <div className="relative z-10">
          <div className="text-lg font-medium">Glow Effect</div>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            Hover to see glow effect
          </p>
        </div>
      </div>
    ),
  },
];

export function HoverEffectsShowcase() {
  const [activeTab, setActiveTab] = React.useState<HoverEffectType>('SCALE');
  const activeExample = hoverEffectExamples.find((example) => example.type === activeTab);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Hover Effects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {hoverEffectExamples.map(({ type, component }) => (
          <div key={type} className="cursor-pointer" onClick={() => setActiveTab(type)}>
            <Card
              className={cn(
                'h-full transition-all duration-200',
                activeTab === type
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-75 hover:opacity-100',
              )}
            >
              {component}
            </Card>
          </div>
        ))}
      </div>

      {activeExample && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">{activeExample.label}</h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(activeExample.component, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default HoverEffectsShowcase;
