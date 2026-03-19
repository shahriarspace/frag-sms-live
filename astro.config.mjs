import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shahriarspace.github.io',
  base: '/frag-sms-live',
  output: 'static',
  build: {
    // GitHub Pages compatible output
    format: 'directory',
  },
});
