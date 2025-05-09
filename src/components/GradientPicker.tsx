'use client';
import React, { useState } from 'react';
import { GradientPicker as RLGradientPicker } from 'react-linear-gradient-picker';
import 'react-linear-gradient-picker/dist/index.css';

export interface GradientPickerProps {
  palette: { color: string; offset: number }[];
  angle: number;
  onPaletteChange: (palette: { color: string; offset: number }[]) => void;
}

import { HexColorPicker } from 'react-colorful';
import ReactDOM from 'react-dom';

export default function GradientPicker({ palette, angle, onPaletteChange }: GradientPickerProps) {
  const [selectedStop, setSelectedStop] = React.useState<number | null>(null);
  const [popupPos, setPopupPos] = React.useState<{ left: number; top: number } | null>(null);

  // Ref to the gradient picker container
  const pickerRef = React.useRef<HTMLDivElement>(null);

  const gradient = `linear-gradient(${angle}deg, ${palette
    .map((stop) => `${stop.color} ${Math.round(stop.offset * 100)}%`)
    .join(', ')})`;

  // Render color stops for selection
  const stops = palette.map((stop, idx) => {
    const left = `${stop.offset * 100}%`;
    return (
      <div
        key={idx}
        style={{
          position: 'absolute',
          left,
          top: 12,
          transform: 'translate(-50%, 0)',
          zIndex: 2,
          cursor: 'pointer',
        }}
        onClick={(e) => {
          setSelectedStop(idx);
          // Calculate popup position relative to viewport
          if (pickerRef.current) {
            const rect = pickerRef.current.getBoundingClientRect();
            const stopLeft = rect.left + rect.width * stop.offset;
            const stopTop = rect.top + 40; // 40px below the picker
            setPopupPos({ left: stopLeft, top: stopTop });
          }
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: '2px solid #fff',
            boxShadow: '0 1px 6px rgba(0,0,0,0.15)',
            background: stop.color,
            outline: selectedStop === idx ? '2px solid #333' : undefined,
            transition: 'outline 0.15s',
          }}
        />
        {selectedStop === idx && popupPos && typeof window !== 'undefined'
          ? ReactDOM.createPortal(
              <>
                {/* Backdrop */}
                <div
                  style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 999,
                    background: 'rgba(0,0,0,0.08)',
                  }}
                  onClick={() => setSelectedStop(null)}
                />
                {/* Popup */}
                <div
                  style={{
                    position: 'fixed',
                    left: popupPos.left,
                    top: popupPos.top,
                    zIndex: 1000,
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                    padding: 12,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <HexColorPicker
                    color={stop.color}
                    onChange={(color) => {
                      const newPalette = palette.map((s, sidx) =>
                        sidx === idx ? { ...s, color } : s,
                      );
                      onPaletteChange(newPalette);
                    }}
                  />
                  <div style={{ textAlign: 'center', marginTop: 6 }}>
                    <button
                      style={{
                        fontSize: 12,
                        color: '#888',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: 2,
                      }}
                      onClick={() => setSelectedStop(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </>,
              document.body,
            )
          : null}
      </div>
    );
  });

  return (
    <div>
      <div style={{ width: 320, marginBottom: 8 }}>
        <RLGradientPicker
          width={320}
          paletteHeight={32}
          direction="vertical"
          palette={palette}
          onPaletteChange={onPaletteChange}
        />
      </div>
      {/* Custom color stop list below */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        {palette.map((stop, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '2px solid #fff',
                boxShadow: '0 1px 6px rgba(0,0,0,0.15)',
                background: stop.color,
                margin: '0 auto 4px auto',
                cursor: 'pointer',
                outline: selectedStop === idx ? '2px solid #333' : undefined,
                transition: 'outline 0.15s',
              }}
              onClick={() => setSelectedStop(idx)}
            />
            <div style={{ fontSize: 11 }}>{Math.round(stop.offset * 100)}%</div>
          </div>
        ))}
      </div>
      {selectedStop !== null && (
        <div style={{ margin: '0 0 16px 0', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
              padding: 12,
              zIndex: 10,
            }}
          >
            <HexColorPicker
              color={palette[selectedStop].color}
              onChange={(color) => {
                const newPalette = palette.map((s, sidx) =>
                  sidx === selectedStop ? { ...s, color } : s,
                );
                onPaletteChange(newPalette);
              }}
            />
            <div style={{ textAlign: 'center', marginTop: 6 }}>
              <button
                style={{
                  fontSize: 12,
                  color: '#888',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: 2,
                }}
                onClick={() => setSelectedStop(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            background: gradient,
            borderRadius: 12,
            padding: 4,
            display: 'inline-block',
            marginBottom: 8,
          }}
        >
          <textarea
            value={gradient}
            readOnly
            style={{
              width: 312,
              height: 60,
              borderRadius: 8,
              border: 'none',
              background: '#222',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              padding: 12,
              resize: 'none',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              textShadow: '0 1px 2px #0008',
              outline: 'none',
              display: 'block',
            }}
            onFocus={(e) => e.target.select()}
          />
        </div>
        <div style={{ fontSize: 12, color: '#333', marginTop: 4 }}>CSS code (click to copy):</div>
      </div>
    </div>
  );
}
