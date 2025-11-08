// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
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
    enabled: true },
   robots: {
    disallow: ['/admin']
  },
  
  linkChecker: {
    enabled: true
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
        { name: 'color-scheme', content: 'light' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { hid: 'description', name: 'description', content: 'Shanadel Eye Clinic - Quality Eye Care Services' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap' },
      ],
    },


  },
    nitro: {
    preset: 'netlify',
     compressPublicAssets: true,
    minify: true
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