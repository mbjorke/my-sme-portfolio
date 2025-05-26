'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ColorSwatchProps {
  name: string;
  value: string;
  isGradient?: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, isGradient = false }) => {
  const colorStyle = isGradient ? { background: value } : { backgroundColor: `hsl(${value})` };

  return (
    <div className="space-y-2">
      <div className="w-full h-20 rounded-md border shadow-sm" style={colorStyle} />
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground text-xs">{value}</div>
      </div>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  const colors = [
    { name: 'Ocean Blue', value: 'var(--ocean-blue)' },
    { name: 'Surf Teal', value: 'var(--surf-teal)' },
    { name: 'Sand', value: 'var(--sand)' },
    { name: 'White', value: 'var(--white)' },
    { name: 'Deep Navy', value: 'var(--deep-navy)' },
    { name: 'Black', value: 'var(--black)' },
    { name: 'Error', value: 'var(--error)' },
    { name: 'Success', value: 'var(--success)' },
    { name: 'Warning', value: 'var(--warning)' },
    { name: 'Info', value: 'var(--info)' },
  ];

  const gradients = [
    {
      name: 'Primary Card Gradient',
      value: 'var(--card-primary)',
    },
    {
      name: 'Secondary Card Gradient',
      value: 'var(--card-secondary)',
    },
    {
      name: 'Vibrant Gradient',
      value: 'linear-gradient(165deg, #00FFFF 0%, #02d19d 10%, #305854 19%, #000000 29%)',
    },
    {
      name: 'Vibrant Gradient 2',
      value: 'linear-gradient(165deg, #FF0000 0%, #f8aa07 10%, #fa07e5 19%, #000000 29%)',
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {colors.map((color) => (
            <ColorSwatch key={color.name} name={color.name} value={color.value} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6">Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gradients.map((gradient) => (
            <ColorSwatch
              key={gradient.name}
              name={gradient.name}
              value={gradient.value}
              isGradient
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6">Card Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="primary">
            <CardHeader>
              <CardTitle>Primary Variant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This card uses the primary variant.</p>
            </CardContent>
          </Card>

          <Card variant="secondary">
            <CardHeader>
              <CardTitle>Secondary Variant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">This card uses the secondary variant.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ColorPalette;
