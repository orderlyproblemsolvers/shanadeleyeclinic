<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <NuxtLink to="/admin/blog" class="text-gray-600 hover:text-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </NuxtLink>
            <h1 class="text-xl font-bold text-gray-900">Create New Post</h1>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {{ error }}
        </div>

        <div v-if="success" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
          {{ success }}
        </div>

        <div class="mb-6">
          <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
            Title <span class="text-red-500">*</span>
          </label>
          <input
            id="title"
            v-model="form.title"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7fc540] focus:border-transparent outline-none"
            placeholder="Enter post title"
          />
          <p class="text-sm text-gray-500 mt-1">Slug: {{ slugPreview }}</p>
        </div>

        <div class="mb-6">
          <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
            Category <span class="text-red-500">*</span>
          </label>
          <input
            id="category"
            v-model="form.category"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7fc540] focus:border-transparent outline-none"
            placeholder="e.g., Eye Health Tips, Digital Life, Expert Advice"
          />
        </div>

        <div class="mb-6">
          <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
            Featured Image <span class="text-red-500">*</span>
          </label>
          <input
            id="image"
            ref="fileInputRef"
            type="file"
            accept="image/png, image/jpeg, image/gif"
            @change="handleImageUpload"
            class="w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer
                   file:mr-4 file:py-3 file:px-5 file:rounded-l-lg file:border-0
                   file:text-sm file:font-semibold file:bg-[#7fc540] file:text-white
                   hover:file:bg-[#6ab030] focus:ring-2 focus:ring-[#7fc540] focus:border-transparent outline-none"
          />
          <p class="text-sm text-gray-500 mt-1">Upload an image (it will be converted to WebP)</p>

          <div v-if="uploadingImage" class="mt-3 flex items-center text-sm text-gray-600">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-[#7fc540]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Converting and uploading...
          </div>
          <div v-if="imageError" class="mt-2 text-sm text-red-600">
            {{ imageError }}
          </div>

          <div v-if="form.image && !uploadingImage" class="mt-4">
            <p class="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
            <img :src="form.image" alt="Uploaded image preview" class="w-full max-w-sm rounded-lg border border-gray-200 shadow-sm" />
          </div>
        </div>

        <div class="mb-6">
          <label for="excerpt" class="block text-sm font-medium text-gray-700 mb-2">
            Excerpt <span class="text-red-500">*</span>
          </label>
          <textarea
            id="excerpt"
            v-model="form.excerpt"
            required
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7fc540] focus:border-transparent outline-none"
            placeholder="Brief description of the post (150-200 characters)"
          ></textarea>
        </div>

        <div class="mb-6">
          <label for="content" class="block text-sm font-medium text-gray-700 mb-2">
            Content <span class="text-red-500">*</span>
          </label>
          <ClientOnly>
            <QuillEditor
              id="content"
              v-model:content="form.content"
              theme="snow"
              toolbar="full"
              contentType="html"
              placeholder="Write your blog post content here..."
              style="min-height: 300px; display: flex; flex-direction: column;"
            />
            <template #fallback>
              <div class="w-full border border-gray-300 rounded-lg bg-gray-100 animate-pulse" style="height: 300px"></div>
            </template>
          </ClientOnly>
        </div>
        <div class="mb-8">
          <label class="flex items-center cursor-pointer">
            <input
              v-model="form.published"
              type="checkbox"
              class="w-5 h-5 text-[#7fc540] border-gray-300 rounded focus:ring-[#7fc540]"
            />
            <span class="ml-3 text-sm font-medium text-gray-700">Publish immediately</span>
          </label>
          <p class="text-sm text-gray-500 mt-1 ml-8">Uncheck to save as draft</p>
        </div>

        <div class="flex space-x-4">
          <button
            type="submit"
            :disabled="submitting || uploadingImage"
            class="flex-1 px-6 py-3 bg-[#7fc540] text-white rounded-lg hover:bg-[#6ab030] transition disabled:opacity-50 font-semibold"
          >
            {{ submitting ? 'Creating...' : 'Create Post' }}
          </button>
          <NuxtLink
            to="/admin/blog"
            class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
          >
            Cancel
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// ***** NEW IMPORTS *****
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// ***** END OF NEW IMPORTS *****

definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})

