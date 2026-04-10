<template>
  <section class="bg-gray-50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7fc540]/10 border border-[#7fc540]/20 rounded-full text-xs font-medium text-gray-600 mb-4">
          <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full"></span>
          From Our Blog
        </span>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          See. Learn. Live Better.
        </h2>
        <p class="text-base text-gray-500 leading-relaxed">
          Expert insights and real-world tips to help you understand and protect your vision.
        </p>
      </div>

      <!-- Loading -->
      <div v-if="status === 'pending'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="animate-pulse bg-white rounded-2xl overflow-hidden border border-gray-100">
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

      <!-- Error -->
      <div v-else-if="error" class="text-center py-16">
        <div class="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
          <UIcon name="i-lucide-alert-circle" class="text-sm" />
          Failed to load posts. Please try again later.
        </div>
      </div>

      <!-- Posts grid -->
      <div v-else-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="'/blog/' + post.slug"
          class="group block"
        >
          <article class="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">

            <!-- Image -->
            <div class="w-full h-44 overflow-hidden bg-gray-100 shrink-0">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col grow gap-2">
              <span class="text-xs font-semibold text-orange-500">
                {{ post.category }}
              </span>

              <h3 class="text-base font-semibold text-gray-900 group-hover:text-[#7fc540] transition-colors duration-200 line-clamp-2 leading-snug">
                {{ post.title }}
              </h3>

              <p class="text-sm text-gray-500 leading-relaxed line-clamp-3 grow">
                {{ post.excerpt }}
              </p>

              <span class="inline-flex items-center gap-1 text-sm font-medium text-[#7fc540] group-hover:text-[#6ab030] transition-colors duration-200 mt-1">
                Read more
                <UIcon name="i-lucide-arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </article>
        </NuxtLink>
      </div>

      <!-- Empty -->
      <div v-else class="text-center py-16">
        <p class="text-sm text-gray-400">No blog posts published yet. Check back soon.</p>
      </div>

      <!-- CTA -->
      <div v-if="posts && posts.length > 0" class="text-center mt-12">
        <NuxtLink
          to="/blog"
          class="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#7fc540] hover:bg-[#6ab030] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md"
        >
          View All Articles
          <UIcon name="i-lucide-arrow-right" class="text-xs group-hover:translate-x-0.5 transition-transform" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from '~/app/types/blog'

const { getPublishedPosts } = useBlog()

const { data: posts, status, error } = await useAsyncData<Post[]>(
  'home-blog-posts',
  () => getPublishedPosts(3),
  { default: () => [] }
)
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