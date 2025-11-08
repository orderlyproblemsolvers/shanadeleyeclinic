<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <NuxtLink to="/admin" class="text-gray-600 hover:text-gray-900 flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </NuxtLink>
            <h1 class="text-base sm:text-xl font-bold text-gray-900 truncate">
              <span class="hidden sm:inline">Manage Blog Posts</span>
              <span class="sm:hidden">Blog Posts</span>
            </h1>
          </div>
          <NuxtLink
            to="/admin/blog/create"
            class="inline-flex items-center px-3 sm:px-4 py-2 bg-[#7fc540] text-white rounded-lg hover:bg-[#6ab030] transition text-sm sm:text-base flex-shrink-0"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span class="hidden sm:inline">New Post</span>
            <span class="sm:hidden">New</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <!-- Loading State -->
      <div v-if="loading" class="space-y-4">
        <div v-for="i in 3" :key="i" class="animate-pulse bg-white rounded-lg h-32"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
        {{ error }}
      </div>

      <!-- Posts List -->
      <div v-else-if="posts.length > 0" class="space-y-3 sm:space-y-4">
        <div 
          v-for="post in posts" 
          :key="post.id" 
          class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6"
        >
          <!-- Mobile Layout -->
          <div class="sm:hidden">
            <div class="flex items-start justify-between mb-3">
              <div class="flex-1 min-w-0 pr-2">
                <div class="flex items-center space-x-2 mb-2 flex-wrap gap-y-1">
                  <span class="text-xs font-semibold px-2 py-1 rounded whitespace-nowrap" style="background-color: #fff4e6; color: #ff6900">
                    {{ post.category }}
                  </span>
                  <span v-if="post.published" class="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700 whitespace-nowrap">
                    Published
                  </span>
                  <span v-else class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700 whitespace-nowrap">
                    Draft
                  </span>
                </div>
                <h3 class="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{{ post.title }}</h3>
                <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ post.excerpt }}</p>
                <p class="text-xs text-gray-500">
                  Updated: {{ formatDate(post.updated_at) }}
                </p>
              </div>
              <button
                @click="toggleActions(post.id)"
                class="p-2 text-gray-600 hover:text-gray-900 transition flex-shrink-0"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </button>
            </div>
            
            <!-- Mobile Action Menu -->
            <div v-if="activeActions === post.id" class="flex items-center space-x-2 pt-3 border-t border-gray-200">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View</span>
              </NuxtLink>
              <NuxtLink
                :to="`/admin/blog/edit/${post.id}`"
                class="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit</span>
              </NuxtLink>
              <button
                @click="confirmDelete(post)"
                class="flex-1 flex items-center justify-center space-x-1 px-3 py-2 text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Delete</span>
              </button>
            </div>
          </div>

          <!-- Desktop Layout -->
          <div class="hidden sm:flex items-start justify-between">
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex items-center space-x-2 mb-2">
                <span class="text-xs font-semibold px-2 py-1 rounded" style="background-color: #fff4e6; color: #ff6900">
                  {{ post.category }}
                </span>
                <span v-if="post.published" class="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
                  Published
                </span>
                <span v-else class="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                  Draft
                </span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ post.excerpt }}</p>
              <p class="text-xs text-gray-500">
                Created: {{ formatDate(post.created_at) }} | Updated: {{ formatDate(post.updated_at) }}
              </p>
            </div>
            <div class="flex items-center space-x-2 flex-shrink-0">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="p-2 text-gray-600 hover:text-[#7fc540] transition"
                title="View"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </NuxtLink>
              <NuxtLink
                :to="`/admin/blog/edit/${post.id}`"
                class="p-2 text-gray-600 hover:text-blue-600 transition"
                title="Edit"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </NuxtLink>
              <button
                @click="confirmDelete(post)"
                class="p-2 text-gray-600 hover:text-red-600 transition"
                title="Delete"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12 bg-white rounded-lg shadow-sm">
        <svg class="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <p class="text-gray-600 text-base sm:text-lg mb-4">No blog posts yet</p>
        <NuxtLink
          to="/admin/blog/create"
          class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#7fc540] text-white rounded-lg hover:bg-[#6ab030] transition text-sm sm:text-base"
        >
          Create Your First Post
        </NuxtLink>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="deleteModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div class="bg-white rounded-xl shadow-2xl max-w-md w-full p-4 sm:p-6">
        <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Delete Post?</h3>
        <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Are you sure you want to delete "<strong>{{ postToDelete?.title }}</strong>"? This action cannot be undone.
        </p>
        <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            @click="deleteModal = false"
            class="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            @click="handleDelete"
            :disabled="deleting"
            class="w-full sm:flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 text-sm sm:text-base"
          >
            {{ deleting ? 'Deleting...' : 'Delete' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})

const { getMyPosts, deletePost } = useBlog()

const posts = ref<Post[]>([])
const loading = ref(true)
const error = ref('')
const deleteModal = ref(false)
const postToDelete = ref<Post | null>(null)
const deleting = ref(false)
const activeActions = ref<string | null>(null)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const toggleActions = (postId: string) => {
  activeActions.value = activeActions.value === postId ? null : postId
}

const confirmDelete = (post: Post) => {
  postToDelete.value = post
  deleteModal.value = true
  activeActions.value = null
}

const handleDelete = async () => {
  if (!postToDelete.value) return

  deleting.value = true
  try {
    await deletePost(postToDelete.value.id)
    posts.value = posts.value.filter(p => p.id !== postToDelete.value!.id)
    deleteModal.value = false
    postToDelete.value = null
  } catch (err: any) {
    error.value = 'Failed to delete post'
    console.error(err)
  } finally {
    deleting.value = false
  }
}

const loadPosts = async () => {
  loading.value = true
  try {
    posts.value = await getMyPosts()
  } catch (err: any) {
    error.value = 'Failed to load posts'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadPosts()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>