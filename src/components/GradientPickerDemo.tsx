'use client';
import React, { useState } from 'react';
import { GradientPicker } from 'react-linear-gradient-picker';
import 'react-linear-gradient-picker/dist/index.css';

export default function GradientPickerDemo() {
  // Palette uses offset as a string between 0 and 1
  const [palette, setPalette] = useState([
    { color: '#ff0000', offset: 0 },
    { color: '#00ff00', offset: 1 },
  ]);

  // Convert palette to CSS linear-gradient string
  const gradient = `linear-gradient(90deg, ${palette
    .map((stop) => `${stop.color} ${Math.round(stop.offset * 100)}%`)
    .join(', ')})`;

  return (
    <div style={{ padding: 24 }}>
      <h2 className="text-lg font-semibold mb-4">Gradient Picker Demo</h2>
      <div style={{ marginBottom: 24 }}>
        <GradientPicker
          width={320}
          paletteHeight={32}
          palette={palette}
          onPaletteChange={setPalette}
        />
      </div>
      <div
        style={{
          width: 300,
          height: 80,
          borderRadius: 12,
          border: '2px solid #eee',
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333',
        }}
      >
        <span>Preview</span>
      </div>
      <div className="mt-4">
        <code>{gradient}</code>
      </div>
    </div>
  );
}
