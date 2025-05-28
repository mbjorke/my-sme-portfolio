'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ColorSwatchProps {
  name: string;
  color: string;
  textColor?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  color,
  textColor = 'text-foreground',
}) => {
  return (
    <div className="space-y-2">
      <div
        className={`flex justify-center items-center w-full h-20 rounded-md border shadow-sm ${color} ${textColor}`}
      >
        {name}
      </div>
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{color}</div>
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
      { name: 'Info', color: 'bg-primary-100', textColor: 'text-info-foreground' },
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
];

const ColorPalette: React.FC = () => {
  return (
    <div className="space-y-8">
      {colorGroups.map((group, index) => (
        <Card key={index} variant="primary">
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${group.columns || 5}, minmax(0, 1fr))`,
              }}
            >
              {group.colors.map((color, colorIndex) => (
                <ColorSwatch
                  key={colorIndex}
                  name={color.name}
                  color={color.color}
                  textColor={color.textColor}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ColorPalette;
