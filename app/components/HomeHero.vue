<template>
  <section class="main relative w-full h-[80dvh] flex items-center justify-center overflow-hidden mt-[10vh]">
    <!-- Animated gradient overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent animate-gradient" />
      <!-- Animated accent circles -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-[#7fc540]/20 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium animate-fade-in">
          <span class="w-2 h-2 bg-[#7fc540] rounded-full animate-pulse"></span>
          Trusted Eye Care Since 2010
        </div>

        <!-- Main heading with stagger animation -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up">
          Quality Eye Care,
          <span class="block mt-2 bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent animate-slide-up-delayed">
            Accessible to Everyone
          </span>
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
          Expert, affordable, and compassionate care to help you see the world clearly.
        </p>
        
        <!-- Location badge -->
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-200 animate-fade-in-delayed">
          <UIcon name="i-lucide-map-pin" class="text-[#7fc540]" />
          <p class="font-medium">Abuja, Nigeria</p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-12 animate-fade-in-delayed">
          <NuxtLink
            to="/contact"
            class="group relative px-8 py-4 bg-gradient-to-r from-[#7fc540] to-[#6ab030] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7fc540]/50 w-full sm:w-auto overflow-hidden"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              Book Your Eye Test Today
              <UIcon name="i-lucide-arrow-right" class="transition-transform group-hover:translate-x-1" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </NuxtLink>
          
          <NuxtLink
            to="/about"
            class="hidden md:inline-flex lg:inline-flex group px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 w-full sm:w-auto hover:shadow-xl"
          >
            <span class="flex items-center justify-center gap-2">
              Learn More About Us
              <UIcon name="i-lucide-info" class="transition-transform group-hover:rotate-12" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Info bar with enhanced styling -->
  <div class="w-full py-6 lg:py-7 bg-gradient-to-r from-orange-500 to-orange-600 flex flex-col md:flex-row items-center justify-center md:justify-around text-white gap-6 md:gap-0 shadow-xl relative overflow-hidden">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
    </div>

    <div class="relative flex items-center justify-center font-semibold gap-3 group hover:scale-105 transition-transform duration-300">
      <div class="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
        <UIcon name="i-lucide-clock" class="text-xl" />
      </div>
      <p class="text-sm md:text-base">Mon - Fri 8.00am WAT, Sat 8.30am - 17.30pm WAT</p>
    </div>

    <div class="relative flex justify-center gap-6 md:gap-8">
      <div class="flex items-center justify-center font-semibold gap-2 group hover:scale-105 transition-transform duration-300">
        <div class="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
          <UIcon name="i-lucide-check" class="text-lg" />
        </div>
        <p class="text-sm md:text-base">Expert Doctors</p>
      </div>
      <div class="flex items-center justify-center font-semibold gap-2 group hover:scale-105 transition-transform duration-300">
        <div class="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
          <UIcon name="i-lucide-check" class="text-lg" />
        </div>
        <p class="text-sm md:text-base">Quality Service</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any reactive data or methods here if needed
</script>

<style scoped>
section {
  min-height: 80dvh;
  background: url('/img/shero.webp') center center/cover no-repeat;
}

/* Animated gradient overlay */
@keyframes gradient {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-gradient {
  animation: gradient 8s ease-in-out infinite;
}

/* Floating animations for background elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-10px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}

/* Content animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-slide-up-delayed {
  opacity: 0;
  animation: slideUp 0.8s ease-out 0.2s forwards;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delayed {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.4s forwards;
}
</style>