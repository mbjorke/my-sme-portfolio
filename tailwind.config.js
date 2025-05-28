/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const { fontFamily } = require('tailwindcss/defaultTheme');
const tailwindcssAnimate = require('tailwindcss-animate');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        background: '#010e14',
        foreground: '#f5f0e6',
        white: '#f5f0e6',
        primary: {
          DEFAULT: '#044957',
          foreground: '#f5f0e6',
          50: '#e6f0f2',
          100: '#b3d1d8',
          200: '#80b3bf',
          300: '#4d94a6',
          400: '#1a758d',
          500: '#005674',
          600: '#00445c',
          700: '#003344',
          800: '#00222c',
          900: '#001114',
        },
        secondary: {
          DEFAULT: '#e0f2fe',
          foreground: '#1a1a1a',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        card: {
          light: '#ffffff',
          dark: '#010e14',
          foreground: '#1a1a1a',
          DEFAULT: '#f9fafb',
        },

        // Status colors
        destructive: {
          DEFAULT: '#ef4444' /* red-500 */,
          foreground: '#ffffff',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        success: {
          DEFAULT: '#10b981' /* emerald-500 */,
          foreground: '#ffffff',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        warning: {
          DEFAULT: '#f59e0b' /* amber-500 */,
          foreground: '#000000',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        info: {
          DEFAULT: '#b3d1d8' /* blue-500 */,
          foreground: '#ffffff',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },

        // UI Element Colors
        border: {
          DEFAULT: '#e5e7eb' /* gray-200 */,
          foreground: '#1f2937' /* gray-800 */,
        },
        input: {
          DEFAULT: '#e5e7eb' /* gray-200 */,
          foreground: '#1f2937' /* gray-800 */,
        },
        ring: {
          DEFAULT: '#044957' /* primary-500 */,
          foreground: '#f5f0e6' /* white/foreground */,
        },

        // Accent colors (used in forms)
        accent: {
          DEFAULT: '#2dd4bf' /* teal */,
          foreground: '#ffffff',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },

        // Chart colors
        chart: {
          1: '#3b82f6' /* blue-500 */,
          2: '#10b981' /* emerald-500 */,
          3: '#f59e0b' /* amber-500 */,
          4: '#ef4444' /* red-500 */,
          5: '#8b5cf6' /* violet-500 */,
        },

        // Neutral colors (shades of gray)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Text colors
        muted: {
          DEFAULT: '#d1d5db' /* gray-400 */,
          foreground: '#d1d5db' /* gray-500 */,
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate, typography, forms, require('@tailwindcss/container-queries')],
};
