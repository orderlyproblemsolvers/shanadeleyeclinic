<template>
  <div class="min-h-screen bg-gray-50 pt-20">
    <div class="bg-gradient-to-r from-[#7fc540] to-[#6ab030] text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p class="text-xl text-white/90">Expert insights and tips for better eye health</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div class="mb-8">
        <button @click="goBack" class="inline-flex items-center text-gray-600 hover:text-gray-900 font-semibold transition-colors text-sm">
          <UIcon name="i-lucide-chevron-left" class="w-4 h-4 mr-1" />
          Back
        </button>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse">
          <div class="bg-gray-200 rounded-xl h-96"></div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 text-lg">{{ error }}</p>
      </div>

      <div v-else-if="paginatedPosts.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="post in paginatedPosts" 
            :key="post.id" 
            :to="'/blog/' + post.slug"
            class="group block"
          >
            <article class="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div class="w-full h-48 overflow-hidden">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
              </div>
              
              <div class="p-6 flex-grow flex flex-col">
                <span class="text-sm font-semibold mb-2" style="color: #ff6900">
                  {{ post.category }}
                </span>
                
                <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#7fc540] transition-colors duration-200">
                  {{ post.title }}
                </h3>
                
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {{ post.excerpt }}
                </p>

                <div class="text-xs text-gray-500 mb-3">
                  {{ formatDate(post.created_at) }}
                </div>
                
                <span class="font-semibold text-[#7fc540] group-hover:text-[#6ab030] transition-colors duration-200 mt-auto">
                  Read More &rarr;
                </span>
              </div>
            </article>
          </NuxtLink>
        </div>

        <div v-if="totalPages > 1" class="mt-12 flex justify-between items-center">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            &larr; Previous
          </button>
          <span class="text-sm text-gray-700">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            Next &rarr;
          </button>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <p class="text-gray-600 text-lg">No blog posts available yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Define Post type based on composable
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
const router = useRouter() // For back button

const allPosts = ref<Post[]>([]) // Renamed from 'posts'
const loading = ref(true)
const error = ref('')

// --- FIX 2: Back Button Logic ---
const goBack = () => {
  router.back()
}

// --- FIX 4: Pagination Logic ---
const currentPage = ref(1)
const postsPerPage = 12 // Set to 10 as requested

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
    month: 'long',
    day: 'numeric'
  })
}

onMounted(async () => {
  try {
    // Fetch all posts and store them
    allPosts.value = await getPublishedPosts()
  } catch (err: any) {
    error.value = 'Failed to load blog posts'
    console.error(err)
  } finally {
    loading.value = false
  }
})

// Watch for page changes and scroll to top
watch(currentPage, () => {
  if (process.client) {
    window.scrollTo(0, 0)
  }
})
</script>