import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      accent: '#3b82f6', // Tailwind blue-500
      'accent-dark': '#a21caf', // Tailwind fuchsia-700
      // You can add more custom colors here
    },
  },
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // Custom rules/utilities can be added here
});