const router = useRouter()
const { createPost, generateSlug } = useBlog()
const client = useSupabaseClient()

const form = reactive({
  title: '',
  category: '',
  excerpt: '',
  content: '', // This will now hold HTML string
  image: '', 
  published: true
})

const submitting = ref(false)
const error = ref('')
const success = ref('')

const uploadingImage = ref(false)
const imageError = ref('')
const fileInputRef = ref<HTMLInputElement | null>(null)

const slugPreview = computed(() => {
  return form.title ? generateSlug(form.title) : 'your-post-slug'
})

// Function to convert image to WebP (no change)
const convertToWebP = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      const img = new Image()
      img.src = event.target?.result as string
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const MAX_WIDTH = 1200
        const scaleSize = MAX_WIDTH / img.width
        canvas.width = img.width > MAX_WIDTH ? MAX_WIDTH : img.width
        canvas.height = img.width > MAX_WIDTH ? img.height * scaleSize : img.height

        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('Failed to get canvas context'))

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('Canvas toBlob failed'))
          
          const originalName = file.name.split('.').slice(0, -1).join('.')
          const webpFile = new File([blob], `${originalName}.webp`, { type: 'image/webp' })
          resolve(webpFile)
        }, 'image/webp', 0.9)
      }
      img.onerror = reject
    }
    reader.onerror = reject
  })
}

// Function to upload the file to Supabase (no change)
const uploadToSupabase = async (file: File) => {
  const bucketName = 'posts' 
  const fileName = `${Date.now()}-${file.name}`
  const filePath = `blog-images/${fileName}`

  const { data, error: uploadError } = await client.storage
    .from(bucketName)
    .upload(filePath, file)

  if (uploadError) {
    throw uploadError
  }

  const { data: urlData } = client.storage
    .from(bucketName)
    .getPublicUrl(data.path)

  return urlData.publicUrl
}

// Main handler for when a file is selected (no change)
const handleImageUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) return

  uploadingImage.value = true
  imageError.value = ''
  form.image = '' 

  try {
    if (!file.type.startsWith('image/')) {
      throw new Error('Please select a valid image file.')
    }
    const webpFile = await convertToWebP(file)
    const publicUrl = await uploadToSupabase(webpFile)
    form.image = publicUrl
  } catch (err: any) {
    console.error('Image upload failed:', err)
    imageError.value = err.message || 'Failed to upload image. Please try again.'
  } finally {
    uploadingImage.value = false
  }
}

// handleSubmit (no change to logic, form.content is already bound)
const handleSubmit = async () => {
  if (!form.image) {
    error.value = 'Please upload a featured image first.'
    return
  }
  
  if (uploadingImage.value) {
    error.value = 'Please wait for the image to finish uploading.'
    return
  }

  // **NEW: Add a check for empty content**
  // The editor might return `<p><br></p>` for an empty field
  if (!form.content || form.content === '<p><br></p>') {
    error.value = 'Please add content to your post.'
    return
  }

  submitting.value = true
  error.value = ''
  success.value = ''

  try {
    const post = await createPost(form)
    success.value = 'Post created successfully! Redirecting...'
    
    // Clear the form and file input
    Object.assign(form, {
      title: '',
      category: '',
      excerpt: '',
      content: '', // This will also clear the Quill editor
      image: '',
      published: true
    })
    if (fileInputRef.value) {
      fileInputRef.value.value = '' 
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    await router.push('/admin/blog')
  } catch (err: any) {
    error.value = err.message || 'Failed to create post'
    console.error(err)
  } finally {
    submitting.value = false
  }
}
</script>

<style>
.ql-editor {
  min-height: 250px;
}
.ql-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>