'use client';

import React from 'react';
import { CardShowcase } from '@/components/showcases/CardShowcase';

export default function GradientCardsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Gradient Cards</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Beautiful gradient cards using our design system colors
        </p>
      </div>
      <CardShowcase />
    </div>
  );
}
