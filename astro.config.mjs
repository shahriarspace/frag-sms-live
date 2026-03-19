import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fragsms.de',
  output: 'static',
  build: {
    // GitHub Pages compatible output
    format: 'directory',
  },
});
