import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { Markdown } from '@astro/types';


export default defineConfig({
   site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap()],
  renderers: [Markdown],
});