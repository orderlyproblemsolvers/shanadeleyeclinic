<template>
  <section class="relative w-full py-16 lg:py-24" id="services-section">
    <div class="absolute inset-0 z-0">
      <img src="/img/consult.jpg" alt="Shanadel Eye Clinic interior" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gray-900/80" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          How Can We Help You See Better?
        </h2>
        <p class="text-lg text-gray-200">
          Don't ignore the small signs. Our expert team is here to find the cause and restore your comfort and clarity.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:border-[#7fc540] hover:bg-white/10"
        >
          <div class="mb-4">
            <UIcon :name="problem.icon" class="text-4xl" style="color: #ff6900" />
          </div>
          
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ problem.title }}
          </h3>
          
          <p class="text-gray-300 mb-5 text-sm">
            {{ problem.description }}
          </p>
          
          <NuxtLink 
            :to="`/services/${problem.slug}`"
            class="font-semibold text-[#7fc540] hover:text-[#6ab030] transition-colors duration-200 text-sm"
          >
            Find the Solution &rarr;
          </NuxtLink>
        </div>

      </div>

      <div class="mt-16 lg:mt-24">
        <hr class="border-t border-white/10 max-w-2xl mx-auto mb-16 lg:mb-20" />

        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-semibold text-white">
            Our Full Range of Services
          </h3>
          <p class="text-gray-300 mt-2">All treatments are NHIS-Approved and insurance-friendly.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-6xl mx-auto">
          <div 
            v-for="service in services" 
            :key="service" 
            class="flex items-center gap-3"
          >
            <UIcon name="i-lucide-check-circle" class="text-lg flex-shrink-0" style="color: #7fc540" />
            <span class="text-gray-200 text-base">{{ service }}</span>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- Problem-Aware Cards ---
interface Problem {
  title: string
  description: string
  icon: string
  slug: string
}

const problems: Problem[] = [
  {
    title: 'Blurry Vision or Headaches?',
    description: 'This can be a sign of an outdated prescription or digital eye strain. We\'ll find the precise cause.',
    icon: 'i-lucide-eye',
    slug: 'eye-examination'
  },
  {
    title: 'Dry, Itchy, or Red Eyes?',
    description: 'Constant screen use or allergies can cause discomfort. We offer modern solutions for lasting relief.',
    icon: 'i-lucide-droplet',
    slug: 'dry-eye-management'
  },
  {
    title: 'Trouble Seeing at Night?',
    description: 'Don\'t ignore difficulty with night driving. Let us check for underlying conditions like glaucoma or cataracts.',
    icon: 'i-lucide-moon-star',
    slug: 'glaucoma-management'
  },
  {
    title: 'Worried About Your Child?',
    description: 'Good vision is key to learning. We offer gentle, kid-friendly exams to ensure they see the world clearly.',
    icon: 'i-lucide-smile',
    slug: 'pediatric-care'
  }
]

// --- NEW - Full Service List ---
// Based on both the provided document and the live website.
const services = ref([
  'Comprehensive Eye Examinations', //
  'Optical Lens & Frame Dispensing', //
  'Contact Lens Services', //
  'Pediatric Eye Care', //
  'Glaucoma & Cataract Management', //
  'Dry Eye Management', //
  'Digital Eye Strain Solutions', //
  'Allergy & Infection Treatment', //
  'Specialized Procedures', //
  'Ocular Imaging & Visual Field Testing', //
  'Low Vision Rehabilitation', //
  'Outreach & Community Vision Programs' //
])
</script>

<style scoped>
/* No additional styles needed; Tailwind classes are sufficient. */
</style>