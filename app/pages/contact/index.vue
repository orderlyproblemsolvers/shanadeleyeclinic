<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-orange-50"/>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-[#7fc540] rounded-full blur-3xl"/>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6900] rounded-full blur-3xl"/>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center mb-6">
          <img src="/img/shanadel-lg.webp" alt="Shanadel Eye Clinic Logo" class="h-20 w-auto">
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
    <div class="absolute top-0 left-0 w-96 h-96 bg-[#7fc540]/10 rounded-full blur-3xl animate-float"/>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"/>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(127,197,64,0.3)_10px,rgba(127,197,64,0.3)_20px)]"/>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Minimal Section Header -->
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
          Book Your Appointment
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Schedule your visit with our expert team
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        
        <!-- Main Booking Form -->
        <div class="lg:col-span-2">
          <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10 animate-fade-in-up">
            
            <form class="space-y-6" @submit.prevent="handleSubmit" >
              <!-- Personal Information Section -->
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Full Name -->
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
                  >
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
                  >
                </div>
              </div>

              <!-- Email -->
              <div class="group">
                <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <UIcon name="i-lucide-mail" class="text-[#7fc540]" />
                  Email Address
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                  placeholder="john@example.com"
                >
              </div>

              <!-- Service and Date -->
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Service Selection -->
                <div class="group">
                  <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                    <UIcon name="i-lucide-stethoscope" class="text-[#7fc540]" />
                    Select Service *
                  </label>
                  <select
                    v-model="formData.service"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled class="text-gray-900">Choose a service</option>
                    <option value="Eye Examination" class="text-gray-900">Comprehensive Eye Examination</option>
                    <option value="Cataract Treatment" class="text-gray-900">Cataract Treatment</option>
                    <option value="Glaucoma Management" class="text-gray-900">Glaucoma Management</option>
                    <option value="Vision Correction" class="text-gray-900">Vision Correction</option>
                    <option value="Frames & Lenses" class="text-gray-900">Frames & Lenses Selection</option>
                    <option value="Community Health" class="text-gray-900">Community Eye Health</option>
                    <option value="Other" class="text-gray-900">Other / Not Sure</option>
                  </select>
                </div>

                <!-- Preferred Date -->
                <div class="group">
                  <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                    <UIcon name="i-lucide-calendar-days" class="text-[#7fc540]" />
                    Preferred Date *
                  </label>
                  <input
                    v-model="formData.date"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all"
                  >
                </div>
              </div>

              <!-- Preferred Time -->
              <div class="group">
                <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <UIcon name="i-lucide-clock" class="text-[#7fc540]" />
                  Preferred Time *
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    v-for="time in timeSlots"
                    :key="time"
                    type="button"
                    :class="[
                      'px-4 py-3 rounded-xl border-2 transition-all duration-300 font-medium',
                      formData.time === time
                      ? 'bg-[#7fc540] border-[#7fc540] text-white shadow-lg shadow-[#7fc540]/30'
                      : 'bg-white/10 border-white/20 text-white hover:border-[#7fc540]/50 hover:bg-white/15'
                    ]"
                    @click="formData.time = time"
                  >
                    {{ time }}
                  </button>
                </div>
              </div>

              <!-- Location Selection -->
              <div class="group">
                <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <UIcon name="i-lucide-map-pin" class="text-[#7fc540]" />
                  Preferred Location *
                </label>
                <div class="grid md:grid-cols-2 gap-4">
                  <button
                    v-for="location in locations"
                    :key="location.name"
                    type="button"
                    :class="[
                      'text-left p-4 rounded-xl border-2 transition-all duration-300',
                      formData.location === location.name
                      ? 'bg-[#7fc540] border-[#7fc540] text-white shadow-lg shadow-[#7fc540]/30'
                      : 'bg-white/10 border-white/20 text-white hover:border-[#7fc540]/50 hover:bg-white/15'
                    ]"
                    @click="formData.location = location.name"
                  >
                    <div class="flex items-start gap-3">
                      <div 
                      :class="[
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all mt-1',
                        formData.location === location.name
                          ? 'border-white bg-white'
                          : 'border-gray-300'
                      ]">
                        <div v-if="formData.location === location.name" class="w-2.5 h-2.5 bg-[#7fc540] rounded-full"></div>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-1">{{ location.name }}</h4>
                        <p class="text-sm opacity-90">{{ location.address }}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Message -->
              <div class="group">
                <label class="block text-white text-sm font-medium mb-2 flex items-center gap-2">
                  <UIcon name="i-lucide-message-square" class="text-[#7fc540]" />
                  Additional Notes
                </label>
                <textarea
                  v-model="formData.message"
                  rows="4"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#7fc540] focus:ring-2 focus:ring-[#7fc540]/20 focus:bg-white/15 transition-all resize-none"
                  placeholder="Tell us about any specific concerns, symptoms, or questions you have..."
                ></textarea>
              </div>

              <!-- Terms Checkbox -->
              <div class="flex items-start gap-3">
                <input
                  v-model="formData.agreeToTerms"
                  type="checkbox"
                  id="terms"
                  required
                  class="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-[#7fc540] focus:ring-[#7fc540] focus:ring-2"
                />
                <label for="terms" class="text-sm text-gray-300 leading-relaxed">
                  I agree to the <a href="/privacy" class="text-[#7fc540] hover:text-[#6ab030] underline">privacy policy</a> and consent to being contacted regarding my appointment.
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!isFormValid"
                :class="[
                  'group relative w-full px-8 py-5 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform shadow-lg overflow-hidden',
                  isFormValid
                    ? 'bg-gradient-to-r from-[#7fc540] to-[#6ab030] hover:scale-105 hover:shadow-2xl hover:shadow-[#7fc540]/30'
                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                ]"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <UIcon name="i-lucide-calendar-check" :class="isFormValid ? 'group-hover:rotate-12 transition-transform' : ''" />
                  {{ submitting ? 'Submitting...' : 'Book Appointment' }}
                </span>
                <div v-if="isFormValid" class="absolute inset-0 bg-gradient-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <!-- Success Message -->
              <div v-if="showSuccess" class="p-4 bg-[#7fc540]/20 border border-[#7fc540]/30 rounded-xl flex items-start gap-3 animate-fade-in">
                <UIcon name="i-lucide-check-circle" class="text-[#7fc540] text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="text-white font-semibold mb-1">Appointment Request Received!</h4>
                  <p class="text-gray-300 text-sm">We'll contact you within 24 hours to confirm your appointment details.</p>
                </div>
              </div>
              <div
                v-if="showError"
                class="p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start gap-3 animate-fade-in"
              >
                <UIcon
                  name="i-lucide-alert-triangle"
                  class="text-red-500 text-xl flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 class="text-white font-semibold mb-1">
                    Submission Failed
                  </h4>
                  <p class="text-gray-300 text-sm">{{ showError }}</p>
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
                    <p class="text-sm text-gray-400">Mon-Fri, 8AM-6PM</p>
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
                    <p class="font-semibold text-white">shanadeleyeclinic@gmail.com</p>
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
                <span class="text-white font-semibold">8:00 AM - 6:00 PM WAT</span>
              </div>
              <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span class="text-gray-300 font-medium">Wednesday</span>
                <span class="text-white font-semibold">8:00 AM - 5:00 PM WAT</span>
              </div>
              <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span class="text-gray-300 font-medium">Saturday</span>
                <span class="text-white font-semibold">8:30 AM - 4:30 PM WAT</span>
              </div>
              <div class="flex justify-between items-center text-sm p-3 bg-white/5 rounded-xl">
                <span class="text-gray-300 font-medium">Sunday</span>
                <span class="text-red-500 font-semibold">Strictly on appointment</span>
              </div>
            </div>
          </div>

          <!-- What to Expect -->
          <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up" style="animation-delay: 600ms">
            <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div class="p-2 bg-[#7fc540]/20 rounded-lg">
                <UIcon name="i-lucide-info" class="text-[#7fc540]" />
              </div>
              What to Expect
            </h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg flex-shrink-0 group-hover:bg-[#7fc540]/30 transition-colors">
                  <UIcon name="i-lucide-check-circle-2" class="text-[#7fc540]" />
                </div>
                <div>
                  <h5 class="font-semibold text-white mb-1">Comprehensive Exam</h5>
                  <p class="text-sm text-gray-400">45-60 minute thorough eye examination</p>
                </div>
              </div>
              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg flex-shrink-0 group-hover:bg-[#7fc540]/30 transition-colors">
                  <UIcon name="i-lucide-check-circle-2" class="text-[#7fc540]" />
                </div>
                <div>
                  <h5 class="font-semibold text-white mb-1">Expert Consultation</h5>
                  <p class="text-sm text-gray-400">Personalized care from Dr. Alabegbe</p>
                </div>
              </div>
              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#7fc540]/20 rounded-lg flex-shrink-0 group-hover:bg-[#7fc540]/30 transition-colors">
                  <UIcon name="i-lucide-check-circle-2" class="text-[#7fc540]" />
                </div>
                <div>
                  <h5 class="font-semibold text-white mb-1">Clear Next Steps</h5>
                  <p class="text-sm text-gray-400">Detailed treatment plan and recommendations</p>
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
        <img src="/img/consult.webp" alt="Shanadel Eye Clinic interior" class="w-full h-full object-cover">
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

<script setup>
import { ref, computed } from "vue";
defineOgImageComponent('InfoPages', {
  title:'Quality Eye Care Services'
})

// Get the Supabase client
const client = useSupabaseClient();

const formData = ref({
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  location: "",
  message: "",
  agreeToTerms: false,
});

const submitting = ref(false);
const showSuccess = ref(false);
const showError = ref(""); // Added for error handling

const timeSlots = ["Morning", "Afternoon", "Evening", "Flexible"];

const locations = [
  {
    name: "Abuja Office",
    address: "Suite A4, Triple H Plaza, Wuye, Abuja",
  },
  {
    name: "Online Consultation",
    address: "Virtual Appointment via Video Call",
  },
];

// Get minimum date (today)
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split("T")[0];
});

