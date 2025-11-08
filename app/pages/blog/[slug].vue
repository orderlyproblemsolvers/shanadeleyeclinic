<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-12">
    <div v-if="loading" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="animate-pulse space-y-4">
        <div class="h-8 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        <div class="h-64 bg-gray-200 rounded-xl"></div>
      </div>
    </div>

    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6">
        <p class="text-red-800">Error loading post: {{ error.message }}</p>
      </div>
    </div>

    <article v-else-if="post" class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Back Button with Enhanced Styling -->
        <div class="flex flex-wrap items-center justify-between mb-8">
          <NuxtLink 
            to="/blog" 
            class="group inline-flex items-center text-[#5a912d] hover:text-[#487524] font-semibold transition-all duration-300"
          >
            <div class="w-8 h-8 rounded-full bg-[#5a912d]/10 group-hover:bg-[#5a912d]/20 flex items-center justify-center mr-2 transition-all duration-300">
              <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
            </div>
            <span>Back to Blog</span>
          </NuxtLink>
        </div>
        
        <!-- Category Badge with Enhanced Design -->
        <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md">
          {{ post.category }}
        </span>

        <!-- Title with Gradient Underline -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {{ post.title }}
        </h1>
        <div class="w-24 h-1.5 bg-gradient-to-r from-[#5a912d] to-[#7fc540] rounded-full mb-8"></div>

        <!-- Meta Information with Icons -->
        <div class="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-12">
          <div class="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <UIcon name="i-lucide-calendar" class="w-4 h-4 mr-2 text-[#5a912d]" />
            <time :datetime="post.created_at">{{ formatDate(post.created_at) }}</time>
          </div>
          <div class="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <UIcon name="i-lucide-clock" class="w-4 h-4 mr-2 text-[#5a912d]" />
            <span>{{ readingTime }} min read</span>
          </div>
        </div>

        <!-- Hero Image with Creative Framing -->
        <div class="relative mb-16">
          <!-- Decorative Background Shapes -->
          <div class="absolute -inset-4 bg-gradient-to-br from-[#5a912d]/10 via-[#7fc540]/5 to-orange-500/10 rounded-3xl blur-2xl"></div>
          <div class="absolute -top-8 -right-8 w-72 h-72 bg-[#5a912d]/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          
          <!-- Image Container with Border and Shadow -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#5a912d] to-[#7fc540] rounded-2xl transform rotate-1"></div>
            <div class="relative bg-white p-2 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div class="w-full h-64 sm:h-96 rounded-xl overflow-hidden">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                >
              </div>
            </div>
          </div>
          
          <!-- Decorative Corner Elements -->
          <div class="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#5a912d] rounded-tl-3xl"></div>
          <div class="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-orange-500 rounded-br-3xl"></div>
        </div>

        <!-- Article Content with Enhanced Typography -->
        <div 
          class="prose prose-lg prose-clinic max-w-none mb-16 bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
          v-html="formattedContent" 
        />

        <!-- Share Section with Modern Design -->
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200">
          <div class="flex items-center mb-6">
            <div class="w-1 h-8 bg-gradient-to-b from-[#5a912d] to-[#7fc540] rounded-full mr-4"></div>
            <h2 class="text-xl font-bold text-gray-900">Share this article</h2>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <button
              aria-label="Share on Twitter"
              class="group relative w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:text-white hover:bg-[#1DA1F2] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
              @click="shareOnTwitter"
            >
              <UIcon name="i-lucide-twitter" class="w-5 h-5 relative z-10" />
              <div class="absolute inset-0 bg-[#1DA1F2] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              aria-label="Share on Facebook"
              class="group relative w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:text-white hover:bg-[#4267B2] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
              @click="shareOnFacebook"
            >
              <UIcon name="i-lucide-facebook" class="w-5 h-5 relative z-10" />
              <div class="absolute inset-0 bg-[#4267B2] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              aria-label="Share on LinkedIn"
              class="group relative w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:text-white hover:bg-[#0077B5] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
              @click="shareOnLinkedIn"
            >
              <UIcon name="i-lucide-linkedin" class="w-5 h-5 relative z-10" />
              <div class="absolute inset-0 bg-[#0077B5] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              aria-label="Copy link to clipboard"
              class="group relative w-12 h-12 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:text-white hover:bg-[#5a912d] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
              @click="copyLink"
            >
              <UIcon :name="linkCopied ? 'i-lucide-check' : 'i-lucide-link'" class="w-5 h-5 relative z-10" />
              <div class="absolute inset-0 bg-[#5a912d] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div 
              v-if="linkCopied" 
              class="mt-4 flex items-center text-sm text-[#5a912d] font-medium"
              aria-live="polite"
            >
              <UIcon name="i-lucide-check-circle" class="w-4 h-4 mr-2" />
              Link copied to clipboard!
            </div>
          </transition>
        </div>
      </div>
      
      <!-- Recent Posts Section with Card Design -->
      <div v-if="recentPosts.length > 0" class="mt-20 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center mb-10">
            <div class="w-1 h-10 bg-gradient-to-b from-[#5a912d] to-[#7fc540] rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold text-gray-900">Continue Reading</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NuxtLink
              v-for="(recent, index) in recentPosts"
              :key="recent.id"
              :to="`/blog/${recent.slug}`"
              class="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <!-- Gradient Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#5a912d]/0 to-[#7fc540]/0 group-hover:from-[#5a912d]/5 group-hover:to-[#7fc540]/5 transition-all duration-500 z-10 pointer-events-none"></div>
              
              <!-- Card Content -->
              <div class="relative p-6 z-20">
                <!-- Decorative Number -->
                <div class="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#5a912d] to-[#7fc540] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {{ index + 1 }}
                </div>
                
                <h3 class="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#5a912d] transition-colors duration-300 line-clamp-2">
                  {{ recent.title }}
                </h3>
                
                <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                  {{ recent.excerpt }}
                </p>
                
                <div class="flex items-center text-[#5a912d] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read more</span>
                  <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-2" />
                </div>
              </div>
              
              <!-- Bottom Border Accent -->
              <div class="h-1 bg-gradient-to-r from-[#5a912d] to-[#7fc540] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const { getPostBySlug, getPublishedPosts } = useBlog() 
const slug = route.params.slug as string

const { data: post, pending: loading, error } = await useAsyncData(
  `post-${slug}`, 
  async () => {
    const fetchedPost = await getPostBySlug(slug)
    if (!fetchedPost) {
      throw createError({ statusCode: 404, statusMessage: 'Post not found' })
    }
    return fetchedPost as Post
  }
)

defineOgImageComponent('BlogPost', {
  title: computed(() => post.value?.title ? `${post.value.title}` : 'Blog Post | Shanadel Eye Clinic'),
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

const recentPosts = ref<Post[]>([]) 
const linkCopied = ref(false)
const postUrl = ref('')

const readingTime = computed(() => {
  if (!post.value || !post.value.content) return 0
  const text = post.value.content.replace(/<[^>]*>?/gm, '')
  const wordsPerMinute = 200
  const words = text.split(/\s+/).filter(Boolean).length 
  return Math.ceil(words / wordsPerMinute)
})

const formattedContent = computed(() => {
  if (!post.value) return ''
  return post.value.content
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

async function fetchRecentPosts() {
  if (!post.value) return 
  try {
    const allRecentPosts = await getPublishedPosts(4) 
    const otherPosts = allRecentPosts.filter(p => p.id !== post.value!.id)
    recentPosts.value = otherPosts.slice(0, 3)
  } catch (err) {
    console.error("Failed to fetch recent posts:", err)
  }
}

const shareOnTwitter = () => {
  const text = encodeURIComponent(post.value?.title || '')
  window.open(`https://twitter.com/intent/tweet?url=${postUrl.value}&text=${text}`, '_blank')
}
const shareOnFacebook = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl.value}`, '_blank')
}
const shareOnLinkedIn = () => {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl.value}`, '_blank')
}
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(postUrl.value)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

onMounted(() => {
  postUrl.value = window.location.href 
  fetchRecentPosts()
})

if (post.value) {
  const pageTitle = `${post.value.title} | Shanadel Eye Clinic`
  const pageDesc = post.value.excerpt || 'Read this article from Shanadel Eye Clinic.'
  const pageImage = post.value.image || 'https://shanadel.com/default-og-image.jpg'
  const pageUrl = `https://shanadel.com/blog/${slug}`

  useSeoMeta({
    title: pageTitle,
    description: pageDesc,
    ogTitle: pageTitle,
    ogDescription: pageDesc,
    ogImage: pageImage,
    ogUrl: pageUrl,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle,
    twitterDescription: pageDesc,
    twitterImage: pageImage,
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    meta: [
      { property: 'article:published_time', content: post.value.created_at },
      { property: 'article:author', content: 'Shanadel Eye Clinic' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: computed(() => JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': pageUrl,
          },
          'headline': post.value.title,
          'image': pageImage,
          'datePublished': post.value.created_at,
          'dateModified': post.value.created_at,
          'author': {
            '@type': 'Organization',
            'name': 'Shanadel Eye Clinic',
            'url': 'https://shanadel.com'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Shanadel Eye Clinic',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://shanadel.com/logo.png'
            }
          },
          'description': pageDesc,
        }))
      }
    ]
  })
} else {
  useHead({
    title: 'Blog Post Not Found | Shanadel Eye Clinic'
  })
}

