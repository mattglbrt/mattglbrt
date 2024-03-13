import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://mattglbrt.com',
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: netlify()
});