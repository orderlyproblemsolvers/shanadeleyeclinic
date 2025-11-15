<template>
  <section class="relative bg-gradient-to-b from-white via-gray-50/50 to-white py-20 lg:py-32 overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-[#7fc540]/5 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Image Section with enhanced styling and diagonal pattern -->
        <div class="w-full animate-fade-in-left">
          <div class="relative">
            
            <!-- Diagonal Lines Pattern Background - Top -->
            <div class="absolute -top-20 -left-8 -right-8 h-32 overflow-hidden opacity-20 pointer-events-none">
              <div class="diagonal-pattern-top w-full h-full"></div>
            </div>
            
            <!-- Main image container -->
            <div class="relative group">
              <!-- Main image -->
              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/img/Shanadelout.jpg" 
                  alt="Dr. Zephyr Alabegbe, founder of Shanadel Eye Clinic" 
                  class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                >
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#7fc540]/20 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
              
              <!-- Floating badge -->
              <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 transform group-hover:scale-110 transition-transform duration-300 z-10">
                <div class="flex items-center gap-3">
                  <div class="p-3 bg-[#7fc540]/10 rounded-xl">
                    <UIcon name="i-lucide-award" class="text-3xl text-[#7fc540]" />
                  </div>
                  <div>
                    <p class="text-2xl font-bold text-gray-900">19+</p>
                    <p class="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Diagonal Lines Pattern Background - Bottom -->
            <div class="absolute -bottom-20 -left-8 -right-8 h-32 overflow-hidden opacity-20 pointer-events-none">
              <div class="diagonal-pattern-bottom w-full h-full"></div>
            </div>
            
          </div>
        </div>

        <!-- Content Section -->
        <div class="animate-fade-in-right">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#7fc540]/10 backdrop-blur-sm border border-[#7fc540]/20 rounded-full text-sm font-medium text-gray-700 mb-6">
            <span class="w-2 h-2 bg-[#7fc540] rounded-full animate-pulse"></span>
            About Shanadel Eye Clinic
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Expertise Meets 
            <span class="block mt-2 bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent">
              Empathy
            </span>
          </h2>
          
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            At Shanadel, you aren't just a number on a chart; you are a story we're privileged to protect. Founded by <span class="font-semibold text-gray-900">Dr. Zephyr Alabegbe</span>, our mission began with a simple question: <span class="italic">"What if everyone could see the world clearly?"</span> We provide patient-centered service where warmth meets professionalism.
          </p>

          <!-- Feature list with enhanced styling -->
          <ul class="space-y-5 mb-10">
            <li class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div class="p-2 bg-[#7fc540]/10 rounded-xl flex-shrink-0 group-hover:bg-[#7fc540]/20 group-hover:scale-110 transition-all">
                <UIcon name="i-lucide-check-circle" class="text-xl text-[#7fc540]" />
              </div>
              <span class="text-gray-700 text-lg leading-relaxed">
                <span class="font-semibold text-gray-900">Clinical excellence</span> and cutting-edge technology for accurate diagnosis and treatment.
              </span>
            </li>
            <li class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div class="p-2 bg-[#7fc540]/10 rounded-xl flex-shrink-0 group-hover:bg-[#7fc540]/20 group-hover:scale-110 transition-all">
                <UIcon name="i-lucide-check-circle" class="text-xl text-[#7fc540]" />
              </div>
              <span class="text-gray-700 text-lg leading-relaxed">
                <span class="font-semibold text-gray-900">Community outreach</span>, bringing vision health to underserved areas across Nigeria.
              </span>
            </li>
            <li class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div class="p-2 bg-[#7fc540]/10 rounded-xl flex-shrink-0 group-hover:bg-[#7fc540]/20 group-hover:scale-110 transition-all">
                <UIcon name="i-lucide-check-circle" class="text-xl text-[#7fc540]" />
              </div>
              <span class="text-gray-700 text-lg leading-relaxed">
                <span class="font-semibold text-gray-900">Compassionate care</span> that treats every patient with dignity and respect.
              </span>
            </li>
          </ul>

          <!-- Enhanced CTA Button -->
          <NuxtLink
            to="/about"
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7fc540] to-[#6ab030] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-[#7fc540]/30 text-base md:text-lg overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Meet Dr. Alabegbe & Our Team
              <UIcon name="i-lucide-arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </NuxtLink>

          <!-- Trust indicators -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div class="text-center group cursor-pointer">
              <p class="text-3xl md:text-4xl font-bold text-[#7fc540] mb-1 group-hover:scale-110 transition-transform">1K+</p>
              <p class="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div class="text-center group cursor-pointer">
              <p class="text-3xl md:text-4xl font-bold text-[#7fc540] mb-1 group-hover:scale-110 transition-transform">19+</p>
              <p class="text-sm text-gray-600">Years of Service</p>
            </div>
            <div class="text-center group cursor-pointer">
              <p class="text-3xl md:text-4xl font-bold text-[#7fc540] mb-1 group-hover:scale-110 transition-transform">98%</p>
              <p class="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  </section>
</template>

<script setup>
// No script setup needed for this static component
</script>

<style scoped>
/* Diagonal pattern for top */
.diagonal-pattern-top {
  background-image: 
    repeating-linear-gradient(
      45deg,
      #7fc540 0px,
      #7fc540 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      -45deg,
      #7fc540 0px,
      #7fc540 1px,
      transparent 1px,
      transparent 12px
    );
}

/* Diagonal pattern for bottom */
.diagonal-pattern-bottom {
  background-image: 
    repeating-linear-gradient(
      45deg,
      #ff6900 0px,
      #ff6900 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      -45deg,
      #ff6900 0px,
      #ff6900 1px,
      transparent 1px,
      transparent 12px
    );
}

/* Floating animations for background elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(30px) translateX(-20px);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 15s ease-in-out infinite;
}

/* Fade in animations from sides */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-fade-in-right {
  opacity: 0;
  animation: fadeInRight 0.8s ease-out forwards;
  animation-delay: 0.4s;
}
</style>