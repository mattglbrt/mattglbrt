// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
import remarkDirective from 'remark-directive';
import remarkWideImage from './src/plugins/remark-wide-image';
import remarkGallery from './src/plugins/remark-gallery';
import { remarkCallout } from './src/plugins/remark-callout.mjs';
import { settings } from './src/data/settings';

// https://astro.build/config
export default defineConfig({
  site: settings.site.url,
  markdown: {
    remarkPlugins: [remarkDirective, remarkWideImage, remarkGallery, remarkCallout],
  },
  integrations: [sitemap(), icon(), mdx()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
      }
    }
  },
  build: {
    inlineStylesheets: 'auto',
  },
});