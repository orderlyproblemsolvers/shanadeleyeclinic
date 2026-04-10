<template>
  <div class="min-h-screen bg-gray-50 pt-12">
    
    <div v-if="loading" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="animate-pulse space-y-4">
        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
        <div class="h-10 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        <div class="h-80 bg-gray-200 rounded-xl mt-8"></div>
        <div class="space-y-3 mt-8">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>

    <div v-else-if="error || (!post && !loading)" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p class="text-red-800 font-medium">Error loading post: {{ error?.message || 'Post not found.' }}</p>
        <NuxtLink to="/blog" class="mt-4 inline-block text-[#5a912d] hover:underline">
          Return to Blog
        </NuxtLink>
      </div>
    </div>

    <article v-else-if="post" class="py-12">
      
      <header class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="mb-6">
          <NuxtLink 
            to="/blog" 
            class="group inline-flex items-center text-gray-600 hover:text-[#5a912d] font-medium transition-colors duration-200"
          >
            <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
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
            <UIcon name="i-lucide-calendar" class="w-4 h-4 mr-2 text-[#5a912d]" aria-hidden="true" />
            <time :datetime="post.created_at">{{ formatDate(post.created_at) }}</time>
          </div>
          <div class="flex items-center">
            <UIcon name="i-lucide-clock" class="w-4 h-4 mr-2 text-[#5a912d]" aria-hidden="true" />
            <span>{{ readingTime }} min read</span>
          </div>
        </div>
      </header>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div class="w-full h-auto max-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="blog-content"
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
              <UIcon name="i-lucide-twitter" class="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Share on Facebook"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#4267B2] hover:text-white"
              @click="shareOnFacebook"
            >
              <UIcon name="i-lucide-facebook" class="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Share on LinkedIn"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#0077B5] hover:text-white"
              @click="shareOnLinkedIn"
            >
              <UIcon name="i-lucide-linkedin" class="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Copy link to clipboard"
              class="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg transition-colors hover:bg-[#5a912d] hover:text-white"
              @click="copyLink"
            >
              <UIcon :name="linkCopied ? 'i-lucide-check' : 'i-lucide-link'" class="w-5 h-5" aria-hidden="true" />
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
              <UIcon name="i-lucide-check-circle" class="w-4 h-4 mr-2" aria-hidden="true" />
              Link copied to clipboard!
            </div>
          </transition>
        </div>
      </div>

    </article>
    
    <div v-if="recentPosts && recentPosts.length > 0" class="mt-20 py-16 bg-white border-t border-gray-100">
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
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

const route = useRoute()
const { getPostBySlug, getPublishedPosts } = useBlog() 
const slug = route.params.slug as string

// 1. Fetch main post (Lazy for client navigation, blocked for SSR SEO)
const { data: post, pending: loading, error, refresh: refreshPost } = useAsyncData(
  `post-${slug}`, 
  async () => {
    const fetchedPost = await getPostBySlug(slug)
    return fetchedPost as Post | null
  },
  { 
    lazy: import.meta.client,
    default: () => null 
  }
)

// 2. Fetch recent posts (Lazy for client navigation)
const { data: recentPosts, refresh: refreshRecent } = useAsyncData(
  `recent-posts-${slug}`,
  async () => {
    const allRecentPosts = await getPublishedPosts(4)
    return allRecentPosts.filter((p: Post) => p.slug !== slug).slice(0, 3)
  },
  { 
    lazy: import.meta.client,
    default: () => [] 
  }
)

onMounted(async () => {
  postUrl.value = window.location.href 
  if (!post.value) await refreshPost()
  if (!recentPosts.value || recentPosts.value.length === 0) await refreshRecent()
})

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

// Social Sharing
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
    setTimeout(() => { linkCopied.value = false }, 3000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// SEO
watch(post, (newPost) => {
  if (newPost) {
    const pageTitle = `${newPost.title} | Shanadel Eye Clinic`
    const pageDesc = newPost.excerpt || 'Read this article from Shanadel Eye Clinic.'
    const pageImage = newPost.image || 'https://shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp'
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
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'canonical', href: pageUrl }],
      meta: [
        { property: 'article:published_time', content: newPost.created_at },
        { property: 'article:author', content: 'Shanadel Eye Clinic' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': pageUrl,
            },
            'headline': newPost.title,
            'image': pageImage,
            'datePublished': newPost.created_at,
            'dateModified': newPost.created_at,
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
          })
        }
      ]
    })
  } else {
    useHead({ title: 'Blog Post Not Found | Shanadel Eye Clinic' })
  }
}, { immediate: true })
</script>

<style scoped>
/* Custom Rich Text Styling (Alternative to @tailwindcss/typography) */
.blog-content {
  font-size: 1.125rem; /* text-lg */
  line-height: 1.75;
  color: #374151; /* text-gray-700 */
}

/* Headings */
.blog-content :deep(h1), 
.blog-content :deep(h2), 
.blog-content :deep(h3), 
.blog-content :deep(h4), 
.blog-content :deep(h5), 
.blog-content :deep(h6) {
  color: #111827; /* text-gray-900 */
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3;
}

.blog-content :deep(h1) { font-size: 2.25rem; }
.blog-content :deep(h2) { font-size: 1.875rem; }
.blog-content :deep(h3) { font-size: 1.5rem; }
.blog-content :deep(h4) { font-size: 1.25rem; }

/* Paragraphs & Links */
.blog-content :deep(p) {
  margin-bottom: 1.25em;
}

.blog-content :deep(a) {
  color: #5a912d;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-content :deep(a:hover) {
  color: #7fc540;
}

/* Bold & Italic */
.blog-content :deep(strong), 
.blog-content :deep(b) {
  color: #111827;
  font-weight: 600;
}

/* Lists */
.blog-content :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.blog-content :deep(ol) {
  list-style-type: decimal;
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.blog-content :deep(li) {
  margin-bottom: 0.5em;
}

.blog-content :deep(li::marker) {
  color: #5a912d; /* Clinic Green */
}

/* Blockquotes */
.blog-content :deep(blockquote) {
  border-left: 4px solid #5a912d;
  background-color: #f9fafb; /* bg-gray-50 */
  padding: 1rem 1.5rem;
  border-radius: 0 0.75rem 0.75rem 0;
  margin: 1.5em 0;
  color: #4b5563; /* text-gray-600 */
  font-style: normal;
}

.blog-content :deep(blockquote p:last-child) {
  margin-bottom: 0;
}

/* Images within content */
.blog-content :deep(img) {
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 2em auto;
  max-width: 100%;
  height: auto;
  display: block;
}

/* Code blocks (if you ever post technical content) */
.blog-content :deep(code) {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
  color: #111827;
}

.blog-content :deep(pre) {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1.25em;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1.5em 0;
}

.blog-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: inherit;
}
</style>