<template>
  <div class="bg-white">
    <!-- Hero Section -->
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
          Get in Touch
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent mb-8 animate-slide-up-delayed">
          We're Here to Help
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Have questions about your vision? Ready to book an appointment? 
          <strong class="text-gray-900">Our friendly team is standing by to assist you.</strong> 
          Reach out to us through any of the channels below.
        </p>
      </div>
    </section>

    <!-- Contact Info Bar -->
    <div class="w-full bg-orange-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6 text-white">
          <a href="tel:+2349024866554" class="flex items-center gap-2 font-bold hover:text-gray-100 transition-colors">
            <UIcon name="i-lucide-phone" class="text-xl" />
            <span>+234 902 486 6554</span>
          </a>
          <a href="mailto:shanadeleyeclinic@gmail.com" class="flex items-center gap-2 font-bold hover:text-gray-100 transition-colors">
            <UIcon name="i-lucide-mail" class="text-xl" />
            <span class="hidden sm:inline">shanadeleyeclinic@gmail.com</span>
            <span class="sm:hidden">Email Us</span>
          </a>
          <div class="flex items-center gap-2 font-bold">
            <UIcon name="i-lucide-clock" class="text-xl" />
            <span>Mon-Sat: 9AM - 6PM</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <section class="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#7fc540]/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(127,197,64,0.3)_10px,rgba(127,197,64,0.3)_20px)]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
            Send Us a Message
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Fill out the form and we'll get back to you within 24 hours
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 animate-fade-in-up">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name and Email -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="group">
                    <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                      <UIcon name="i-lucide-user" class="text-[#7fc540]" />
                      Full Name *
                    </label>
                    <input
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div class="group">
                    <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                      <UIcon name="i-lucide-mail" class="text-[#7fc540]" />
                      Email Address *
                    </label>
                    <input
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div class="group">
                  <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                    <UIcon name="i-lucide-phone" class="text-[#7fc540]" />
                    Phone Number *
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <!-- Subject -->
                <div class="group">
                  <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                    <UIcon name="i-lucide-bookmark" class="text-[#7fc540]" />
                    Subject
                  </label>
                  <input
                    v-model="formData.subject"
                    type="text"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <!-- Message -->
                <div class="group">
                  <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                    <UIcon name="i-lucide-message-square" class="text-[#7fc540]" />
                    Message *
                  </label>
                  <textarea
                    v-model="formData.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="group relative w-full px-8 py-5 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform shadow-lg overflow-hidden bg-gradient-to-r from-[#7fc540] to-[#6ab030] hover:scale-105 hover:shadow-2xl hover:shadow-[#7fc540]/30"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <UIcon name="i-lucide-send" class="group-hover:rotate-12 transition-transform" />
                    Send Message
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <!-- Success Message -->
                <div v-if="showSuccess" class="p-4 bg-[#7fc540]/20 border border-[#7fc540]/30 rounded-xl flex items-start gap-3 animate-fade-in">
                  <UIcon name="i-lucide-check-circle" class="text-[#7fc540] text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 class="text-white font-semibold mb-1">Message Sent!</h4>
                    <p class="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Sidebar Information -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Contact Card -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up" style="animation-delay: 200ms">
              <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                  <UIcon name="i-lucide-phone-call" class="text-[#7fc540]" />
                </div>
                Need Help?
              </h4>
              
              <div class="space-y-4">
                <div class="group">
                  <p class="text-sm text-gray-400 mb-2">Call us directly</p>
                  <a
                    href="tel:+2349024866554"
                    class="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-[#7fc540]/30"
                  >
                    <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                      <UIcon name="i-lucide-phone" class="text-[#7fc540]" />
                    </div>
                    <div>
                      <p class="font-semibold text-white">+234 902 486 6554</p>
                      <p class="text-sm text-gray-400">Mon-Fri, 9AM-6PM</p>
                    </div>
                  </a>
                </div>

                <div class="group">
                  <p class="text-sm text-gray-400 mb-2">Email us</p>
                  <a
                    href="mailto:shanadeleyeclinic@gmail.com"
                    class="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-[#7fc540]/30"
                  >
                    <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                      <UIcon name="i-lucide-mail" class="text-[#7fc540]" />
                    </div>
                    <div>
                      <p class="font-semibold text-white break-all">shanadeleyeclinic@gmail.com</p>
                      <p class="text-sm text-gray-400">We reply within 24hrs</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up" style="animation-delay: 400ms">
              <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                  <UIcon name="i-lucide-clock" class="text-[#7fc540]" />
                </div>
                Office Hours
              </h4>
              <div class="space-y-3">
                <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                  <span class="text-gray-300 font-medium">Monday - Friday</span>
                  <span class="text-white font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                  <span class="text-gray-300 font-medium">Saturday</span>
                  <span class="text-white font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                  <span class="text-gray-300 font-medium">Sunday</span>
                  <span class="text-red-500 font-semibold">Closed</span>
                </div>
                <div class="pt-3 border-t border-white/10 mt-3">
                  <div class="flex items-center gap-2 text-sm text-gray-300 p-3 bg-white/5 rounded-xl">
                    <UIcon name="i-lucide-zap" class="text-orange-500" />
                    <span>24/7 Emergency services available</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Locations -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up" style="animation-delay: 600ms">
              <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                  <UIcon name="i-lucide-map-pin" class="text-[#7fc540]" />
                </div>
                Our Locations
              </h4>
              <div class="space-y-4">
                <div class="flex items-start gap-3 group">
                  <div class="p-2 bg-[#7fc540]/20 rounded-lg flex-shrink-0 group-hover:bg-[#7fc540]/30 transition-colors">
                    <div class="w-2 h-2 bg-[#7fc540] rounded-full"></div>
                  </div>
                  <div>
                    <h5 class="font-semibold text-white mb-1">Abuja Office</h5>
                    <p class="text-sm text-gray-400">Suite A4, Triple H Plaza, off Agunwa Anaekwe Street, Wuye, Abuja</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 group">
                  <div class="p-2 bg-orange-500/20 rounded-lg flex-shrink-0 group-hover:bg-orange-500/30 transition-colors">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h5 class="font-semibold text-white mb-1">Lagos Office</h5>
                    <p class="text-sm text-gray-400">6 Femi Soluade St, Ogudu GRA Lagos, Lagos State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems Section -->
    <section class="relative w-full py-16 lg:py-24">
      <div class="absolute inset-0 z-0">
        <img src="/img/consult.jpg" alt="Shanadel Eye Clinic interior" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gray-900/80" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-gray-200">
            Quick answers to common questions about our services
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:border-[#7fc540] hover:bg-white/10">
            <div class="mb-4">
              <UIcon name="i-lucide-help-circle" class="text-4xl text-[#7fc540]" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              How often should I have an eye test?
            </h3>
            <p class="text-gray-300 text-sm">
              We recommend having a comprehensive eye examination at least once every 12-24 months, depending on your age and any existing conditions.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:border-[#7fc540] hover:bg-white/10">
            <div class="mb-4">
              <UIcon name="i-lucide-smile" class="text-4xl text-[#7fc540]" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Do you treat children?
            </h3>
            <p class="text-gray-300 text-sm">
              Yes! We offer gentle, specialized pediatric eye care for kids of all ages in a comfortable, child-friendly environment.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:border-[#7fc540] hover:bg-white/10">
            <div class="mb-4">
              <UIcon name="i-lucide-shield-check" class="text-4xl text-[#7fc540]" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Can I use my NHIS or health insurance?
            </h3>
            <p class="text-gray-300 text-sm">
              Absolutely. We are NHIS-approved and accept various insurance plans. Please bring your insurance card for verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const showSuccess = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  showSuccess.value = true
  
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    showSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
/* Floating animations */
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

/* Fade in animations */
@keyframes fadeInUp {
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

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;


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