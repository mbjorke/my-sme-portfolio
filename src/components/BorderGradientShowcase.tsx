import React from 'react';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from './ThemeProvider';

export default function BorderGradientShowcase() {
  const { theme } = useTheme();
  // previewTheme: null = use global, 'light'/'dark' = local override
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | null>(null);

  // Button toggles between 'light' and 'dark' preview override
  const isLightPreview = previewTheme === 'light' || (previewTheme === null && theme === 'light');
  const nextPreviewTheme = isLightPreview ? 'dark' : 'light';

  // Debug: log theme state changes
  useEffect(() => {
    console.log('[BorderGradientShowcase] previewTheme:', previewTheme, 'global theme:', theme);
  }, [previewTheme, theme]);

  function handlePreviewToggle() {
    setPreviewTheme(isLightPreview ? 'dark' : 'light');
    console.log(
      '[BorderGradientShowcase] Button clicked, toggling previewTheme from',
      previewTheme,
      'to',
      isLightPreview ? 'dark' : 'light',
    );
  }

  return (
    <main className="flex flex-col gap-8 p-8">
      <div className="flex justify-end mb-2">
        <button
          className="px-3 py-1 rounded-xl border text-sm font-medium bg-background hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={handlePreviewToggle}
          aria-label="Toggle showcase theme"
        >
          {isLightPreview ? '🌙 Dark Preview' : '🌞 Light Preview'}
        </button>
      </div>
      <div className={(previewTheme ?? theme) === 'dark' ? 'dark-preview' : 'light-preview'}>
        <h1 className="text-2xl font-bold mb-4">UnoCSS Border Gradient Showcase</h1>
        <div className="text-lg font-bold mb-2 text-center w-full">Vivid & Visible Borders</div>
        <div className="flex flex-row gap-4 flex-wrap justify-center mb-8">
          {/* Neon Glow Border */}
          <div
            className="p-[6px] rounded-2xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-300 w-72 overflow-hidden"
            style={{ boxShadow: '0 0 24px 4px #f472b6, 0 0 40px 8px #06b6d4' }}
          >
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">Neon Glow Border</div>
              <div className="text-gray-500 text-xs">Fuchsia/Cyan/Yellow + Glow</div>
            </div>
          </div>
          {/* Ultra-Bold Rainbow Border */}
          <div className="p-[12px] rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-fuchsia-500 w-72 overflow-hidden animate-gradient-x">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">Ultra-Bold Rainbow Border</div>
              <div className="text-gray-500 text-xs">12px, animated gradient</div>
            </div>
          </div>
          {/* Animated Moving Gradient Border */}
          <div className="p-[6px] rounded-2xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 w-72 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">Animated Moving Gradient</div>
              <div className="text-gray-500 text-xs">Hue-rotating border</div>
            </div>
          </div>
          {/* High-Contrast Border */}
          <div className="p-[8px] rounded-2xl bg-gradient-to-r from-yellow-400 via-black to-cyan-400 w-72 overflow-hidden">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">High-Contrast Border</div>
              <div className="text-gray-500 text-xs">Yellow/Black/Cyan</div>
            </div>
          </div>
          {/* Multi-Layered Border */}
          <div className="relative w-72">
            <div className="absolute inset-0 rounded-2xl p-[8px] bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-300 z-0"></div>
            <div className="absolute inset-2 rounded-2xl p-[4px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 z-10"></div>
            <div className="relative bg-background text-foreground text-center p-6 rounded-xl shadow-xl z-20">
              <div className="font-bold mb-1 text-base">Multi-Layered Border</div>
              <div className="text-gray-500 text-xs">Double gradient border</div>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold mb-2 text-center w-full">Animated 1px Borders</div>
        {/* Animated 1px Border Variants */}
        <div className="flex flex-row gap-4 flex-wrap justify-center mb-8">
          {/* Cool Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Cool: cyan-400 → blue-500 → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Vivid Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Vivid: pink-500 → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Accent Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Accent: accent → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Subtle Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Subtle: gray-300 → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Warm Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Warm: orange-400 → yellow-300 → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold mb-2 text-center w-full">Cool Top-Left Glow Variants</div>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {/* 2px Border (default) */}
            {/* Cool */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Cool: cyan-400 → blue-500 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Vivid */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Vivid: pink-500 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-pink-500 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Accent (bolt.new style) */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Accent: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Subtle */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Subtle: gray-300 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-gray-300 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Warm */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Warm: orange-400 → yellow-300 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 flex-wrap justify-center mt-6">
            {/* 1px Border */}
            {/* Cool */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Cool: cyan-400 → blue-500 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Vivid */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Vivid: pink-500 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-pink-500 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Accent (bolt.new style) */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Accent: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Subtle */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Subtle: gray-300 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-gray-300 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Warm */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Warm: orange-400 → yellow-300 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-8 text-center">
          Toggle your site’s dark mode to test how each gradient looks in both themes!
        </div>
        <div className="text-lg font-bold mb-2 text-center w-full">Animated 1px Borders</div>
        {/* Animated 1px Border Variants */}
        <div className="flex flex-row gap-4 flex-wrap justify-center mb-8">
          {/* Cool Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Cool: cyan-400 → blue-500 → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Vivid Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Vivid: pink-500 → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Accent Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Accent: accent → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Subtle Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Subtle: gray-300 → transparent → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
          {/* Warm Animated */}
          <div className="p-px rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden animate-gradient-border-hue">
            <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
              <div className="font-bold mb-1 text-base">
                Warm: orange-400 → yellow-300 → transparent
              </div>
              <div className="text-gray-500 text-xs">Animated 1px Border</div>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold mb-2 text-center w-full">Cool Top-Left Glow Variants</div>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {/* 2px Border (default) */}
            {/* Cool */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Cool: cyan-400 → blue-500 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Vivid */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Vivid: pink-500 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-pink-500 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Accent (bolt.new style) */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Accent: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Subtle */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Subtle: gray-300 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-gray-300 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Warm */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Warm: orange-400 → yellow-300 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
            {/* Bolt.new (accent) */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Bolt.new: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">2px Border</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 flex-wrap justify-center mt-6">
            {/* 1px Border */}
            {/* Cool */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Cool: cyan-400 → blue-500 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Vivid */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-pink-500 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Vivid: pink-500 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-pink-500 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Accent (bolt.new style) */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Accent: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Subtle */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-gray-300 via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Subtle: gray-300 → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-gray-300 via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Warm */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Warm: orange-400 → yellow-300 → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-orange-400 via-yellow-300 to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
            {/* Bolt.new (accent) */}
            <div className="p-px rounded-2xl bg-gradient-to-br from-accent via-transparent to-transparent w-64 overflow-hidden">
              <div className="bg-background text-foreground text-center p-6 rounded-xl shadow-xl">
                <div className="font-bold mb-1 text-base">
                  Bolt.new: accent → transparent → transparent
                </div>
                <div className="text-gray-500 text-xs">
                  bg-gradient-to-br from-accent via-transparent to-transparent
                </div>
                <div className="text-xs mt-2">1px Border</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