// Check if form is valid
const isFormValid = computed(() => {
  return (
    formData.value.name &&
    formData.value.phone &&
    formData.value.service &&
    formData.value.date &&
    formData.value.time &&
    formData.value.location &&
    formData.value.agreeToTerms
  );
});

async function handleSubmit() {
  if (!isFormValid.value) return;

  submitting.value = true;
  showError.value = "";
  showSuccess.value = false;

  // 1. Prepare data for Supabase
  // We match the column names from our SQL table
  const appointmentData = {
    name: formData.value.name,
    phone: formData.value.phone,
    email: formData.value.email || null, // Allow email to be optional
    service: formData.value.service,
    preferred_date: formData.value.date,
    preferred_time: formData.value.time,
    location: formData.value.location,
    message: formData.value.message || null,
    status: "pending", // Default status
  };

  try {
    // 2. Insert data into Supabase
    const { error } = await client.from("appointments").insert(appointmentData);

    if (error) {
      throw error; // Throw error to be caught by catch block
    }

    // 3. Handle success
    showSuccess.value = true;

    // Reset form
    formData.value = {
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      location: "",
      message: "",
      agreeToTerms: false,
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    // 4. Handle errors
    console.error("Error submitting appointment:", error.message);
    showError.value = `Failed to submit appointment: ${error.message}. Please try again.`;
  } finally {
    // 5. Stop submitting state
    submitting.value = false;
  }
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


/* Date input styling */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

/* Checkbox styling */
input[type="checkbox"] {
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #7fc540;
  border-color: #7fc540;
}

</style>