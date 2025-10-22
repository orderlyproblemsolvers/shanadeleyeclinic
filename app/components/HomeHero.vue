<template>
  <section class="main relative w-full h-[80dvh] flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <!-- <NuxtImg
        src="img/hero.jpg"
        alt="Shanadel Eye Clinic"
        class="w-full h-full object-cover object-center"
        format="webp"
        quality="80"
        loading="eager"
        sizes="100vw"
      /> -->
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/30 bg-opacity-10"/>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Clear Vision, <span class="text-[#7fc540]">Bright Future</span>
        </h1>

        <!-- Subheading -->
        <p class="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Expert eye care services with state-of-the-art technology and compassionate professionals
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/contact"
            class="px-8 py-4 bg-[#7fc540] hover:bg-[#6ab030] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto"
          >
            Book a Consultation
          </NuxtLink>
          
          <NuxtLink
            to="/services"
            class="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-semibold rounded-lg transition-all duration-200 border-2 border-white w-full sm:w-auto"
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