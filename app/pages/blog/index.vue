<template>
  <div class="min-h-screen bg-gray-50 pt-20">

    <div class="relative bg-gradient-to-br from-[#3d6b1e] via-[#5a912d] to-[#7fc540] text-white py-16 overflow-hidden">
      <div aria-hidden="true" class="absolute top-0 right-0 w-80 h-80 bg-white/8 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 rounded-full text-xs font-medium mb-5">
          <span class="w-1.5 h-1.5 bg-white rounded-full" />
          Shanadel Eye Clinic
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-3 leading-tight">Our Blog</h1>
        <p class="text-base text-white/80 max-w-xl">Expert insights and practical tips for better eye health.</p>
      </div>

      <div class="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block">
          <path d="M0 60L1440 60L1440 30C1200 55 960 65 720 55C480 45 240 15 0 30Z" fill="#f9fafb"/>
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <button
        class="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#5a912d] font-medium transition-colors mb-10"
        @click="goBack"
      >
        <div class="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-[#5a912d]/10 flex items-center justify-center transition-colors">
          <UIcon name="i-lucide-chevron-left" class="text-sm" aria-hidden="true" />
        </div>
        Back
      </button>

      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-white rounded-2xl overflow-hidden border border-gray-100">
          <div class="bg-gray-200 h-48 w-full" />
          <div class="p-5 space-y-3">
            <div class="h-3 bg-gray-200 rounded w-1/4" />
            <div class="h-4 bg-gray-200 rounded w-3/4" />
            <div class="h-4 bg-gray-200 rounded w-1/2" />
            <div class="space-y-2 pt-1">
              <div class="h-3 bg-gray-100 rounded" />
              <div class="h-3 bg-gray-100 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <div class="inline-flex items-center justify-center w-14 h-14 bg-red-50 border border-red-100 rounded-2xl mb-4">
          <UIcon name="i-lucide-alert-circle" class="text-red-500 text-xl" aria-hidden="true" />
        </div>
        <p class="text-sm font-medium text-red-500 mb-4">Failed to load posts. Please try again later.</p>
        <button 
          @click="refresh()"
          class="px-4 py-2 bg-[#5a912d] text-white rounded-lg text-sm font-medium hover:bg-[#4a7d24] transition-colors"
        >
          Try Again
        </button>
      </div>

      <div v-else-if="!allPosts || allPosts.length === 0" class="text-center py-24">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-5">
          <UIcon name="i-lucide-newspaper" class="text-gray-400 text-2xl" aria-hidden="true" />
        </div>
        <h3 class="text-base font-semibold text-gray-800 mb-1">No posts yet</h3>
        <p class="text-sm text-gray-400">Check back soon for expert eye care insights and tips.</p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in paginatedPosts"
            :key="post.id"
            :to="'/blog/' + post.slug"
            class="group block"
          >
            <article class="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">

              <div class="relative w-full h-48 overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  :src="post.image"
                  :alt="post.title"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              <div class="p-5 flex flex-col flex-grow gap-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100 w-fit">
                  {{ post.category }}
                </span>

                <h3 class="text-base font-semibold text-gray-900 group-hover:text-[#5a912d] transition-colors duration-200 line-clamp-2 leading-snug">
                  {{ post.title }}
                </h3>

                <p class="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-grow">
                  {{ post.excerpt }}
                </p>

                <div class="flex items-center justify-between pt-3 mt-1 border-t border-gray-100">
                  <div class="flex items-center gap-1.5 text-xs text-gray-400">
                    <UIcon name="i-lucide-calendar" class="text-xs" aria-hidden="true" />
                    <time>{{ formatDate(post.created_at) }}</time>
                  </div>
                  <span class="inline-flex items-center gap-1 text-xs font-medium text-[#5a912d] group-hover:translate-x-0.5 transition-transform duration-200">
                    Read more
                    <UIcon name="i-lucide-arrow-right" class="text-xs" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div class="h-0.5 bg-gradient-to-r from-[#5a912d] to-[#7fc540] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          </NuxtLink>
        </div>

        <div v-if="totalPages > 1" class="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            :disabled="currentPage === 1"
            class="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-[#5a912d] hover:text-[#5a912d] hover:bg-[#5a912d]/4 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            @click="currentPage--"
          >
            <UIcon name="i-lucide-chevron-left" class="text-sm" aria-hidden="true" />
            Previous
          </button>

          <span class="text-sm text-gray-500">
            Page <span class="text-[#5a912d] font-semibold">{{ currentPage }}</span> of {{ totalPages }}
          </span>

          <button
            :disabled="currentPage === totalPages"
            class="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-[#5a912d] hover:text-[#5a912d] hover:bg-[#5a912d]/4 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            @click="currentPage++"
          >
            Next
            <UIcon name="i-lucide-chevron-right" class="text-sm" aria-hidden="true" />
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Strong SEO Meta
useSeoMeta({
  title: 'Blog — Shanadel Eye Clinic',
  description: 'Explore expert insights, eye care tips, and the latest in ophthalmology from the team at Shanadel Eye Clinic, Abuja.',
  ogTitle: 'Blog — Shanadel Eye Clinic | Expert Eye Care Tips',
  ogDescription: 'Expert insights, eye care tips, and the latest in ophthalmology from Shanadel Eye Clinic. Read our latest articles to maintain healthy vision.',
  ogImage: 'https://www.shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp',
  ogImageAlt: 'Blog — Shanadel Eye Clinic',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://www.shanadeleyeclinicltd.com.ng/blog' },
    { rel: 'alternate', hreflang: 'en-ng', href: 'https://www.shanadeleyeclinicltd.com.ng/blog' },
    { rel: 'alternate', hreflang: 'en', href: 'https://www.shanadeleyeclinicltd.com.ng/blog' },
  ],
  meta: [
    { name: 'keywords', content: 'Shanadel Eye Clinic blog, eye care tips, ophthalmology, vision care, eye health, Abuja eye clinic, glaucoma, cataract' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Shanadel Eye Clinic Blog',
        url: 'https://www.shanadeleyeclinicltd.com.ng/blog',
        description: 'Expert insights, eye care tips, and the latest news in ophthalmology.',
        publisher: {
          '@type': 'Organization',
          name: 'Shanadel Eye Clinic',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp',
          },
        },
      }),
    },
  ],
})

interface Post {
  id: string
  slug: string
  title: string
  category: string
  created_at: string
  content: string
  image: string
  excerpt: string
  published: boolean
}

const { getPublishedPosts } = useBlog()
const router = useRouter()

// ✅ FIX: Use useAsyncData without lazy option for consistent behavior
// Data is fetched server-side for SEO and blocks navigation on client for reliable rendering
const { data: allPosts, pending, error, refresh } = useAsyncData(
  'blog-posts-list',
  () => getPublishedPosts(),
  {

    default: () => [] as Post[]
  }
)


const goBack = () => router.back()

const currentPage = ref(1)
const postsPerPage = 12

const totalPages = computed(() => Math.ceil((allPosts.value?.length ?? 0) / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return (allPosts.value ?? []).slice(start, start + postsPerPage)
})

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

// Reset to page 1 if the total pages decreases below current page
watch(totalPages, (newTotal) => {
  if (currentPage.value > newTotal) {
    currentPage.value = Math.max(1, newTotal)
  }
})

// Smooth scroll to top on page change
watch(currentPage, () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
</script>