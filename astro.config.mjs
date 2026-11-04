import { defineConfig } from 'astro/config';

// Static marketing site. Square booking is an outbound link for now.
// When a backend is added later (Parker pattern), switch to output: 'server' + @astrojs/vercel.
export default defineConfig({
  site: 'https://kennesaw-barber-shop.vercel.app',
  output: 'static',
  redirects: { '/appointments': '/book' },
});
