'use client';
import React, { useState } from 'react';

import dynamic from 'next/dynamic';

const CardGradientShowcase = dynamic(
  () => import('../components/showcases/CardGradientShowcase'),
  { ssr: false },
);

import { useTheme } from 'next-themes';

export default function TestGradientPage() {
  const { theme } = useTheme();
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | null>(null);
  const isLightPreview = previewTheme === 'light' || (previewTheme === null && theme === 'light');

  function handlePreviewToggle() {
    setPreviewTheme(isLightPreview ? 'dark' : 'light');
  }

  return (
    <div style={{ minHeight: '100vh', background: isLightPreview ? '#fafbfc' : '#18181b' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button
          style={{
            padding: '6px 12px',
            borderRadius: 12,
            border: '1px solid #ddd',
            fontSize: 14,
            fontWeight: 500,
            background: isLightPreview ? '#fff' : '#23272f',
            color: isLightPreview ? '#222' : '#fafbfc',
            transition: 'background 0.2s',
            cursor: 'pointer',
          }}
          onClick={handlePreviewToggle}
          aria-label="Toggle showcase theme"
        >
          {isLightPreview ? '🌙 Dark Preview' : '🌞 Light Preview'}
        </button>
      </div>
      <div className={isLightPreview ? 'light-preview' : 'dark-preview'}>
        <CardGradientShowcase />
      </div>
    </div>
  );
}
