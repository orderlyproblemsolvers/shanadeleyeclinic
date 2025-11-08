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
            src="/img/shanadel-lg.webp"
            alt="Shanadel Eye Clinic"
            class="h-10 md:h-12 w-auto"
            loading="eager"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <template v-for="link in navLinks" :key="link.to">
            <!-- Regular Links -->
            <NuxtLink
              v-if="!link.hasDropdown"
              :to="link.to"
              :class="[
                'text-base font-medium transition-colors duration-200 text-gray-700 hover:text-[#7fc540]',
              ]"
              active-class="text-white hover:text-white bg-[#7fc540] h-full p-5 font-semibold"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Services Dropdown -->
            <div
              v-else
              class="relative"
              @mouseenter="showDropdown = true"
              @mouseleave="showDropdown = false"
            >
              <button
                :class="[
                  'text-base font-medium transition-colors duration-200 text-gray-700 hover:text-[#7fc540] flex items-center gap-1',
                ]"
              >
                {{ link.label }}
                <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="showDropdown"
                  class="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                >
                  <div class="grid grid-cols-2 divide-x divide-gray-200">
                    <!-- Services Section (Left) -->
                    <div class="p-4">
                      <div class="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Our Services
                      </div>
                      <NuxtLink
                        v-for="service in servicesDropdown"
                        :key="service.to"
                        :to="service.to"
                        class="flex items-start gap-3 px-2 py-2.5 rounded-md hover:bg-gray-50 transition-colors group"
                      >
                        <div class="bg-[#7fc540]/10 p-2 rounded-lg mt-0.5 group-hover:bg-[#7fc540]/20 transition-colors flex-shrink-0">
                          <svg class="w-4 h-4 text-[#7fc540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="text-sm font-medium text-gray-900 group-hover:text-[#7fc540] transition-colors">
                            {{ service.label }}
                          </div>
                          <div class="text-xs text-gray-500 mt-0.5">
                            {{ service.description }}
                          </div>
                        </div>
                      </NuxtLink>
                    </div>

                    <!-- Conditions Section (Right) -->
                    <div class="p-4">
                      <div class="px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Conditions We Treat
                      </div>
                      <NuxtLink
                        v-for="condition in conditionsDropdown"
                        :key="condition.to"
                        :to="condition.to"
                        class="flex items-start gap-3 px-2 py-2.5 rounded-md hover:bg-gray-50 transition-colors group"
                      >
                        <div class="bg-orange-500/10 p-2 rounded-lg mt-0.5 group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                          <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                            {{ condition.label }}
                          </div>
                          <div class="text-xs text-gray-500 mt-0.5">
                            {{ condition.description }}
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>

                  <!-- View All Link -->
                  <div class="border-t border-gray-200 p-2 bg-gray-50">
                    <NuxtLink
                      to="/services"
                      class="block px-3 py-2 text-sm font-semibold text-[#7fc540] hover:bg-white rounded-md transition-colors text-center"
                    >
                      View All Services →
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
          </template>
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
            class="px-6 py-3 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold transition-all duration-200 transform hover:scale-102 shadow-lg"
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
          class="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto"
        >
          <div class="px-4 py-6 space-y-4">
            <!-- Mobile Navigation Links -->
            <template v-for="link in navLinks" :key="link.to">
              <!-- Regular Mobile Links -->
              <NuxtLink
                v-if="!link.hasDropdown"
                :to="link.to"
                class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#7fc540] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                active-class="text-[#7fc540] font-semibold bg-gray-50"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>

              <!-- Mobile Services Dropdown -->
              <div v-else>
                <button
                class="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-[#7fc540] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  @click="mobileServicesOpen = !mobileServicesOpen"
                >
                  <span>{{ link.label }}</span>
                  <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileServicesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Mobile Dropdown Content -->
                <div v-if="mobileServicesOpen" class="mt-2 ml-4 space-y-2">
                  <!-- Services -->
                  <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                    Our Services
                  </div>
                  <NuxtLink
                    v-for="service in servicesDropdown"
                    :key="service.to"
                    :to="service.to"
                    class="block px-4 py-2 text-sm text-gray-700 hover:text-[#7fc540] hover:bg-gray-50 rounded-lg transition-colors"
                    @click="isMenuOpen = false"
                  >
                    {{ service.label }}
                  </NuxtLink>

                  <!-- Conditions -->
                  <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 mt-3">
                    Conditions We Treat
                  </div>
                  <NuxtLink
                    v-for="condition in conditionsDropdown"
                    :key="condition.to"
                    :to="condition.to"
                    class="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors"
                    @click="isMenuOpen = false"
                  >
                    {{ condition.label }}
                  </NuxtLink>
                </div>
              </div>
            </template>

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
const showDropdown = ref(false)
const mobileServicesOpen = ref(false)

const phoneNumber = '+234 (902) 486-6554'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]

const servicesDropdown = [
  { label: 'Eye Examination', description: 'Complete vision assessment', to: '/services#comprehensive-exam' },
  { label: 'Pediatric Eye Care', description: 'Advanced Child treatment', to: '/services#pediatric-eye-care' },
  { label: 'Vision Correction', description: 'Glasses & contact lenses', to: '/services#contact-lens-services' },
  { label: 'Frames & Lenses', description: 'Quality eyewear selection', to: '/services#optical-dispensing' }
]

const conditionsDropdown = [
  { label: 'Glaucoma', description: 'Pressure-related conditions', to: '/services#glaucoma' },
  { label: 'Myopia', description: 'Nearsightedness treatment', to: '/services#myopia' },
  { label: 'Hyperopia', description: 'Farsightedness care', to: '/services#hyperopia' },
  { label: 'Astigmatism', description: 'Irregular cornea correction', to: '/services#astigmatism' }
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
watch(() => isMenuOpen.value, (newValue: any) => {
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