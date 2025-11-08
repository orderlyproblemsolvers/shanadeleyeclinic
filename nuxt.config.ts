// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxtjs/supabase',
    '@nuxt/icon',
    '@nuxtjs/seo'
  ],
  ogImage: {
    runtimeCacheStorage: true,
    defaults: {
      component: 'BlogOgImage',
      background: 'linear-gradient(135deg, #009739, #ffffff, #ff7900)', // green-white-orange
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' }
      ]
    }
  },
   runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
  supabase: {
    redirect: false
  }
})