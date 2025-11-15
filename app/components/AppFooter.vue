<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <NuxtImg
            src="/img/shanadel-light.png"
            alt="Shanadel Eye Clinic"
            class="h-10 w-auto mb-4"
          />
          <p class="text-sm text-gray-400 leading-relaxed">
            Providing exceptional eye care services with cutting-edge technology and compassionate professionals.
          </p>
          <div class="flex gap-4 mt-6">
            <a href="https://web.facebook.com/shanadeleyeclinicltd/?_rdc=1&_rdr#" aria-label="Visit our Facebook page" class="text-gray-400 hover:text-[#7fc540] transition-colors duration-200">
              <UIcon name="i-lucide-facebook" class="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/shanadeleyecliniclimited/" aria-label="Visit our Instagram page" class="text-gray-400 hover:text-[#7fc540] transition-colors duration-200">
              <UIcon name="i-lucide-instagram" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm hover:text-[#7fc540] transition-colors duration-200"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in servicesLinks" :key="service.to">
              <NuxtLink
                :to="service.to"
                class="text-sm hover:text-[#7fc540] transition-colors duration-200"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li aria-label="Shanadel Eye Clinic Abuja Location" class="flex items-start gap-2 text-sm">
              <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-[#7fc540] flex-shrink-0 mt-0.5" />
              <span>Suite A4, Triple H Plaza, Wuye, Abuja</span>
            </li>
            <li class="flex items-center gap-2 text-sm">
              <UIcon name="i-lucide-phone" class="w-5 h-5 text-[#7fc540] flex-shrink-0" />
              <a aria-label="Shanadel Eye Clinic's Phone Number"  href="tel:+2349024866554" class="hover:text-[#7fc540] transition-colors duration-200">
                +234 (902) 486-6554
              </a>
            </li>
            <li class="flex items-center gap-2 text-sm">
              <UIcon name="i-lucide-mail" class="w-5 h-5 text-[#7fc540] flex-shrink-0" />
              <a aria-label="Shanadel Eye Clinic's Email" href="mailto:shanadeleyeclinic@gmail.com" class="hover:text-[#7fc540] transition-colors duration-200">
                shanadeleyeclinic@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-400">
          &copy; {{ currentYear }} Shanadel Eye Clinic. All rights reserved.
        </p>
        <div class="flex gap-6">
          <p class="text-sm text-gray-400 hover:text-[#7fc540] transition-colors duration-200">
            Powered by OPS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

// MODIFIED: Synced with your Header's 'navLinks' (excluding Home)
const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]

// MODIFIED: Combined 'servicesDropdown' and 'conditionsDropdown' from your Header
const servicesLinks = [
  { label: 'Eye Examination', to: '/services#comprehensive-exam' },
  { label: 'Pediatric Eye Care', to: '/services#pediatric-eye-care' },
  { label: 'Vision Correction', to: '/services#contact-lens-services' },
  { label: 'Frames & Lenses', to: '/services#optical-dispensing' },
  { label: 'Glaucoma', to: '/services#glaucoma' },
  { label: 'Myopia', to: '/services#myopia' },
]

// I've also added UIcons for the social links and proper aria-labels
// I also changed the placeholder address to one from your appointments form
</script>