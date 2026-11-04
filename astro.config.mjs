import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Server output (Parker pattern): marketing pages opt into prerendering (`export const prerender = true`),
// /book, admin pages, and /api routes render on demand as Vercel Node functions.
// `site` must match the live host or Astro checkOrigin blocks admin form POSTs.
export default defineConfig({
  site: 'https://kennesaw-barber-shop.vercel.app',
  output: 'server',
  redirects: { '/appointments': '/book' },
  adapter: vercel({ maxDuration: 30 }),
  security: { checkOrigin: true },
});
