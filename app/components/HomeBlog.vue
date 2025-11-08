<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See. Learn. Live Better.
        </h2>
        <p class="text-lg text-gray-600">
          Expert insights, simple explanations, and real-world tips to help you understand and protect your vision.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="animate-pulse">
          <div class="bg-gray-200 rounded-xl h-80"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
      </div>

      <!-- Posts Grid -->
      <div v-else-if="posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="post in posts" 
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
              
              <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#7fc540] transition-colors duration-200 line-clamp-2">
                {{ post.title }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {{ truncateExcerpt(post.excerpt) }}
              </p>
              
              <span class="font-semibold text-[#7fc540] group-hover:text-[#6ab030] transition-colors duration-200">
                Read More &rarr;
              </span>
            </div>
          </article>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600 text-lg">No blog posts available yet.</p>
      </div>

      <!-- CTA Button -->
      <div v-if="posts.length > 0" class="text-center mt-16">
        <NuxtLink
          to="/blog"
          class="inline-block px-8 py-4 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-base md:text-lg rounded-lg"
        >
          Read More on Our Blog
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getPublishedPosts } = useBlog()

const posts = ref<Post[]>([])
const loading = ref(true)
const error = ref('')

// Truncate excerpt to max 150 characters
const truncateExcerpt = (text: string, maxLength: number = 150): string => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

onMounted(async () => {
  try {
    posts.value = await getPublishedPosts(3) // Get latest 3 posts
  } catch (err: any) {
    error.value = 'Failed to load blog posts'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>