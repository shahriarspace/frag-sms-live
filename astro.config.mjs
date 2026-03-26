import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Brand domain from env var (default: fragsms.de)
const brandDomain = process.env.PUBLIC_BRAND_DOMAIN || 'fragsms.de';

export default defineConfig({
  site: 'https://' + brandDomain,
  output: 'static',
  integrations: [tailwind()],
  build: {
    // GitHub Pages compatible output
    format: 'directory',
  },
});
