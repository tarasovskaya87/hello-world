import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'ООО Инженерные Люди',

      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['./public/css/main.css'],

  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      }
    }
  },

  plugins: [
    './plugins/polyfills.client-and-server.js',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        },
      },
    },
  },
})
