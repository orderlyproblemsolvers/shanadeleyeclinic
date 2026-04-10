<template>
  <section class="relative bg-white py-16 lg:py-24 overflow-hidden">

    <div class="absolute top-0 left-0 w-80 h-80 bg-[#7fc540]/6 rounded-full blur-3xl animate-float pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- LEFT: Image -->
        <div class="animate-fade-in-left">
          <div class="relative group">

            <!-- Decorative blobs -->
            <div class="absolute -top-4 -left-4 w-20 h-20 bg-[#7fc540]/20 rounded-full blur-2xl pointer-events-none" />
            <div class="absolute -bottom-4 -right-4 w-28 h-28 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

            <!-- Image -->
            <div class="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/img/Shanadelout.jpg"
                alt="Dr. Zephyr Alabegbe, founder of Shanadely Eye Clinic"
                class="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl px-5 py-4 z-10 border border-gray-100">
              <div class="flex items-center gap-3">
                <div class="p-2.5 bg-[#7fc540]/10 rounded-lg">
                  <UIcon name="i-lucide-award" class="text-2xl text-[#7fc540]" />
                </div>
                <div>
                  <p class="text-xl font-bold text-gray-900 leading-none">19+</p>
                  <p class="text-xs text-gray-500 mt-0.5">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Content -->
        <div class="animate-fade-in-right flex flex-col gap-6">

          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7fc540]/10 border border-[#7fc540]/20 rounded-full text-xs font-medium text-gray-600 w-fit">
            <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full animate-pulse"></span>
            About Shanadely Eye Clinic
          </div>

          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Where Expertise Meets
            <span class="bg-linear-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent"> Empathy</span>
          </h2>

          <!-- Body -->
          <p class="text-base text-gray-500 leading-relaxed">
            At Shanadely, you aren't just a number on a chart — you are a story we're privileged to protect. Founded by
            <span class="font-semibold text-gray-800">Dr. Zephyr Alabegbe</span>, our mission began with a simple question:
            <em>"What if everyone could see the world clearly?"</em>
            We provide patient-centered service where warmth meets professionalism.
          </p>

          <!-- Feature list -->
          <ul class="flex flex-col gap-3">
            <li
              v-for="feature in features"
              :key="feature.title"
              class="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#7fc540]/30 hover:bg-[#7fc540]/3 transition-all duration-200"
            >
              <div class="p-1.5 bg-[#7fc540]/10 rounded-lg shrink-0 mt-0.5">
                <UIcon name="i-lucide-check" class="text-sm text-[#7fc540]" />
              </div>
              <span class="text-sm text-gray-600 leading-relaxed">
                <span class="font-semibold text-gray-800">{{ feature.title }}</span>
                {{ feature.body }}
              </span>
            </li>
          </ul>

          <!-- CTA -->
          <div>
            <NuxtLink
              to="/about"
              class="group inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-[#7fc540] to-[#6ab030] text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7fc540]/25 overflow-hidden relative"
            >
              <span class="relative z-10 flex items-center gap-2">
                Meet Dr. Alabegbe & Our Team
                <UIcon name="i-lucide-arrow-right" class="transition-transform group-hover:translate-x-1" />
              </span>
              <div class="absolute inset-0 bg-linear-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <p class="text-2xl md:text-3xl font-bold text-[#7fc540]">{{ stat.value }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ stat.label }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Clinical excellence —',
    body: 'cutting-edge technology for accurate diagnosis and treatment.',
  },
  {
    title: 'Community outreach —',
    body: 'bringing vision health to underserved areas across Nigeria.',
  },
  {
    title: 'Compassionate care —',
    body: 'treating every patient with dignity and respect.',
  },
]

const stats = [
  { value: '1K+', label: 'Happy Patients' },
  { value: '19+', label: 'Years of Service' },
  { value: '98%', label: 'Satisfaction Rate' },
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-24px) translateX(16px); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(24px) translateX(-16px); }
}
.animate-float { animation: float 12s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 15s ease-in-out infinite; }

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out 0.2s forwards;
}
.animate-fade-in-right {
  opacity: 0;
  animation: fadeInRight 0.8s ease-out 0.4s forwards;
}
</style>