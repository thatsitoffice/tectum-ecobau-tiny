// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Cloudflare Pages: deploy static `dist/` output (no Workers runtime needed).
	output: 'static',
});