<template>
  <div class="min-h-screen bg-gray-50 pt-12">
    
    <div v-if="loading" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="animate-pulse space-y-4">
        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
        <div class="h-10 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        <div class="h-80 bg-gray-200 rounded-xl"></div>
      </div>
    </div>

    <div v-else-if="error" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p class="text-red-800 font-medium">Error loading post: {{ error.message }}</p>
      </div>
    </div>

    <article v-else-if="post" class="py-12">
      
      <header class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="mb-6">
          <NuxtLink 
            to="/blog" 
            class="group inline-flex items-center text-gray-600 hover:text-[#5a912d] font-medium transition-colors duration-200"
          >
            <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Blog</span>
          </NuxtLink>
        </div>
        
        <span class="inline-block bg-[#5a912d]/10 text-[#5a912d] px-3 py-1 rounded-full text-sm font-semibold mb-4">
          {{ post.category }}
        </span>

        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          {{ post.title }}
        </h1>
        
        <div class="w-24 h-1.5 bg-gradient-to-r from-[#5a912d] to-[#7fc540] rounded-full mb-6"></div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-sm">
          <div class="flex items-center">
            <UIcon name="i-lucide-calendar" class="w-4 h-4 mr-2 text-[#5a912d]" />
            <time :datetime="post.created_at">{{ formatDate(post.created_at) }}</time>
          </div>
          <div class="flex items-center">
            <UIcon name="i-lucide-clock" class="w-4 h-4 mr-2 text-[#5a912d]" />
            <span>{{ readingTime }} min read</span>
          </div>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div class="w-full h-auto max-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="prose prose-lg prose-clinic max-w-none"
          v-html="formattedContent" 
        />
      </div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800 mb-5">Share this article</h2>
          
          <div class="flex flex-wrap gap-3">
            <button
              aria-label="Share on Twitter"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#1DA1F2] hover:text-white"
              @click="shareOnTwitter"
            >
              <UIcon name="i-lucide-twitter" class="w-5 h-5" />
            </button>
            <button
              aria-label="Share on Facebook"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#4267B2] hover:text-white"
              @click="shareOnFacebook"
            >
              <UIcon name="i-lucide-facebook" class="w-5 h-5" />
            </button>
            <button
              aria-label="Share on LinkedIn"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#0077B5] hover:text-white"
              @click="shareOnLinkedIn"
            >
              <UIcon name="i-lucide-linkedin" class="w-5 h-5" />
            </button>
            <button
              aria-label="Copy link to clipboard"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#5a912d] hover:text-white"
              @click="copyLink"
            >
              <UIcon :name="linkCopied ? 'i-lucide-check' : 'i-lucide-link'" class="w-5 h-5" />
            </button>
          </div>
          
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
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

    </article>
    
    <div v-if="recentPosts.length > 0" class="mt-20 py-16 bg-white border-t border-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Continue Reading</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink
            v-for="recent in recentPosts"
            :key="recent.id"
            :to="`/blog/${recent.slug}`"
            class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#5a912d] transition-colors line-clamp-2">
                {{ recent.title }}
              </h3>
              
              <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                {{ recent.excerpt }}
              </p>
              
              <div class="flex items-center text-[#5a912d] font-medium text-sm">
                <span>Read more</span>
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

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
  const pageImage = post.value.image || 'https://shanadeleyeclinicltd.com.ng/default-og-image.jpg'
  const pageUrl = `https://shanadeleyeclinicltd.com.ng/blog/${slug}`

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
            'url': 'https://shanadeleyeclinicltd.com.ng'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Shanadel Eye Clinic',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp'
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