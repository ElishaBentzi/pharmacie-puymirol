import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    sitemap()
  ],
  site: 'https://pharmacie-puymirol.fr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
