import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.evevps.com',
  trailingSlash: 'never',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: { en: 'en', es: 'es', fr: 'fr', de: 'de', id: 'id', ru: 'ru', it: 'it' }
    }
  })]
});
