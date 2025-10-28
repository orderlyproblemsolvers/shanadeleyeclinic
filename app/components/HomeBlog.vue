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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <NuxtLink 
          v-for="post in posts" 
          :key="post.title" 
          :to="'/blog/' + post.slug"
          class="group block"
        >
          <article class="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="w-full h-48 overflow-hidden">
              <img 
                :src="post.image" 
                alt="Blog post image" 
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
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {{ post.excerpt }}
              </p>
              
              <span class="font-semibold text-[#7fc540] group-hover:text-[#6ab030] transition-colors duration-200">
                Read More &rarr;
              </span>
            </div>
          </article>
        </NuxtLink>

      </div>

      <div class="text-center mt-16">
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
import { ref } from 'vue'

interface Post {
  title: string
  category: string
  excerpt: string
  image: string
  slug: string
}

// Dummy data based on your provided document
const posts = ref<Post[]>([
  {
    title: '5 Signs You Might Need New Glasses (and Don’t Even Know It)',
    category: 'Eye Health Tips',
    excerpt: 'Been squinting at road signs or nursing frequent headaches? Your prescription may need a refresh...',
    image: '/img/shero.jpg',
    slug: '5-signs-you-need-new-glasses'
  },
  {
    title: 'Blue Light & Screen Time: Protecting Your Eyes in the Digital Age',
    category: 'Digital Life',
    excerpt: 'Between your laptop, phone, and TV, your eyes are working overtime. We break down the truth about blue light.',
    image: '/img/shero.jpg',
    slug: 'blue-light-and-screen-time'
  },
  {
    title: 'The Truth About Eye Drops: What You Should Really Know',
    category: 'Expert Advice',
    excerpt: 'Eye drops aren’t one-size-fits-all. Dr. Zephyr Alabegbe explains the difference between lubricating and medicated drops.',
    image: '/img/shero.jpg',
    slug: 'truth-about-eye-drops'
  }
])
</script>

<style scoped>
/* Scoped styles can be added here if needed. */
</style>