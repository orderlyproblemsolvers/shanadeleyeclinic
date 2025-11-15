<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
    <!-- Hero Header with Decorative Elements -->
    <div class="relative bg-gradient-to-br from-[#5a912d] via-[#6ab030] to-[#7fc540] text-white py-20 overflow-hidden">
      <!-- Decorative Background Shapes -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-6">
          <div class="w-1 h-16 bg-white rounded-full mr-4"></div>
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-2">Our Blog</h1>
            <p class="text-xl text-white/90">Expert insights and tips for better eye health</p>
          </div>
        </div>
      </div>
      
      <!-- Decorative Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fill-opacity="0.1"/>
          <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- Back Button -->
      <div class="mb-10">
        <button 
          class="group inline-flex items-center text-gray-600 hover:text-[#5a912d] font-semibold transition-all duration-300" 
          @click="goBack"
        >
          <div class="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#5a912d]/10 flex items-center justify-center mr-2 transition-all duration-300">
            <UIcon name="i-lucide-chevron-left" class="w-4 h-4" />
          </div>
          <span>Back</span>
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse">
          <div class="bg-gray-200 rounded-2xl h-96 shadow-sm"/>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <UIcon name="i-lucide-alert-circle" class="w-8 h-8 text-red-600" />
        </div>
        <p class="text-red-600 text-lg font-medium">{{ error }}</p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else-if="paginatedPosts.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="post in paginatedPosts" 
            :key="post.id" 
            :to="'/blog/' + post.slug"
            class="group block"
          >
            <article class="relative bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <!-- Gradient Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#5a912d]/0 to-[#7fc540]/0 group-hover:from-[#5a912d]/5 group-hover:to-[#7fc540]/5 transition-all duration-500 z-10 pointer-events-none"></div>
              
              <!-- Image Container -->
              <div class="relative w-full h-52 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
              </div>
              
              <!-- Content -->
              <div class="relative p-6 flex-grow flex flex-col z-20">
                <!-- Category Badge -->
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-fit">
                  {{ post.category }}
                </span>
                
                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5a912d] transition-colors duration-300 line-clamp-2">
                  {{ post.title }}
                </h3>
                
                <!-- Excerpt -->
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {{ post.excerpt }}
                </p>

                <!-- Footer -->
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div class="flex items-center text-xs text-gray-500">
                    <UIcon name="i-lucide-calendar" class="w-3.5 h-3.5 mr-1.5" />
                    <time>{{ formatDate(post.created_at) }}</time>
                  </div>
                  
                  <div class="flex items-center font-semibold text-[#5a912d] text-sm group-hover:translate-x-1 transition-transform duration-300">
                    <span>Read</span>
                    <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
              
              <!-- Bottom Accent -->
              <div class="h-1 bg-gradient-to-r from-[#5a912d] to-[#7fc540] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </article>
          </NuxtLink>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            :disabled="currentPage === 1"
            class="group flex items-center px-6 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#5a912d] hover:text-[#5a912d] hover:bg-[#5a912d]/5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700 disabled:hover:bg-white transition-all duration-300"
            @click="currentPage--"
          >
            <UIcon name="i-lucide-chevron-left" class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Previous
          </button>
          
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-700">
              Page <span class="text-[#5a912d] font-bold text-lg">{{ currentPage }}</span> of {{ totalPages }}
            </span>
          </div>
          
          <button
            :disabled="currentPage === totalPages"
            class="group flex items-center px-6 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#5a912d] hover:text-[#5a912d] hover:bg-[#5a912d]/5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700 disabled:hover:bg-white transition-all duration-300"
            @click="currentPage++"
          >
            Next
            <UIcon name="i-lucide-chevron-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No blog posts yet</h3>
        <p class="text-gray-600">Check back soon for expert eye care insights and tips.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Blog - Shanadel Eye Clinic',
  description: 'Explore our blog for expert insights, eye care tips, and the latest news in ophthalmology. Stay informed and keep your eyes healthy with Shanadel Eye Clinic.',
  ogTitle: 'Our Blog - Shanadel Eye Clinic',
  ogDescription: 'Explore our blog for expert insights, eye care tips, and the latest news in ophthalmology. Stay informed and keep your eyes healthy with Shanadel Eye Clinic.',
  ogImageAlt: 'Blog - Shanadel Eye Clinic',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.shanadeleyeclinicltd.com.ng/blog'
    },{
      rel: 'alternate',
      hreflang: 'en-ng',
      href: 'https://www.shanadeleyeclinicltd.com.ng/blog'
    },{
      rel: 'alternate',
      hreflang: 'en',
      href: 'https://www.shanadeleyeclinicltd.com.ng/blog'
    },
  ],
  meta: [
    {
      name: 'keywords',
      content: 'Shanadel Eye Clinic blog, eye care tips, ophthalmology news, eye health articles, vision care insights, eye clinic updates, eye health education, Shanadel blog posts'
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: `
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Shanadel Eye Clinic Blog",
        "url": "https://www.shanadeleyeclinicltd.com.ng/blog",
        "description": "Explore our blog for expert insights, eye care tips, and the latest news in ophthalmology.",
        "publisher": {
          "@type": "Organization",
          "name": "Shanadel Eye Clinic",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp"
          }
        }
      }
      `
    }
  ]
})

import { ref, onMounted, computed } from 'vue'

defineOgImageComponent('InfoPages', {
  title:'Our Blog - Shanadel Eye Clinic',
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

const allPosts = ref<Post[]>([])
const loading = ref(true)
const error = ref('')

const goBack = () => {
  router.back()
}

const currentPage = ref(1)
const postsPerPage = 12

const totalPages = computed(() => {
  return Math.ceil(allPosts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return allPosts.value.slice(start, end)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

onMounted(async () => {
  try {
    allPosts.value = await getPublishedPosts()
  } catch (err: any) {
    error.value = 'Failed to load blog posts'
    console.error(err)
  } finally {
    loading.value = false
  }
})

watch(currentPage, () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
</script>