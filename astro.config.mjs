import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fragsms.de',
  output: 'static',
  integrations: [tailwind()],
  build: {
    // GitHub Pages compatible output
    format: 'directory',
  },
});
