'use client';
import React, { useState } from 'react';
import GradientPicker from './GradientPicker';
import { Slider } from './ui/slider';
import { Card, CardContent } from './ui/card';

export default function CardGradientColorPickerShowcase() {
  const [palette, setPalette] = useState([
    { offset: 0, color: '#01fdee' },
    { offset: 0.1, color: '#02d19d' },
    { offset: 0.19, color: '#07fae3' },
    { offset: 0.29, color: '#000000' },
  ]);
  const [angle, setAngle] = useState(165);
  const [borderThickness, setBorderThickness] = useState(4);

  const gradient = `linear-gradient(${angle}deg, ${palette
    .map((stop) => `${stop.color} ${Math.round(stop.offset * 100)}%`)
    .join(', ')})`;

  return (
    <div style={{ padding: 32, maxWidth: 480, margin: '0 auto' }}>
      <h2 className="mb-4 text-lg font-semibold">Card Gradient Color Picker Showcase</h2>
      <GradientPicker palette={palette} angle={angle} onPaletteChange={setPalette} />
      <div style={{ margin: '24px 0 8px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>Border Thickness:</span>
          <Slider
            min={1}
            max={24}
            step={1}
            value={[borderThickness]}
            onValueChange={([v]) => setBorderThickness(v)}
            style={{ width: 180 }}
          />
          <span style={{ fontSize: 13, width: 32, textAlign: 'right' }}>{borderThickness}px</span>
        </div>
      </div>
      <div style={{ margin: '24px 0 8px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>Gradient Direction:</span>
          <Slider
            min={0}
            max={360}
            step={1}
            value={[angle]}
            onValueChange={([v]) => setAngle(v)}
            style={{ width: 180 }}
          />
          <span style={{ fontSize: 13, width: 40 }}>{angle}&deg;</span>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <div style={{ marginBottom: 16, fontWeight: 500 }}>shadcn Card</div>
        <div
          style={{
            borderRadius: 18,
            background: gradient,
            padding: `${borderThickness / 16}rem`,
          }}
        >
          <Card className="rounded-[14px] bg-background min-h-[120px] flex items-center justify-center font-semibold text-lg text-primary">
            <CardContent className="p-6 pt-0 text-center">
              Editable Gradient Border Card (shadcn Card)
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <code style={{ fontSize: 12 }}>{gradient}</code>
      </div>
    </div>
  );
}
