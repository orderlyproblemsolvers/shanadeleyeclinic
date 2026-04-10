<template>
  <section class="relative bg-gray-950 py-16 lg:py-24 overflow-hidden">

    <div aria-hidden="true" class="absolute top-0 left-0 w-80 h-80 bg-[#7fc540]/8 rounded-full blur-3xl animate-float pointer-events-none" />
    <div aria-hidden="true" class="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs font-medium text-gray-400 mb-4">
          <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full animate-pulse" />
          Easy Online Booking
        </span>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Book Your Appointment</h2>
        <p class="text-sm text-gray-400">Schedule your visit with our expert team in just a few steps.</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

        <!-- Form -->
        <div class="lg:col-span-2">
          <div class="bg-white/4 border border-white/10 rounded-2xl p-7 md:p-9">
            <form class="space-y-5" @submit.prevent="handleSubmit">

              <!-- Name + Phone -->
              <div class="grid md:grid-cols-2 gap-5">
                <div>
                  <label class="field-label">
                    <UIcon name="i-lucide-user" class="text-[#7fc540] text-sm" />
                    Full Name *
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    required
                    placeholder="John Doe"
                    class="field-input"
                  />
                </div>
                <div>
                  <label class="field-label">
                    <UIcon name="i-lucide-phone" class="text-[#7fc540] text-sm" />
                    Phone Number *
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    class="field-input"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="field-label">
                  <UIcon name="i-lucide-mail" class="text-[#7fc540] text-sm" />
                  Email Address <span class="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="john@example.com"
                  class="field-input"
                />
              </div>

              <!-- Service + Date -->
              <div class="grid md:grid-cols-2 gap-5">
                <div>
                  <label class="field-label">
                    <UIcon name="i-lucide-stethoscope" class="text-[#7fc540] text-sm" />
                    Select Service *
                  </label>
                  <select v-model="formData.service" required class="field-input appearance-none cursor-pointer">
                    <option value="" disabled class="text-gray-900">Choose a service</option>
                    <option v-for="s in services" :key="s" :value="s" class="text-gray-900">{{ s }}</option>
                  </select>
                </div>
                <div>
                  <label class="field-label">
                    <UIcon name="i-lucide-calendar-days" class="text-[#7fc540] text-sm" />
                    Preferred Date *
                  </label>
                  <input
                    v-model="formData.date"
                    type="date"
                    required
                    :min="minDate"
                    class="field-input"
                  />
                </div>
              </div>

              <!-- Time slots -->
              <div>
                <label class="field-label mb-3">
                  <UIcon name="i-lucide-clock" class="text-[#7fc540] text-sm" />
                  Preferred Time *
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    v-for="time in timeSlots"
                    :key="time"
                    type="button"
                    :class="[
                      'py-2.5 px-3 rounded-xl border text-sm font-medium transition-all duration-200',
                      formData.time === time
                        ? 'bg-[#7fc540] border-[#7fc540] text-white shadow-md'
                        : 'bg-white/5 border-white/15 text-gray-300 hover:border-[#7fc540]/50 hover:bg-white/10'
                    ]"
                    @click="formData.time = time"
                  >
                    {{ time }}
                  </button>
                </div>
              </div>

              <!-- Location -->
              <div>
                <label class="field-label mb-3">
                  <UIcon name="i-lucide-map-pin" class="text-[#7fc540] text-sm" />
                  Preferred Location *
                </label>
                <div class="grid md:grid-cols-2 gap-3">
                  <button
                    v-for="loc in locations"
                    :key="loc.name"
                    type="button"
                    :class="[
                      'text-left p-4 rounded-xl border transition-all duration-200',
                      formData.location === loc.name
                        ? 'bg-[#7fc540]/15 border-[#7fc540]/60 '
                        : 'bg-white/4 border-white/12 hover:border-white/25 hover:bg-white/8'
                    ]"
                    @click="formData.location = loc.name"
                  >
                    <div class="flex items-start gap-3">
                      <div :class="[
                        'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all',
                        formData.location === loc.name ? 'border-[#7fc540] bg-[#7fc540]' : 'border-gray-500'
                      ]">
                        <div v-if="formData.location === loc.name" class="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <div>
                        <p :class="['text-sm font-semibold', formData.location === loc.name ? 'text-[#7fc540]' : 'text-white']">{{ loc.name }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">{{ loc.address }}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Notes -->
              <div>
                <label class="field-label">
                  <UIcon name="i-lucide-message-square" class="text-[#7fc540] text-sm" />
                  Additional Notes <span class="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  v-model="formData.message"
                  rows="3"
                  placeholder="Any specific concerns, symptoms, or questions..."
                  class="field-input resize-none"
                />
              </div>

              <!-- Terms -->
              <div class="flex items-start gap-3">
                <input
                  id="terms"
                  v-model="formData.agreeToTerms"
                  type="checkbox"
                  required
                  class="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/10 text-[#7fc540] focus:ring-[#7fc540] cursor-pointer"
                />
                <label for="terms" class="text-xs text-gray-400 leading-relaxed cursor-pointer">
                  I agree to the
                  <NuxtLink to="/privacy" class="text-[#7fc540] hover:text-[#6ab030] underline">privacy policy</NuxtLink>
                  and consent to being contacted regarding my appointment.
                </label>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                :disabled="!isFormValid || submitting"
                :class="[
                  'w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold transition-all duration-200',
                  isFormValid && !submitting
                    ? 'bg-linear-to-r from-[#7fc540] to-[#6ab030] text-white hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-[#7fc540]/20'
                    : 'bg-white/8 text-gray-500 cursor-not-allowed'
                ]"
              >
                <UIcon :name="submitting ? 'i-lucide-loader' : 'i-lucide-calendar-check'" :class="submitting ? 'animate-spin' : ''" />
                {{ submitting ? 'Submitting…' : 'Book Appointment' }}
              </button>

              <!-- Success -->
              <div v-if="showSuccess" class="flex items-start gap-3 p-4 bg-[#7fc540]/10 border border-[#7fc540]/25 rounded-xl animate-fade-in">
                <UIcon name="i-lucide-check-circle" class="text-[#7fc540] shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-semibold text-white mb-0.5">Appointment Request Received!</p>
                  <p class="text-xs text-gray-400">We'll contact you within 24 hours to confirm your details.</p>
                </div>
              </div>

              <!-- Error -->
              <div v-if="submitError" class="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/25 rounded-xl animate-fade-in">
                <UIcon name="i-lucide-alert-triangle" class="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-semibold text-white mb-0.5">Submission Failed</p>
                  <p class="text-xs text-gray-400">{{ submitError }}</p>
                </div>
              </div>

            </form>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="flex flex-col gap-5">

          <!-- Contact -->
          <div class="bg-white/4 border border-white/10 rounded-2xl p-6">
            <h4 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#7fc540]/15 rounded-lg">
                <UIcon name="i-lucide-phone-call" class="text-[#7fc540] text-sm" />
              </div>
              Need Help?
            </h4>
            <div class="flex flex-col gap-3">
              <NuxtLink
                to="tel:+2349024866554"
                external
                class="flex items-center gap-3 p-3.5 rounded-xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/18 transition-all"
              >
                <div class="p-1.5 bg-[#7fc540]/15 rounded-lg shrink-0">
                  <UIcon name="i-lucide-phone" class="text-[#7fc540] text-sm" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">+234 902 486 6554</p>
                  <p class="text-xs text-gray-500">Mon – Fri, during clinic hours</p>
                </div>
              </NuxtLink>
              <NuxtLink
                to="mailto:shanadeleyeclinic@gmail.com"
                external
                class="flex items-center gap-3 p-3.5 rounded-xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/18 transition-all"
              >
                <div class="p-1.5 bg-[#7fc540]/15 rounded-lg shrink-0">
                  <UIcon name="i-lucide-mail" class="text-[#7fc540] text-sm" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-white">shanadeleyeclinic@gmail.com</p>
                  <p class="text-xs text-gray-500">We reply within 24 hours</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Office Hours -->
          <div class="bg-white/4 border border-white/10 rounded-2xl p-6">
            <h4 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#7fc540]/15 rounded-lg">
                <UIcon name="i-lucide-clock" class="text-[#7fc540] text-sm" />
              </div>
              Office Hours
            </h4>
            <div class="flex flex-col divide-y divide-white/8">
              <div v-for="row in officeHours" :key="row.day" class="flex justify-between items-center py-2.5 text-xs">
                <span class="text-gray-400">{{ row.day }}</span>
                <span :class="row.closed ? 'text-red-400' : 'text-white font-medium'">{{ row.hours }}</span>
              </div>
            </div>
          </div>

          <!-- What to expect -->
          <div class="bg-white/4 border border-white/10 rounded-2xl p-6">
            <h4 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#7fc540]/15 rounded-lg">
                <UIcon name="i-lucide-info" class="text-[#7fc540] text-sm" />
              </div>
              What to Expect
            </h4>
            <div class="flex flex-col gap-3.5">
              <div v-for="item in expectations" :key="item.title" class="flex items-start gap-3">
                <div class="p-1.5 bg-[#7fc540]/12 rounded-lg shrink-0 mt-0.5">
                  <UIcon name="i-lucide-check" class="text-[#7fc540] text-xs" />
                </div>
                <div>
                  <p class="text-xs font-semibold text-white mb-0.5">{{ item.title }}</p>
                  <p class="text-xs text-gray-500 leading-relaxed">{{ item.body }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const client = useSupabaseClient()

const formData = ref({
  name: '', phone: '', email: '',
  service: '', date: '', time: '',
  location: '', message: '', agreeToTerms: false,
})

const submitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')

const services = [
  'Comprehensive Eye Examination',
  'Cataract Treatment',
  'Glaucoma Management',
  'Vision Correction',
  'Frames & Lenses Selection',
  'Community Eye Health',
  'Other / Not Sure',
]

const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Flexible']

const locations = [
  { name: 'Abuja Office', address: 'Suite A4, Triple H Plaza, Wuye, Abuja' },
  { name: 'Online Consultation', address: 'Virtual appointment via video call' },
]

const officeHours = [
  { day: 'Monday – Tuesday', hours: '8:30 AM – 5:00 PM' },
  { day: 'Wednesday', hours: '8:30 AM – 5:00 PM' },
  { day: 'Thursday – Friday', hours: '8:30 AM – 5:00 PM' },
  { day: 'Saturday', hours: '8:30 AM – 4:30 PM' },
  { day: 'Sunday', hours: 'By Appointment Only', closed: true },
]

const expectations = [
  { title: 'Comprehensive Exam', body: '45–60 minute thorough eye examination.' },
  { title: 'Expert Consultation', body: 'Personalised care from Dr. Alabegbe.' },
  { title: 'Clear Next Steps', body: 'Detailed treatment plan and recommendations.' },
]

const minDate = computed(() => new Date().toISOString().split('T')[0])

const isFormValid = computed(() =>
  formData.value.name &&
  formData.value.phone &&
  formData.value.service &&
  formData.value.date &&
  formData.value.time &&
  formData.value.location &&
  formData.value.agreeToTerms
)

async function handleSubmit() {
  if (!isFormValid.value) return
  submitting.value = true
  submitError.value = ''
  showSuccess.value = false

  try {
    const { error } = await client.from('appointments').insert({
      name: formData.value.name,
      phone: formData.value.phone,
      email: formData.value.email || null,
      service: formData.value.service,
      preferred_date: formData.value.date,
      preferred_time: formData.value.time,
      location: formData.value.location,
      message: formData.value.message || null,
      status: 'pending',
    })
    if (error) throw error

    showSuccess.value = true
    Object.assign(formData.value, {
      name: '', phone: '', email: '', service: '',
      date: '', time: '', location: '', message: '', agreeToTerms: false,
    })
    setTimeout(() => { showSuccess.value = false }, 6000)
  } catch (err) {
    console.error(err)
    submitError.value = 'Something went wrong. Please try again or call us directly.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.field-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 8px;
}

.field-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.field-input::placeholder {
  color: #6b7280;
}

.field-input:focus {
  outline: none;
  border-color: rgba(127, 197, 64, 0.6);
  box-shadow: 0 0 0 1px rgba(127, 197, 64, 0.2);
}

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

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }

input[type='date']::-webkit-calendar-picker-indicator { filter: invert(1); cursor: pointer; }
input[type='checkbox']:checked { background-color: #7fc540; border-color: #7fc540; }
</style>