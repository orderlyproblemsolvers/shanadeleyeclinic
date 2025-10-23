<template>
  <section class="main relative w-full h-[80dvh] flex items-center justify-center overflow-hidden mt-[10vh]">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-green-900/60 bg-opacity-20"/>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <p class="text-md md:text-xl lg:text-xl text-gray-200 mb-2 max-w-2xl mx-auto">
          <em>Our Vision is Your Vision</em>
        </p>
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Opthamology Specialists
        </h1>

        <!-- Subheading -->
        <p class="text-lg md:text-xl lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We Preserve, Enhance, and Protect Your Vision with Expert Care.
        </p>
        <div class="flex justify-center items-center text-md md:text-lg lg:text-lg text-gray-200 mb-8 max-w-2xl mx-auto"><UIcon name="i-lucide-map-pin"/><p>Abuja, Nigeria</p></div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/contact"
            class="px-8 py-4 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold  transition-all duration-200 transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto"
          >
            Book a Consultation
          </NuxtLink>
          
          <NuxtLink
            to="/services"
            class="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-black font-semibold transition-all duration-200 border-2 border-white w-full sm:w-auto"
          >
            Our Services
          </NuxtLink>
        </div>

     
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Add any reactive data or methods here if needed
</script>

<style scoped>
/* Ensure proper height calculation */
section {
  min-height: 80dvh;
  background: url('/img/hero.jpg') center center/cover no-repeat;
}

/* Smooth animation for scroll indicator */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>