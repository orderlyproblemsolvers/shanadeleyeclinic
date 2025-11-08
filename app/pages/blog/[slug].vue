<template>
  <div class="min-h-screen bg-gray-50 mt-12">
    <div v-if="loading" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      </div>

    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      </div>

    <article v-else-if="post" class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-wrap items-center justify-between mb-8">
          <NuxtLink to="/blog" class="inline-flex items-center text-[#7fc540] hover:text-[#6ab030] font-semibold transition-colors">
            <UIcon name="i-lucide-arrow-left" class="w-5 h-5 mr-2" />
            Back to Blog
          </NuxtLink>
        </div>
        <span class="text-sm font-semibold mb-4 inline-block" style="color: #ff6900">
          {{ post.category }}
        </span>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ post.title }}
        </h1>

        <div class="flex flex-wrap items-center text-gray-600 text-sm mb-8">
          <time :datetime="post.created_at" class="flex items-center">
            <UIcon name="i-lucide-calendar" class="w-4 h-4 mr-1.5" />
            {{ formatDate(post.created_at) }}
          </time>
          <span class="mx-2">•</span>
          <span class="flex items-center">
            <UIcon name="i-lucide-clock" class="w-4 h-4 mr-1.5" />
            {{ readingTime }} min read
          </span>
        </div>

        <div class="w-full h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
        </div>

        <div 
          v-html="formattedContent" 
          class="prose prose-lg prose-clinic max-w-none mb-12"
        ></div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Share this article</h2>
          <div class="flex space-x-3">
            <button
              @click="shareOnTwitter"
              aria-label="Share on Twitter"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              <UIcon name="i-lucide-twitter" class="w-5 h-5" />
            </button>
            <button
              @click="shareOnFacebook"
              aria-label="Share on Facebook"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              <UIcon name="i-lucide-facebook" class="w-5 h-5" />
            </button>
            <button
              @click="shareOnLinkedIn"
              aria-label="Share on LinkedIn"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              <UIcon name="i-lucide-linkedin" class="w-5 h-5" />
            </button>
            <button
              @click="copyLink"
              aria-label="Copy link to clipboard"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              <UIcon :name="linkCopied ? 'i-lucide-check' : 'i-lucide-link'" class="w-5 h-5" />
            </button>
          </div>
          <p v-if="linkCopied" class="text-sm text-[#7fc540] mt-2">Link copied!</p>
        </div>
      </div>
      
      <div v-if="recentPosts.length > 0" class="mt-16 pt-12 bg-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="recent in recentPosts"
              :key="recent.id"
              :to="`/blog/${recent.slug}`"
              class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-[#7fc540]/50 transition-all"
            >
              <h3 class="font-semibold text-gray-900 mb-2">{{ recent.title }}</h3>
              <p class="text-sm text-gray-600 line-clamp-2">{{ recent.excerpt }}</p>
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
const router = useRouter() // <-- 1. Get the router
const { getPostBySlug, getPublishedPosts } = useBlog() 



// (interface Post definition)
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

// (all other refs)
const post = ref<Post | null>(null)
const recentPosts = ref<Post[]>([]) 
const loading = ref(true)
const error = ref('')
const linkCopied = ref(false)
const postUrl = ref('')

// --- 2. Add the goBack function ---
const goBack = () => {
  router.back()
}
// ---------------------------------

// (readingTime computed)
const readingTime = computed(() => {
  if (!post.value || !post.value.content) return 0
  const text = post.value.content.replace(/<[^>]*>?/gm, '')
  const wordsPerMinute = 200
  const words = text.split(/\s+/).filter(Boolean).length 
  return Math.ceil(words / wordsPerMinute)
})

// (formattedContent computed)
const formattedContent = computed(() => {
  if (!post.value) return ''
  return post.value.content
})

// (formatDate function)
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// (fetchRecentPosts function)
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

// (Social share functions)
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
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// (onMounted hook)
onMounted(async () => {
  try {
    const slug = route.params.slug as string
    const fetchedPost = await getPostBySlug(slug)
    if (!fetchedPost) {
      throw new Error("Post not found.")
    }
    
    post.value = fetchedPost as Post
    postUrl.value = window.location.href 

    await fetchRecentPosts()

  } catch (err: any) {
    error.value = err.message || 'Failed to load blog post'
    console.error(err)
  } finally {
    loading.value = false
  }
})

// (useHead hook)
useHead(() => {
  const pageTitle = post.value ? `${post.value.title} | Shanadel Eye Clinic` : 'Blog Post | Shanadel Eye Clinic'
  const pageDesc = post.value?.excerpt || 'Read this article from Shanadel Eye Clinic.'
  const pageImage = post.value?.image || 'https://shanadel.com/default-og-image.jpg' // <-- IMPORTANT: Add a default fallback image
  const pageUrl = `https://shanadel.com/blog/${route.params.slug}` // <-- IMPORTANT: Change 'shanadel.com' to your domain

  return {
    title: pageTitle,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'description', content: pageDesc },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDesc },
      { property: 'og:image', content: pageImage },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: post.value?.created_at },
      { property: 'article:author', content: 'Shanadel Eye Clinic' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDesc },
      { name: 'twitter:image', content: pageImage },
    ],
    link: [
      { rel: 'canonical', href: pageUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': pageUrl,
          },
          'headline': post.value?.title,
          'image': pageImage,
          'datePublished': post.value?.created_at,
          'dateModified': post.value?.created_at, 
          'author': {
            '@type': 'Organization',
            'name': 'Shanadel Eye Clinic',
            'url': 'https://shanadel.com' // <-- IMPORTANT: Change to your domain
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Shanadel Eye Clinic',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://shanadel.com/logo.png' // <-- IMPORTANT: Add a URL to your logo
            }
          },
          'description': pageDesc,
        })
      }
    ]
  }
})
</script>

<style>
/* Custom styles for your v-html content from Quill */
.prose-clinic h2 {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
}
.prose-clinic h3 {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600;
  margin-top: 1.6em;
  margin-bottom: 0.8em;
}
.prose-clinic p {
  line-height: 1.75;
  margin-bottom: 1.25em;
}
.prose-clinic a {
  color: #7fc540;
  text-decoration: none;
  font-weight: 500;
}
.prose-clinic a:hover {
  text-decoration: underline;
}
.prose-clinic ul,
.prose-clinic ol {
  margin-left: 1.25rem;
}
.prose-clinic li p {
  margin-bottom: 0.5em;
}
.prose-clinic blockquote {
  border-left-color: #7fc540;
  font-style: italic;
  color: #374151; /* gray-700 */
}
</style>