</script>

<style>
/* Enhanced prose styling */
.prose-clinic {
  color: #1f2937;
}

.prose-clinic h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1em;
  color: #111827;
  position: relative;
  padding-bottom: 0.5em;
}

.prose-clinic h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #5a912d, #7fc540);
  border-radius: 2px;
}

.prose-clinic h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2em;
  margin-bottom: 0.8em;
  color: #1f2937;
}

.prose-clinic p {
  line-height: 1.8;
  margin-bottom: 1.5em;
  color: #374151;
  font-size: 1.0625rem;
}

.prose-clinic a {
  color: #5a912d;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.prose-clinic a:hover {
  border-bottom-color: #5a912d;
}

.prose-clinic ul,
.prose-clinic ol {
  margin-left: 1.5rem;
  margin-bottom: 1.5em;
}

.prose-clinic li {
  margin-bottom: 0.5em;
  line-height: 1.8;
}

.prose-clinic li p {
  margin-bottom: 0.5em;
}

.prose-clinic blockquote {
  border-left: 4px solid #5a912d;
  padding-left: 1.5rem;
  font-style: italic;
  color: #4b5563;
  margin: 2em 0;
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.prose-clinic strong {
  color: #111827;
  font-weight: 600;
}

.prose-clinic code {
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.9em;
  color: #5a912d;
}

.prose-clinic pre {
  background: #1f2937;
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 2em 0;
}

.prose-clinic img {
  border-radius: 0.75rem;
  margin: 2em 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
</style>