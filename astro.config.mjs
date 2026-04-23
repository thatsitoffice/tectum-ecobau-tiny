// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Cloudflare Pages (static hosting): outputs `dist/index.html`.
	output: 'static',
});