<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-clinic-blue rounded-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Shanadel <span class="hidden sm:inline">Eye Clinic</span></h1>
              <p class="text-xs text-gray-500 hidden sm:block">Admin Dashboard</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-medium text-gray-900">{{ userName }}</p>
              <p class="text-xs text-gray-500">{{ userEmail }}</p>
            </div>
            <button
              :disabled="loggingOut"
              class="inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-clinic-blue focus:ring-offset-2 disabled:opacity-50 transition"
              @click="handleLogout"
            >
              <svg class="w-4 h-4 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span class="hidden sm:inline">{{ loggingOut ? 'Logging out...' : 'Logout' }}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6"> <div class="flex flex-col items-center text-center sm:flex-row sm:items-start sm:space-x-4 sm:text-left">
          <div class="flex-shrink-0 mb-4 sm:mb-0">
            <div class="w-16 h-16 bg-gradient-to-br from-clinic-blue to-blue-600 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold text-white">{{ userInitials }}</span>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Hello, {{ userName }}! 👋
            </h2>
            <p class="text-gray-600 mb-4">
              You're logged in as:
            </p>
            <div class="inline-flex items-center px-4 py-2 bg-clinic-light rounded-lg">
              <svg class="w-5 h-5 text-clinic-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="font-mono text-sm text-gray-700 break-all">{{ userEmail }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="statsError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
        {{ statsError }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">New Appointments</p>
              <div v-if="statsLoading" class="w-8 h-8 flex items-center">
                <UIcon name="i-lucide-loader" class="w-6 h-6 animate-spin text-gray-400" />
              </div>
              <p v-else class="text-2xl font-bold text-yellow-600">
                {{ newAppointmentsCount }}
              </p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-calendar-clock" class="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Total Blog Posts</p>
              <div v-if="statsLoading" class="w-8 h-8 flex items-center">
                <UIcon name="i-lucide-loader" class="w-6 h-6 animate-spin text-gray-400" />
              </div>
              <p v-else class="text-2xl font-bold text-clinic-blue">
                {{ totalPostsCount }}
              </p>
            </div>
            <div class="w-12 h-12 bg-clinic-light rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-file-text" class="w-6 h-6 text-clinic-blue" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Access Level</p>
              <p class="text-2xl font-bold text-gray-900">Admin</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const loggingOut = ref(false)

// --- Refs for dashboard stats ---
const newAppointmentsCount = ref<number | null>(null)
const totalPostsCount = ref<number | null>(null)
const statsLoading = ref(true)
const statsError = ref('')
// -------------------------------------

const userEmail = computed(() => user.value?.email || 'N/A')
const userName = computed(() => {
  if (!user.value?.email) return 'User'
  const emailName = user.value.email.split('@')[0]
  return emailName.charAt(0).toUpperCase() + emailName.slice(1)
})
const userInitials = computed(() => {
  if (!user.value?.email) return 'U'
  const emailName = user.value.email.split('@')[0]
  return emailName.charAt(0).toUpperCase()
})

const handleLogout = async () => {
  loggingOut.value = true
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error)
    }
    await router.push('/login')
  } catch (err) {
    console.error('Logout error:', err)
  } finally {
    loggingOut.value = false
  }
}

// --- Function to fetch dashboard stats ---
async function fetchDashboardStats() {
  statsLoading.value = true
  statsError.value = ''
  try {
    const [appointmentsResponse, postsResponse] = await Promise.all([
      supabase
        .from('appointments')
        .select('id', { count: 'exact', head: true })
        .eq('status', 'pending'),
      
      supabase
        .from('posts')
        .select('id', { count: 'exact', head: true })
    ])

    if (appointmentsResponse.error) throw appointmentsResponse.error
    if (postsResponse.error) throw postsResponse.error

    newAppointmentsCount.value = appointmentsResponse.count
    totalPostsCount.value = postsResponse.count

  } catch (err: any) {
    console.error('Error fetching stats:', err.message)
    statsError.value = 'Failed to load dashboard stats.'
  } finally {
    statsLoading.value = false
  }
}

// --- Modified onMounted ---
onMounted(() => {
  if (!user.value) {
    router.push('/login')
  } else {
    fetchDashboardStats()
  }
})
</script>