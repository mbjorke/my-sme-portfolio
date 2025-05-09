import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class', // or 'media'
    }),
  ],
  // ...other config
});
