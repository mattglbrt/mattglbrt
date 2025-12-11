// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattglbrt.com',
  adapter: netlify(),
  build: {
    // Inline CSS to eliminate render-blocking stylesheets
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});