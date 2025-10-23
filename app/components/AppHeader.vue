<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <NuxtImg
            src="/img/shanadel-lg.png"
            alt="Shanadel Eye Clinic"
            class="h-10 md:h-12 w-auto"
            loading="eager"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'text-base font-medium transition-colors duration-200 text-gray-700 hover:text-[#7fc540]',
            ]"
            active-class="text-white hover:text-white bg-[#7fc540] h-full p-5 font-semibold"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Desktop Right Section -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Phone Number -->
          <a
            :href="`tel:${phoneNumber.replace(/\s/g, '')}`"
            :class="[
              'flex items-center gap-2 text-base font-medium transition-colors duration-200',
              scrolled 
                ? 'text-gray-700 hover:text-[#7fc540]' 
                : 'text-white hover:text-[#7fc540]'
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{{ phoneNumber }}</span>
          </a>

          <!-- CTA Button -->
          <NuxtLink
            to="/contact"
            class="px-6 py-3 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold  transition-all duration-200 transform hover:scale-102 shadow-lg"
          >
            Book a Consultation
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          
          :class="[
            'lg:hidden p-2 rounded-md transition-colors duration-200 text-gray-700',
          ]"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div class="px-4 py-6 space-y-4">
            <!-- Mobile Navigation Links -->
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#7fc540] hover:bg-gray-50 rounded-lg transition-colors duration-200"
              active-class="text-[#7fc540] font-semibold bg-gray-50"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Mobile Phone -->
            <a
              :href="`tel:${phoneNumber.replace(/\s/g, '')}`"
              class="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-[#7fc540] hover:bg-gray-50 rounded-lg transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{{ phoneNumber }}</span>
            </a>

            <!-- Mobile CTA Button -->
            <NuxtLink
              to="/contact"
              class="block w-full px-6 py-3 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold rounded-lg transition-all duration-200 text-center shadow-lg"
              @click="isMenuOpen = false"
            >
              Book a Consultation
            </NuxtLink>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
const scrolled = ref(false)
const isMenuOpen = ref(false)

const phoneNumber = '+234 (123) 456-7890'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]

// Handle scroll event
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Close menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (isMenuOpen.value && !target.closest('nav')) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

// Close menu on route change
watch(() => isMenuOpen.value, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Ensure smooth transitions */
header {
  backdrop-filter: blur(10px);
}
</style>