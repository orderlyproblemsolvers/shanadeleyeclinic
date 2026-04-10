<template>
  <section id="services-section" class="relative w-full py-16 lg:py-24">
    <div class="absolute inset-0 z-0">
      <img src="/img/consult.webp" alt="Shanadely Eye Clinic interior" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gray-950/85" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-gray-300 mb-4">
          <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full"></span>
          Expert Care, Every Visit
        </span>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
          How Can We Help You See Better?
        </h2>
        <p class="text-base text-gray-400 leading-relaxed">
          Don't ignore the small signs. Our expert team is here to find the cause and restore your comfort and clarity.
        </p>
      </div>

      <!-- Problem cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="group flex flex-col bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#7fc540]/60 hover:bg-white/8"
        >
          <div class="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-5 transition-colors group-hover:bg-orange-500/25">
            <UIcon :name="problem.icon" class="text-xl text-orange-400" />
          </div>

          <h3 class="text-base font-semibold text-white mb-2 leading-snug">
            {{ problem.title }}
          </h3>

          <p class="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
            {{ problem.description }}
          </p>

          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[#7fc540] hover:text-[#6ab030] transition-colors duration-200 group/link"
          >
            Find the Solution
            <UIcon name="i-lucide-arrow-right" class="text-xs transition-transform group-hover/link:translate-x-1" />
          </NuxtLink>
        </div>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-4 my-14 lg:my-20 max-w-2xl mx-auto">
        <div class="flex-1 h-px bg-white/10" />
        <span class="text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">Our Services</span>
        <div class="flex-1 h-px bg-white/10" />
      </div>

      <!-- Services list -->
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-10">
          <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
            Our Full Range of Services
          </h3>
          <p class="text-sm text-gray-400">
            All treatments are
            <span class="text-[#7fc540] font-medium">NHIS-Approved</span>
            and insurance-friendly.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="service in services"
            :key="service"
            class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-200"
          >
            <div class="w-5 h-5 rounded-full bg-[#7fc540]/15 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-check" class="text-[10px] text-[#7fc540]" />
            </div>
            <span class="text-sm text-gray-300">{{ service }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Problem {
  title: string
  description: string
  icon: string
}

const problems: Problem[] = [
  {
    title: 'Blurry Vision or Headaches?',
    description: 'Could be an outdated prescription or digital eye strain. We\'ll find the precise cause and correct it.',
    icon: 'i-lucide-eye',
  },
  {
    title: 'Dry, Itchy, or Red Eyes?',
    description: 'Constant screen use or allergies can cause lasting discomfort. We offer modern solutions for real relief.',
    icon: 'i-lucide-droplet',
  },
  {
    title: 'Trouble Seeing at Night?',
    description: 'Difficulty with night driving shouldn\'t be ignored. We screen for conditions like glaucoma and cataracts.',
    icon: 'i-lucide-moon-star',
  },
  {
    title: 'Worried About Your Child?',
    description: 'Good vision is key to learning. We offer gentle, kid-friendly exams to ensure they see the world clearly.',
    icon: 'i-lucide-smile',
  },
]

const services = [
  'Comprehensive Eye Examinations',
  'Optical Lens & Frame Dispensing',
  'Contact Lens Services',
  'Pediatric Eye Care',
  'Glaucoma & Cataract Management',
  'Dry Eye Management',
  'Digital Eye Strain Solutions',
  'Allergy & Infection Treatment',
  'Specialized Procedures',
  'Ocular Imaging & Visual Field Testing',
  'Low Vision Rehabilitation',
  'Outreach & Community Vision Programs',
]
</script>