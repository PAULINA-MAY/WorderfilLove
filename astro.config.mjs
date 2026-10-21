// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública provisional; cámbiala cuando conectes un dominio propio.
  site: 'https://wonderful-love.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});
