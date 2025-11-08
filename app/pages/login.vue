<template>
  <div class="min-h-screen bg-gradient-to-br from-[#5a912d]/5 via-white to-[#7fc540]/5 flex items-center justify-center px-4 py-12 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#5a912d]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#7fc540]/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#5a912d]/5 to-[#7fc540]/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-md w-full relative z-10">
      <!-- Logo/Header -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5a912d] to-[#7fc540] rounded-2xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Shanadel Eye Clinic</h1>
        <div class="flex items-center justify-center gap-2">
          <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#5a912d]"></div>
          <p class="text-gray-600 font-medium">Admin Portal</p>
          <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#7fc540]"></div>
        </div>
      </div>

      <!-- Login Form Card -->
      <div class="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
        <!-- Decorative Top Border -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5a912d] via-[#7fc540] to-[#5a912d] rounded-t-3xl"></div>
        
        <div class="space-y-6">
          <!-- Error Message -->
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="error" class="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">{{ error }}</span>
            </div>
          </transition>

          <!-- Success Message -->
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="success" class="bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-lg flex items-start gap-3">
              <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm">{{ success }}</span>
            </div>
          </transition>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                autocomplete="email"
                class="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5a912d]/20 focus:border-[#5a912d] outline-none transition-all duration-300"
                placeholder="admin@shanadeleyeclinic.com"
                @keypress.enter="handleLogin"
              >
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                autocomplete="current-password"
                class="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5a912d]/20 focus:border-[#5a912d] outline-none transition-all duration-300"
                placeholder="••••••••"
                @keypress.enter="handleLogin"
              >
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="button"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-[#5a912d] to-[#7fc540] text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#5a912d] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
            @click="handleLogin"
          >
            <span v-if="!loading" class="flex items-center justify-center gap-2">
              <span>Sign In</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>Signing in...</span>
            </span>
          </button>
        </div>

        <!-- Divider -->
        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="text-center space-y-3">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 text-[#5a912d] hover:text-[#487524] font-medium transition-colors duration-300 group"
          >
            <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>Back to Website</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Copyright -->
      <p class="text-center text-sm text-gray-600 mt-8">
        © 2024 Shanadel Eye Clinic Ltd. All rights reserved.
      </p>

      <!-- Security Badge -->
      <div class="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
        <span>Secure login protected by encryption</span>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: ['guest']
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

// Redirect if already logged in
watch(user, (newUser) => {
  if (newUser) {
    router.push('/admin')
  }
}, { immediate: true })

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  success.value = ''

  try {
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (signInError) {
      error.value = signInError.message
      return
    }

    if (data?.user) {
      success.value = 'Login successful! Redirecting...'
      // Small delay to show success message
      await new Promise(resolve => setTimeout(resolve, 500))
      await router.push('/admin')
    }
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
</script>