'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ColorSwatchProps {
  name: string;
  color: string;
  textColor?: string;
  showOpacity?: boolean;
}

// Helper function to determine text color based on background color
const getTextColorClass = (baseColor: string, step: string): string => {
  // For light colors (100-400), use darker text for better contrast
  if (['100', '200', '300', '400'].includes(step)) {
    return `text-${baseColor}-950`;
  }
  // For dark colors (500-900), use light text for better contrast
  return `text-${baseColor}-50`;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  color,
  textColor: propTextColor,
  showOpacity = false,
}) => {
  // Get the base color and step from the color class
  const getColorParts = (colorClass: string) => {
    // Remove 'bg-' prefix if present
    const base = colorClass.startsWith('bg-') ? colorClass.substring(3) : colorClass;
    // Split into base color and step (e.g., 'primary-500' -> ['primary', '500'])
    const parts = base.split('-');
    // Default to '500' if no step is provided
    return parts.length > 1
      ? { baseColor: parts[0], step: parts[1] }
      : { baseColor: parts[0], step: '500' };
  };

  const { baseColor, step } = getColorParts(color);
  const fullColor = `${baseColor}-${step}`;
  // Get the appropriate text color class based on the background color
  const textColorClass = propTextColor || getTextColorClass(baseColor, step);

  // Opacity variants using Tailwind's opacity scale
  const opacityVariants = [
    { value: '100', opacity: '100' },
    { value: '90', opacity: '90' },
    { value: '75', opacity: '75' },
    { value: '50', opacity: '50' },
    { value: '25', opacity: '25' },
  ] as const;

  // Pre-generate all possible color classes to ensure they're included in the build
  const opacityClasses = opacityVariants.map((opVariant) => {
    const opacitySuffix = opVariant.opacity === '100' ? '' : `/${opVariant.opacity}`;
    return `bg-${fullColor}${opacitySuffix}`;
  });

  return (
    <div className="space-y-2">
      {/* Main color swatch */}
      <div className="overflow-hidden w-full h-20 rounded-md border shadow-sm">
        <div className={`flex h-full justify-center items-center ${color} ${textColorClass}`}>
          {name}
        </div>
      </div>

      {/* Opacity variants */}
      {showOpacity && (
        <div className="grid grid-cols-5 gap-1">
          {opacityVariants.map((opVariant) => {
            const opacitySuffix = opVariant.opacity === '100' ? '' : `/${opVariant.opacity}`;
            const bgClass = `bg-${fullColor}${opacitySuffix}`;

            return (
              <div
                key={opVariant.value}
                className={`h-6 rounded-sm flex items-center justify-center text-xs ${bgClass} ${textColorClass} border border-border`}
                title={`${fullColor} ${opVariant.value}%`}
              >
                {opVariant.value}%
              </div>
            );
          })}
        </div>
      )}

      {/* Color info */}
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-xs truncate text-muted-foreground">{color}</div>
      </div>

      {/* Force Tailwind to include these classes */}
      <div className="hidden">
        {opacityClasses.map((cls, i) => (
          <div key={i} className={cls}></div>
        ))}
      </div>
    </div>
  );
};

interface OpacityVariant {
  value: string | number;
  class: string;
}

interface ColorWithOpacitySwatchProps {
  baseColor: string;
  name: string;
  textColor?: string;
}

