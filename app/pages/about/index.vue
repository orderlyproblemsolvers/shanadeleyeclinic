<template>
  <div class="bg-white overflow-x-hidden">
    <!-- Hero Section with Gradient Background -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-orange-50"/>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#7fc540] rounded-full blur-3xl animate-float"/>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6900] rounded-full blur-3xl animate-float-delayed"/>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center mb-6">
          <img src="/img/shanadel-lg.webp" alt="Shanadel Eye Clinic Logo" class="h-20 w-auto">
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight animate-slide-up">
          About Shanadel Eye Clinic
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-8 animate-slide-up-delayed">
          Where Expertise Meets Empathy
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Every great story begins with a vision, and at Shanadel Eye Clinic, ours was simple yet powerful: 
          <strong class="text-gray-900">To make quality eye care accessible to everyone, regardless of background or income.</strong> 
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
              <div class="diagonal-pattern-top w-full h-full"/>
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
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#7fc540]/20 rounded-full blur-2xl"/>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"/>
              
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
              <div class="diagonal-pattern-bottom w-full h-full"/>
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
              From that question grew a mission: to offer exceptional, affordable, and compassionate eye care that transforms lives. What started as a small clinic with a big dream has evolved into a trusted destination for individuals and families seeking not just treatment, but care that feels personal.
            </p>
            <p class="text-gray-600 leading-relaxed mb-8 text-lg">
              Our patients aren't just numbers on a chart; they are stories, dreams, and futures we're privileged to protect. Over the years, our team has earned a reputation for excellence, compassion, and community service.
            </p>
            
            <div class="space-y-5">
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-award" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Clinical Excellence</h3>
                  <p class="text-gray-600 text-sm">Using cutting-edge technology for accurate diagnosis and treatment</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-heart-handshake" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Patient-Centered Service</h3>
                  <p class="text-gray-600 text-sm">Where warmth meets professionalism in every interaction</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl hover:shadow-md transition-all duration-300">
                <div class="flex-shrink-0 w-12 h-12 bg-[#7fc540] rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-users" class="text-2xl text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Community Outreach</h3>
                  <p class="text-gray-600 text-sm">Bringing vision health to underserved areas across Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"/>
      
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
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#7fc540] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-heart" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
            <p class="text-gray-600">We treat every patient with empathy, dignity, and personal attention they deserve.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#7fc540] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-award" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p class="text-gray-600">We are committed to using advanced diagnostic tools and modern techniques for optimal care.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#7fc540] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-shield-check" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
            <p class="text-gray-600">We are proudly NHIS-accredited and insurance-friendly, making quality care affordable for all.</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 border border-gray-100 hover:border-[#7fc540] hover:-translate-y-2">
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon name="i-lucide-book-open" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Education</h3>
            <p class="text-gray-600">We empower patients with knowledge and guidance to protect their vision for life.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Milestones Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span class="text-[#7fc540] font-semibold text-sm">Our Journey So Far</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Growing Together
          </h2>
          <p class="text-xl text-gray-600">
            From humble beginnings to becoming a trusted name in eye care, here's our journey in numbers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#7fc540] rounded-2xl flex items-center justify-center">
              <UIcon name="i-lucide-calendar-check" class="text-3xl text-white" />
            </div>
            <span class="block text-5xl font-bold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-2">10+</span>
            <span class="text-gray-700 font-semibold">Years of Service</span>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#ff6900] rounded-2xl flex items-center justify-center">
              <UIcon name="i-lucide-glasses" class="text-3xl text-white" />
            </div>
            <span class="block text-5xl font-bold bg-gradient-to-r from-[#ff6900] to-[#ff8534] bg-clip-text text-transparent mb-2">500+</span>
            <span class="text-gray-700 font-semibold">Frame Styles</span>
          </div>

          <div class="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#7fc540] rounded-2xl flex items-center justify-center">
              <UIcon name="i-lucide-users" class="text-3xl text-white" />
            </div>
            <span class="block text-5xl font-bold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-2">10K+</span>
            <span class="text-gray-700 font-semibold">Happy Patients</span>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#ff6900] rounded-2xl flex items-center justify-center">
              <UIcon name="i-lucide-smile" class="text-3xl text-white" />
            </div>
            <span class="block text-5xl font-bold bg-gradient-to-r from-[#ff6900] to-[#ff8534] bg-clip-text text-transparent mb-2">1000s</span>
            <span class="text-gray-700 font-semibold">Smiles Restored</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Facilities Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-emerald-50"/>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <span class="text-[#7fc540] font-semibold text-sm">State-of-the-Art Care</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Clinic & Facilities
            </h2>
            <p class="text-gray-600 leading-relaxed mb-6 text-lg">
              We have invested in a welcoming, comfortable space and the advanced technology needed for modern eye care. From your initial exam to specialized ocular imaging, our clinic is equipped to provide a complete, data-driven analysis of your visual system.
            </p>
            <p class="text-gray-600 leading-relaxed mb-10 text-lg">
              Our facilities feature the latest diagnostic equipment, a wide selection of fashionable frames, and a warm environment where patients feel valued and cared for. We believe that quality eye care should be both technologically advanced and personally comforting.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div class="p-3 bg-[#7fc540]/10 rounded-xl">
                  <UIcon name="i-lucide-microscope" class="text-2xl text-[#7fc540]" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Advanced Diagnostic Tools</h3>
                  <p class="text-gray-600 text-sm">Modern equipment for accurate eye health assessment and early detection</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div class="p-3 bg-[#7fc540]/10 rounded-xl">
                  <UIcon name="i-lucide-sparkles" class="text-2xl text-[#7fc540]" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Comfortable Environment</h3>
                  <p class="text-gray-600 text-sm">Welcoming spaces designed for your comfort and peace of mind</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div class="p-3 bg-[#7fc540]/10 rounded-xl">
                  <UIcon name="i-lucide-eye" class="text-2xl text-[#7fc540]" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">Extensive Frame Collection</h3>
                  <p class="text-gray-600 text-sm">Over 500 stylish frames combining function, fashion, and quality</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <!-- Diagonal Lines Pattern Background - Top -->
            <div class="absolute -top-20 -left-8 -right-8 h-32 overflow-hidden opacity-20 pointer-events-none">
              <div class="diagonal-pattern-top w-full h-full"/>
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
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#7fc540]/20 rounded-full blur-2xl"/>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"/>
            </div>
            
            <!-- Diagonal Lines Pattern Background - Bottom -->
            <div class="absolute -bottom-20 -left-8 -right-8 h-32 overflow-hidden opacity-20 pointer-events-none">
              <div class="diagonal-pattern-bottom w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block px-4 py-2 bg-orange-50 rounded-full mb-6">
            <span class="text-[#ff6900] font-semibold text-sm">Why Shanadel?</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Sets Us Apart
          </h2>
          <p class="text-xl text-gray-600">
            We're more than just an eye clinic. We're your partners in vision health, committed to excellence in every aspect of care.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-badge-check" class="text-2xl text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">NHIS-Approved & Insurance-Friendly</h3>
                <p class="text-gray-600 leading-relaxed">
                  We're proudly NHIS-accredited, ensuring our patients can access high-quality care without financial stress. We accept various insurance plans for your convenience.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-graduation-cap" class="text-2xl text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Patient Education & Empowerment</h3>
                <p class="text-gray-600 leading-relaxed">
                  We believe informed patients make better decisions. Our team takes time to educate you about your eye health and treatment options.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-baby" class="text-2xl text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Family-Friendly Care</h3>
                <p class="text-gray-600 leading-relaxed">
                  From pediatric eye care to senior vision management, we provide specialized services for every member of your family.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-heart-handshake" class="text-2xl text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Community Impact</h3>
                <p class="text-gray-600 leading-relaxed">
                  Through our outreach programs, we regularly provide screenings and education to schools and underserved communities across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#7fc540] to-[#6ab030]"/>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"/>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"/>
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
          If you have any questions or would like to schedule an appointment, we're just a call away.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-gray-50 text-[#7fc540] font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl rounded-2xl"
          >
            <UIcon name="i-lucide-calendar" />
            Book Your Appointment
          </NuxtLink>
          <a
            href="tel:+2349024866554"
            class="inline-flex items-center gap-2 px-12 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg transition-all duration-300 border-2 border-white rounded-2xl"
          >
            <UIcon name="i-lucide-phone" />
            +234 902 486 6554
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOgImageComponent('InfoPages', {
  title:'Quality Eye Care Services'
})
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
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
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