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
        { 
          name: 'keywords', 
          content: 'Shanadel Eye Clinic, Eye clinic Abuja, Optometrist in Abuja, Eye clinic Wuye, Best eye clinic Abuja, Comprehensive eye exam Abuja, Vision care Nigeria, Prescription glasses Abuja, Designer frames Abuja, Contact lenses Abuja, Glaucoma screening Abuja, Cataract evaluation, Pediatric optometry, Eye test near me, Optical services Wuye, Eye health consultation, Affordable glasses Abuja, Computer vision treatment, Dry eye therapy, Astigmatism correction, Myopia control, Reading glasses, Progressive lenses, Photochromic lenses, Anti-reflective glasses, Eye clinic Triple H Plaza, Eye infection treatment, Emergency eye care Abuja, Optical center Abuja, Kids eye test Abuja, Corporate eye tests, Vision therapy, Visual field testing, Refractive error correction, Retinal imaging, Optician in Wuye, Designer sunglasses Abuja, Eye pressure check, Diabetic eye screening, Macular degeneration check, Red eye treatment, Children\'s eye doctor, Family eye care Abuja, Eye care professionals Abuja, Prescription sunglasses, UV protection lenses, Blue light blocking glasses, Low vision aids, Optometry services FCT, Shanadel optical services' 
        }
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