const ColorWithOpacitySwatch: React.FC<ColorWithOpacitySwatchProps> = ({ baseColor, name }) => {
  const opacities: OpacityVariant[] = [
    { value: '100', class: 'opacity-100' },
    { value: '90', class: 'opacity-90' },
    { value: '75', class: 'opacity-75' },
    { value: '50', class: 'opacity-50' },
    { value: '25', class: 'opacity-25' },
  ];

  // Extract the base color and step from the baseColor class (e.g., 'bg-primary-500' -> 'primary', '500')
  const colorParts = baseColor.replace('bg-', '').split('-');
  const baseColorName = colorParts[0] || 'primary';
  const step = colorParts[1] || '500';

  // We'll calculate the text color for each opacity variant individually

  return (
    <div className="space-y-2">
      <div className="relative group">
        <div className="flex overflow-hidden rounded-md border shadow-sm">
          {opacities.map(({ value, class: opacityClass }) => {
            // For each opacity variant, determine the appropriate text color
            const valueStr = String(value);
            const variantStep =
              valueStr === '100'
                ? step
                : Math.floor(parseInt(step) * (parseInt(valueStr) / 100)).toString();
            const variantTextColor = getTextColorClass(baseColorName, variantStep);

            return (
              <div
                key={value}
                className={`flex flex-1 justify-center items-center h-20 text-xs font-medium ${baseColor} ${opacityClass} ${variantTextColor}`}
                style={{ minWidth: '20%' }}
              >
                {value}%
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{baseColor}</div>
      </div>
    </div>
  );
};

const colorGroups = [
  {
    title: 'Primary Colors',
    colors: [
      { name: 'Primary', color: 'bg-primary', textColor: 'text-primary-foreground' },
      { name: 'Secondary', color: 'bg-secondary', textColor: 'text-secondary-foreground' },
      { name: 'Accent', color: 'bg-accent', textColor: 'text-accent-foreground' },
    ],
    columns: 3,
  },
  {
    title: 'Status Colors',
    colors: [
      { name: 'Success', color: 'bg-success', textColor: 'text-success-foreground' },
      { name: 'Warning', color: 'bg-warning', textColor: 'text-warning-foreground' },
      { name: 'Error', color: 'bg-destructive', textColor: 'text-destructive-foreground' },
      { name: 'Info', color: 'bg-primary', textColor: 'text-primary-foreground' },
    ],
    columns: 4,
  },
  {
    title: 'Primary Scale',
    colors: [
      { name: '50', color: 'bg-primary-50', textColor: 'text-foreground' },
      { name: '100', color: 'bg-primary-100', textColor: 'text-foreground' },
      { name: '200', color: 'bg-primary-200', textColor: 'text-foreground' },
      { name: '300', color: 'bg-primary-300', textColor: 'text-foreground' },
      { name: '400', color: 'bg-primary-400', textColor: 'text-foreground' },
      { name: '500', color: 'bg-primary-500', textColor: 'text-primary-foreground' },
      { name: '600', color: 'bg-primary-600', textColor: 'text-primary-foreground' },
      { name: '700', color: 'bg-primary-700', textColor: 'text-primary-foreground' },
      { name: '800', color: 'bg-primary-800', textColor: 'text-primary-foreground' },
      { name: '900', color: 'bg-primary-900', textColor: 'text-primary-foreground' },
    ],
    columns: 5,
  },
  {
    title: 'Secondary Scale',
    colors: [
      { name: '50', color: 'bg-secondary-50', textColor: 'text-foreground' },
      { name: '100', color: 'bg-secondary-100', textColor: 'text-foreground' },
      { name: '200', color: 'bg-secondary-200', textColor: 'text-foreground' },
      { name: '300', color: 'bg-secondary-300', textColor: 'text-foreground' },
      { name: '400', color: 'bg-secondary-400', textColor: 'text-foreground' },
      { name: '500', color: 'bg-secondary-500', textColor: 'text-secondary-foreground' },
      { name: '600', color: 'bg-secondary-600', textColor: 'text-secondary-foreground' },
      { name: '700', color: 'bg-secondary-700', textColor: 'text-secondary-foreground' },
      { name: '800', color: 'bg-secondary-800', textColor: 'text-secondary-foreground' },
      { name: '900', color: 'bg-secondary-900', textColor: 'text-secondary-foreground' },
    ],
    columns: 5,
  },
  {
    title: 'Background & Text',
    colors: [
      { name: 'Background', color: 'bg-background', textColor: 'text-foreground' },
      { name: 'Foreground', color: 'bg-foreground', textColor: 'text-background' },
      { name: 'Muted', color: 'bg-muted', textColor: 'text-muted-foreground' },
      { name: 'Card', color: 'bg-card', textColor: 'text-card-foreground' },
    ],
    columns: 4,
  },
  {
    title: 'Destructive Scale',
    colors: [
      { name: '50', color: 'bg-destructive-50', textColor: 'text-foreground' },
      { name: '100', color: 'bg-destructive-100', textColor: 'text-foreground' },
      { name: '200', color: 'bg-destructive-200', textColor: 'text-foreground' },
      { name: '300', color: 'bg-destructive-300', textColor: 'text-foreground' },
      { name: '400', color: 'bg-destructive-400', textColor: 'text-foreground' },
      { name: '500', color: 'bg-destructive-500', textColor: 'text-destructive-foreground' },
      { name: '600', color: 'bg-destructive-600', textColor: 'text-destructive-foreground' },
      { name: '700', color: 'bg-destructive-700', textColor: 'text-destructive-foreground' },
      { name: '800', color: 'bg-destructive-800', textColor: 'text-destructive-foreground' },
      { name: '900', color: 'bg-destructive-900', textColor: 'text-destructive-foreground' },
    ],
    columns: 5,
  },
  {
    title: 'Success Scale',
    colors: [
      { name: '50', color: 'bg-success-50', textColor: 'text-foreground' },
      { name: '100', color: 'bg-success-100', textColor: 'text-foreground' },
      { name: '200', color: 'bg-success-200', textColor: 'text-foreground' },
      { name: '300', color: 'bg-success-300', textColor: 'text-foreground' },
      { name: '400', color: 'bg-success-400', textColor: 'text-foreground' },
      { name: '500', color: 'bg-success-500', textColor: 'text-success-foreground' },
      { name: '600', color: 'bg-success-600', textColor: 'text-success-foreground' },
      { name: '700', color: 'bg-success-700', textColor: 'text-success-foreground' },
      { name: '800', color: 'bg-success-800', textColor: 'text-success-foreground' },
      { name: '900', color: 'bg-success-900', textColor: 'text-success-foreground' },
    ],
    columns: 5,
  },
  {
    title: 'Accent Scale',
    colors: [
      { name: '50', color: 'bg-accent-50', textColor: 'text-foreground' },
      { name: '100', color: 'bg-accent-100', textColor: 'text-foreground' },
      { name: '200', color: 'bg-accent-200', textColor: 'text-foreground' },
      { name: '300', color: 'bg-accent-300', textColor: 'text-foreground' },
      { name: '400', color: 'bg-accent-400', textColor: 'text-foreground' },
      { name: '500', color: 'bg-accent-500', textColor: 'text-accent-foreground' },
      { name: '600', color: 'bg-accent-600', textColor: 'text-accent-foreground' },
      { name: '700', color: 'bg-accent-700', textColor: 'text-accent-foreground' },
      { name: '800', color: 'bg-accent-800', textColor: 'text-accent-foreground' },
      { name: '900', color: 'bg-accent-900', textColor: 'text-accent-foreground' },
    ],
    columns: 5,
  },
];

const colorScales = [
  { base: 'primary', name: 'Primary' },
  { base: 'secondary', name: 'Secondary' },
  { base: 'accent', name: 'Accent' },
  { base: 'destructive', name: 'Destructive' },
  { base: 'success', name: 'Success' },
  { base: 'warning', name: 'Warning' },
];

const ColorPalette: React.FC = () => {
  return (
    <div className="space-y-8">
      {colorGroups.map((group, index) => (
        <Card
          key={`group-${index}`}
          variant="transparent"
          className="border border-border/50 bg-background/80 backdrop-blur-sm"
        >
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${group.columns || 1}, minmax(0, 1fr))`,
              }}
            >
              {group.colors.map((color) => {
                // Only show opacity variants for color scales, not for single colors
                const shouldShowOpacity =
                  group.title.includes('Scale') || group.title.includes('Colors');
                return (
                  <ColorSwatch
                    key={`${group.title}-${color.name}`}
                    name={color.name}
                    color={color.color}
                    textColor={color.textColor}
                    showOpacity={shouldShowOpacity}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
      <Card
        variant="transparent"
        className="border border-border/50 bg-background/80 backdrop-blur-sm"
      >
        <CardHeader>
          <CardTitle>Opacity Scales</CardTitle>
          <p className="text-sm text-muted-foreground">
            Hover over colors to see opacity variants. Click to copy class names.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {colorScales.map(({ base, name }) => (
              <ColorWithOpacitySwatch
                key={base}
                baseColor={`bg-${base}`}
                name={name}
                textColor={`text-${base}-foreground`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorPalette;
