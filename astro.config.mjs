// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Pages: deploy static `dist/` output (no Workers runtime needed).
  output: 'static',

  adapter: cloudflare(),
});