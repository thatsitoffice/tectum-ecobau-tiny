// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Cloudflare Workers/Pages Functions output (Wrangler compatible).
  output: 'server',

  adapter: cloudflare(),
});