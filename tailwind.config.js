/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7A5FFF',    // Soft Purple
          foreground: '#fff',
        },
        secondary: {
          DEFAULT: '#00D1B2',    // Teal
          foreground: '#fff',
        },
        accent: {
          DEFAULT: '#FF6B6B',     // Coral
          foreground: '#fff',
        },
        background: {
          DEFAULT: '#18181b',     // Dark background
          light: '#fff',          // Light background
        },
        'muted-foreground': '#a1a1aa',
        dark: {
          DEFAULT: '#0A0A0C',      // Dark background
          surface: '#18181B',      // Dark surface
          hover: '#27272A',        // Dark hover state
        },
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      letterSpacing: {
        tightest: '-0.02em',  // -2
      },
      lineHeight: {
        relaxed: '1.4',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'subtle-dark': '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}