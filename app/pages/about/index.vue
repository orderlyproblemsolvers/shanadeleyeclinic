<template>
  <div class="bg-white">
    <!-- Hero Section with Gradient Background -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-orange-50"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#7fc540] rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6900] rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center mb-6">
          <img src="/img/shanadel-lg.png" alt="Shanadel Eye Clinic Logo" class="h-20 w-auto">
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight animate-slide-up">
          About Shanadel Eye Clinic
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-8 animate-slide-up-delayed">
          Where Expertise Meets Empathy
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Every great story begins with a vision, and at Shanadel Eye Clinic, ours was simple yet powerful: 
          <strong class="text-gray-900"> To make quality eye care accessible to everyone, regardless of background or income.</strong> 
          We believe eye care is more than just vision tests; it's about helping people see the world in brighter, sharper ways.
        </p>
      </div>
    </section>

    <!-- Story Section with Enhanced Layout -->
    <section class="py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  src="/img/shero.jpg" 
                  alt="Dr. Zephyr Alabegbe and the Shanadel team" 
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
                    <p class="text-2xl font-bold text-gray-900">15+</p>
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
          
          <div>
            <div class="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <span class="text-[#7fc540] font-semibold text-sm">Our Journey</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Story
            </h2>
            <p class="text-gray-600 leading-relaxed mb-4 text-lg">
              Founded by <strong class="text-gray-900">Dr. Zephyr Alabegbe</strong>, Shanadel began as a heartfelt response to one question: "What if every person, no matter where they live or what they earn, could see the world clearly?"
            </p>
            <p class="text-gray-600 leading-relaxed mb-4 text-lg">
              From that question grew a mission: to offer exceptional, affordable, and compassionate eye care that transforms lives. What started as a small clinic with a big dream has evolved into a trusted destination for individuals and families.
            </p>
            <p class="text-gray-600 leading-relaxed mb-8 text-lg">
              We hope you enjoy our products and services as much as we enjoy offering them to you. At Shanadel, we measure our success not just by the number of patients we serve, but by the quality of care we provide and the lasting relationships we build with our community.
            </p>
            
            <div class="space-y-5">
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-award" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Clinical Excellence</h3>
                  <p class="text-gray-600 text-sm">Using cutting-edge technology for accurate diagnosis</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-heart-handshake" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Patient-Centered Service</h3>
                  <p class="text-gray-600 text-sm">Where warmth meets professionalism</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-users" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Community Outreach</h3>
                  <p class="text-gray-600 text-sm">Bringing vision health to underserved areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block px-4 py-2 bg-orange-50 rounded-full mb-6">
            <span class="text-[#ff6900] font-semibold text-sm">What Drives Us</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Values
          </h2>
          <p class="text-xl text-gray-600">
            Our mission is to provide accessible, high-quality eye care that empowers our patients. We are guided by these core values in everything we do.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#ff6900] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-heart" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
            <p class="text-gray-600">We treat every patient with empathy and personal attention.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#ff6900] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-award" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p class="text-gray-600">We are committed to advanced diagnostic tools and modern techniques.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#ff6900] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-shield-check" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
            <p class="text-gray-600">We are proudly NHIS-accredited and insurance-friendly.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#ff6900] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-book-open" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Education</h3>
            <p class="text-gray-600">We empower patients with knowledge to protect their vision for life.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span class="text-[#7fc540] font-semibold text-sm">The Experts Behind Your Care</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p class="text-xl text-gray-600">
            Our team combines skill and technology with a genuine passion for patient care.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          <div class="group text-center">
            <div class="relative mb-6 overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-[#7fc540] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              <img 
                src="/img/shero.jpg" 
                alt="Dr. Zephyr Alabegbe" 
                class="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p class="font-semibold">15+ Years Experience</p>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Dr. Zephyr Alabegbe</h3>
            <p class="text-lg font-semibold text-[#7fc540] mb-3">Founder & Lead Optometrist</p>
            <p class="text-gray-600">
              With over 15 years of experience, Dr. Alabegbe founded Shanadel with a passion for community health and accessible eye care for all.
            </p>
          </div>

          <div class="group text-center">
            <div class="relative mb-6 overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-[#7fc540] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              <img 
                src="/img/shero.jpg" 
                alt="Dr. Amina Lawal" 
                class="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p class="font-semibold">Pediatric Specialist</p>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Dr. Amina Lawal</h3>
            <p class="text-lg font-semibold text-[#7fc540] mb-3">Pediatric Optometrist</p>
            <p class="text-gray-600">
              Dr. Lawal specializes in pediatric eye care, ensuring our youngest patients get a comfortable and positive start to a lifetime of healthy vision.
            </p>
          </div>

          <div class="group text-center">
            <div class="relative mb-6 overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-[#7fc540] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              <img 
                src="/img/shero.jpg" 
                alt="Dr. Chidi Okeke" 
                class="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p class="font-semibold">Contact Lens Expert</p>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Dr. Chidi Okeke</h3>
            <p class="text-lg font-semibold text-[#7fc540] mb-3">Contact Lens & Ocular Health Specialist</p>
            <p class="text-gray-600">
              Dr. Okeke brings expertise in managing complex contact lens fittings and the long-term care of conditions like glaucoma and dry eye.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-emerald-50"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <span class="text-[#7fc540] font-semibold text-sm">State-of-the-Art Care</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Clinic & Facilities
            </h2>
            <p class="text-gray-600 leading-relaxed mb-10 text-lg">
              We have invested in a welcoming, comfortable space and the advanced technology needed for modern eye care. From your initial exam to specialized ocular imaging, our clinic is equipped to provide a complete, data-driven analysis of your visual system.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
                <span class="block text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-2">10+</span>
                <span class="text-gray-600 font-medium text-sm sm:text-base">Years of Service</span>
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
                <span class="block text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-2">500+</span>
                <span class="text-gray-600 font-medium text-sm sm:text-base">Frame Styles</span>
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
                <span class="block text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-2">1000s</span>
                <span class="text-gray-600 font-medium text-sm sm:text-base">Eyes Cared For</span>
              </div>
            </div>
          </div>
          
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
                  src="/img/shero.jpg" 
                  alt="Inside Shanadel Eye Clinic" 
                  class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                >
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#7fc540]/20 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            </div>
            
            <!-- Diagonal Lines Pattern Background - Bottom -->
            <div class="absolute -bottom-20 -left-8 -right-8 h-32 overflow-hidden opacity-20 pointer-events-none">
              <div class="diagonal-pattern-bottom w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#7fc540] to-[#6ab030]"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-8 shadow-lg">
          <UIcon name="i-lucide-calendar-check" class="text-4xl text-[#7fc540]" />
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Your Vision is Our Vision
        </h2>
        <p class="text-xl text-white text-opacity-95 mb-10 max-w-2xl mx-auto">
          At Shanadel Eye Clinic, we're here for you every step of the way. Because when you see better, you live better. 
          If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block px-12 py-5 bg-white hover:bg-gray-50 text-[#7fc540] font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl rounded-2xl"
        >
          Book Your Appointment Today
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// This component is static, so no script logic is needed.
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

/* Custom animations for smooth transitions */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

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


.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-slide-up-delayed {
  opacity: 0;
  animation: slideUp 0.8s ease-out 0.2s forwards;
}

</style>