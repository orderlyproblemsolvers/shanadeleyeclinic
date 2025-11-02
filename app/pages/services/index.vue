<template>
  <div class="bg-white">
    <!-- Hero Section with Gradient Background -->
    <section
      class="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden md:mt-6 lg:mt-6 mt-10"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-orange-50"
      />
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#7fc540] rounded-full blur-3xl animate-float"
        />
        <div
          class="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#ff6900] rounded-full blur-3xl animate-float-delayed"
        />
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full mb-4 sm:mb-6 shadow-lg"
        >
          <span class="text-[#7fc540] font-semibold text-xs sm:text-sm"
            >Complete Eye Care Solutions</span
          >
        </div>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight animate-slide-up"
        >
          Our Services
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed"
        >
          From routine exams to specialized treatments, we provide complete,
          compassionate eye care for your entire family. Every service is
          tailored to your unique vision needs.
        </p>
      </div>
    </section>

    <!-- Core Services Section -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div
            class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-50 rounded-full mb-4 sm:mb-6"
          >
            <span class="text-[#7fc540] font-semibold text-xs sm:text-sm"
              >What We Offer</span
            >
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
          >
            Complete Care for Every Patient
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600">
            We offer a full spectrum of services to protect, correct, and
            enhance your vision at every stage of life.
          </p>
        </div>

        <!-- Services Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          <div
            v-for="service in services"
            :id="service.id"
            :key="service.title"
            class="group bg-gradient-to-br from-white to-gray-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-[#ff6900] shadow-md hover:shadow-2xl active:shadow-2xl hover:-translate-y-2 active:-translate-y-2 transition-all duration-300 cursor-pointer touch-manipulation"
          >
            <div class="flex items-start gap-3 sm:gap-4 md:gap-5">
              <div
                class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300"
              >
                <UIcon
                  :name="service.icon"
                  class="text-xl sm:text-2xl text-white"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
                >
                  {{ service.title }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eye Conditions Section -->
    <section class="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div
            class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 rounded-full mb-4 sm:mb-6"
          >
            <span class="text-[#ff6900] font-semibold text-xs sm:text-sm"
              >Expert Treatment</span
            >
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
          >
            Eye Conditions We Treat
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600">
            We provide diagnostics, treatments, and corrections for different
            types of eye-related conditions. Tap on any condition to learn more.
          </p>
        </div>

        <!-- Accordion for Eye Conditions -->
        <div class="max-w-5xl mx-auto space-y-3 sm:space-y-4">
          <div
            v-for="condition in eyeConditions"
            :id="condition.id"
            :key="condition.id"
            class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl active:shadow-2xl transition-all duration-300"
          >
            <button
              :aria-expanded="openCondition === condition.id"
              :aria-controls="`condition-${condition.id}`"
              class="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent active:bg-gradient-to-r active:from-emerald-50 active:to-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7fc540] focus:ring-inset rounded-xl sm:rounded-2xl touch-manipulation"
              @click="toggleCondition(condition.id)"
            >
              <div
                class="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-lg sm:rounded-xl flex items-center justify-center"
                >
                  <UIcon
                    :name="condition.icon"
                    class="text-lg sm:text-xl md:text-2xl text-white"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1"
                  >
                    {{ condition.name }}
                  </h3>
                  <p
                    class="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-1"
                  >
                    {{ condition.brief }}
                  </p>
                </div>
              </div>
              <div
                class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center ml-2 sm:ml-4 transform transition-transform duration-300"
                :class="{ 'rotate-180': openCondition === condition.id }"
              >
                <UIcon
                  name="i-lucide-chevron-down"
                  class="text-lg sm:text-xl text-gray-600"
                />
              </div>
            </button>

            <div
              v-show="openCondition === condition.id"
              :id="`condition-${condition.id}`"
              class="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8"
            >
              <div class="border-t border-gray-200 pt-4 sm:pt-6">
                <p
                  class="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6"
                >
                  {{ condition.details }}
                </p>

                <div
                  v-if="condition.symptoms"
                  class="mb-4 sm:mb-6 bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-100"
                >
                  <h4
                    class="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2"
                  >
                    <div class="w-2 h-2 bg-[#ff6900] rounded-full"/>
                    Symptoms
                  </h4>
                  <ul class="space-y-2 sm:space-y-3">
                    <li
                      v-for="symptom in condition.symptoms"
                      :key="symptom"
                      class="flex items-start gap-2 sm:gap-3"
                    >
                      <div
                        class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#7fc540]/10 rounded-md sm:rounded-lg flex items-center justify-center mt-0.5"
                      >
                        <UIcon
                          name="i-lucide-check"
                          class="text-xs sm:text-sm text-[#7fc540]"
                        />
                      </div>
                      <span class="text-sm sm:text-base text-gray-700">{{
                        symptom
                      }}</span>
                    </li>
                  </ul>
                </div>

                <div
                  v-if="condition.treatment"
                  class="bg-gradient-to-br from-emerald-50 to-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-emerald-100"
                >
                  <h4
                    class="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2"
                  >
                    <div
                      class="w-7 h-7 sm:w-8 sm:h-8 bg-[#7fc540] rounded-md sm:rounded-lg flex items-center justify-center"
                    >
                      <UIcon
                        name="i-lucide-heart"
                        class="text-xs sm:text-sm text-white"
                      />
                    </div>
                    Our Treatment Approach
                  </h4>
                  <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {{ condition.treatment }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Services Section -->
    <section class="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div
            class="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-50 rounded-full mb-4 sm:mb-6"
          >
            <span class="text-[#7fc540] font-semibold text-xs sm:text-sm"
              >Advanced Care</span
            >
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
          >
            Specialized Procedures & Services
          </h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600">
            Advanced diagnostic and treatment options for comprehensive eye
            care.
          </p>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          <div
            class="group bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-300 border border-gray-100 touch-manipulation"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#7fc540] to-[#6ab030] rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300 flex-shrink-0"
              >
                <UIcon
                  name="i-lucide-activity"
                  class="text-2xl sm:text-2xl md:text-3xl text-white"
                />
              </div>
              <h3
                class="text-xl sm:text-xl md:text-2xl font-bold text-gray-900"
              >
                Diagnostic Services
              </h3>
            </div>
            <ul class="space-y-3 sm:space-y-4">
              <li
                v-for="item in diagnosticServices"
                :key="item"
                class="flex items-start gap-2 sm:gap-3"
              >
                <div
                  class="flex-shrink-0 w-2 h-2 bg-[#7fc540] rounded-full mt-1.5 sm:mt-2"/>
                <span class="text-sm sm:text-base md:text-lg text-gray-700">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>

          <div
            class="group bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-300 border border-gray-100 touch-manipulation"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#ff6900] to-[#ff8534] rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-active:scale-110 transition-transform duration-300 flex-shrink-0"
              >
                <UIcon
                  name="i-lucide-shield-check"
                  class="text-2xl sm:text-2xl md:text-3xl text-white"
                />
              </div>
              <h3
                class="text-xl sm:text-xl md:text-2xl font-bold text-gray-900"
              >
                Management & Treatment
              </h3>
            </div>
            <ul class="space-y-3 sm:space-y-4">
              <li
                v-for="item in managementServices"
                :key="item"
                class="flex items-start gap-2 sm:gap-3"
              >
                <div
                  class="flex-shrink-0 w-2 h-2 bg-[#ff6900] rounded-full mt-1.5 sm:mt-2"/>
                <span class="text-sm sm:text-base md:text-lg text-gray-700">{{
                  item
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- NHIS/CTA Section -->
    <section class="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#7fc540] to-[#6ab030]"
      />
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl animate-float"
        />
        <div
          class="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl animate-float-delayed"
        />
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-lg mx-auto"
        >
          <UIcon
            name="i-lucide-shield-check"
            class="text-3xl sm:text-4xl text-[#7fc540]"
          />
        </div>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4"
        >
          NHIS-Approved & Insurance-Friendly
        </h2>
        <p
          class="text-base sm:text-lg md:text-xl text-white text-opacity-95 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
        >
          We're proudly NHIS-accredited, ensuring our patients can access
          high-quality care without financial stress. Quality vision care should
          be accessible to everyone.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4"
        >
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white hover:bg-gray-50 active:bg-gray-50 text-[#7fc540] font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-105 hover:shadow-2xl active:shadow-2xl shadow-xl rounded-xl sm:rounded-2xl touch-manipulation"
          >
            <UIcon name="i-lucide-calendar" class="text-lg sm:text-xl" />
            <span>Book Your Appointment</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface EyeCondition {
  id: string;
  name: string;
  brief: string;
  details: string;
  symptoms?: string[];
  treatment: string;
  icon: string;
}

// Open condition state for accordion
const openCondition = ref<string | null>(null);

const toggleCondition = (id: string) => {
  openCondition.value = openCondition.value === id ? null : id;
};

// Core Services Data
const services = ref<Service[]>([
  {
    id: "comprehensive-exam",
    title: "Comprehensive Eye Examination",
    description:
      "Thorough evaluation of your eye health including vision testing, eye pressure checks, and detailed examination of eye structures for early detection of conditions.",
    icon: "i-lucide-eye",
  },
  {
    id: "pediatric-eye-care",
    title: "Pediatric Eye Care",
    description:
      "Specialized, gentle eye care for children. Early detection and treatment of childhood vision problems to ensure proper visual development.",
    icon: "i-lucide-smile",
  },
  {
    id: "optical-dispensing",
    title: "Optical Lens & Frame Dispensing",
    description:
      "Wide selection of over 500 stylish frames and premium quality lenses. Expert fitting and personalized recommendations for optimal vision and comfort.",
    icon: "i-lucide-glasses",
  },
  {
    id: "contact-lens-services",
    title: "Contact Lens Services",
    description:
      "Professional fitting, education, and ongoing care for all types of contact lenses including daily, extended wear, and specialty lenses.",
    icon: "i-lucide-contact",
  },
  {
    id: "dry-eye-management",
    title: "Patient Consultations & Education",
    description:
      "Detailed consultations about your eye health, treatment options, and preventive care. We empower you with knowledge about your vision.",
    icon: "i-lucide-book-open",
  },
  {
    id: "community-vision-programs",
    title: "Community Vision Programs",
    description:
      "Outreach programs offering vision screenings, education, and affordable eye care services to schools and communities across Lagos.",
    icon: "i-lucide-users",
  },
]);

// Eye Conditions Data
const eyeConditions = ref<EyeCondition[]>([
  {
    id: "myopia",
    name: "Myopia (Nearsightedness)",
    brief: "Difficulty seeing distant objects clearly",
    details:
      "Myopia is a common refractive error where distant objects appear blurry while near objects can be seen clearly. This occurs when the eye is too long or the cornea is too curved, causing light to focus in front of the retina instead of directly on it.",
    symptoms: [
      "Blurred vision when looking at distant objects",
      "Squinting to see clearly",
      "Headaches from eye strain",
      "Difficulty seeing while driving, especially at night",
    ],
    treatment:
      "We provide comprehensive myopia management including prescription eyeglasses, contact lenses, and guidance on lifestyle modifications. Regular monitoring ensures your prescription stays current.",
    icon: "i-lucide-eye-off",
  },
  {
    id: "hyperopia",
    name: "Hyperopia (Farsightedness)",
    brief: "Difficulty focusing on nearby objects",
    details:
      "Hyperopia occurs when the eye is too short or the cornea has too little curvature, causing light to focus behind the retina. This makes it harder to see close objects clearly, though distant vision may be less affected.",
    symptoms: [
      "Blurred vision for close objects",
      "Eye strain or discomfort",
      "Headaches after reading or close work",
      "Difficulty focusing when switching between near and far objects",
    ],
    treatment:
      "Corrective lenses (glasses or contacts) are prescribed to help focus light properly on the retina. We offer comprehensive eye exams to determine the exact prescription needed.",
    icon: "i-lucide-scan-eye",
  },
  {
    id: "astigmatism",
    name: "Astigmatism",
    brief: "Distorted or blurred vision at all distances",
    details:
      "Astigmatism is caused by an irregular curvature of the cornea or lens, resulting in blurred or distorted vision at any distance. Instead of being round, the cornea is shaped more like a football.",
    symptoms: [
      "Blurred or distorted vision at all distances",
      "Eye strain and discomfort",
      "Headaches",
      "Difficulty with night vision",
    ],
    treatment:
      "We correct astigmatism with specially designed eyeglasses or toric contact lenses that compensate for the irregular shape of your cornea.",
    icon: "i-lucide-focus",
  },
  {
    id: "presbyopia",
    name: "Presbyopia",
    brief: "Age-related difficulty focusing on close objects",
    details:
      "Presbyopia is a natural part of aging that typically becomes noticeable in your 40s. The lens of the eye gradually loses its flexibility, making it harder to focus on close objects like reading material.",
    symptoms: [
      "Difficulty reading small print",
      "Need to hold reading material at arm's length",
      "Eye strain or headaches when reading",
      "Difficulty seeing in dim lighting",
    ],
    treatment:
      "We offer various solutions including reading glasses, bifocals, progressive lenses, and multifocal contact lenses to help you see comfortably at all distances.",
    icon: "i-lucide-book-open",
  },
  {
    id: "cataract",
    name: "Cataract",
    brief: "Clouding of the eye's natural lens",
    details:
      "A cataract is a clouding of the normally clear lens of the eye, which leads to decreased vision. Cataracts typically develop slowly and are most commonly related to aging, though they can also result from injury or other conditions.",
    symptoms: [
      "Cloudy, blurry, or dim vision",
      "Difficulty with night vision",
      "Sensitivity to light and glare",
      "Seeing halos around lights",
      "Fading or yellowing of colors",
    ],
    treatment:
      "We provide comprehensive cataract evaluation and management. Early-stage cataracts may be managed with updated prescriptions, while advanced cases are referred for surgical intervention with ongoing pre and post-operative care.",
    icon: "i-lucide-cloud",
  },
  {
    id: "glaucoma",
    name: "Glaucoma",
    brief: "Damage to the optic nerve, often due to high eye pressure",
    details:
      "Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye. It's one of the leading causes of blindness and can develop with few or no symptoms until significant damage has occurred.",
    symptoms: [
      "Gradual loss of peripheral vision",
      "Tunnel vision in advanced stages",
      "Severe eye pain (in acute cases)",
      "Nausea and vomiting (in acute cases)",
      "Blurred vision",
    ],
    treatment:
      "Early detection through regular comprehensive eye exams is crucial. We provide glaucoma screening, monitoring, and management with prescription eye drops and ongoing care to control eye pressure and prevent vision loss.",
    icon: "i-lucide-alert-circle",
  },
  {
    id: "dry-eye",
    name: "Dry Eye Syndrome",
    brief: "Insufficient tear production or poor tear quality",
    details:
      "Dry eye occurs when your eyes don't produce enough tears or when tears evaporate too quickly. This can cause discomfort and, in some cases, vision problems. It's increasingly common due to prolonged screen time and environmental factors.",
    symptoms: [
      "Stinging or burning sensation",
      "Redness and irritation",
      "Feeling of something in your eye",
      "Watery eyes (as a reflex response)",
      "Blurred vision, especially when reading",
    ],
    treatment:
      "We offer comprehensive dry eye management including artificial tears, lifestyle modifications, and treatment of underlying causes. Our approach focuses on long-term relief and eye health.",
    icon: "i-lucide-droplet",
  },
  {
    id: "conjunctivitis",
    name: "Conjunctivitis (Pink Eye)",
    brief: "Inflammation of the eye's outer membrane",
    details:
      "Conjunctivitis is inflammation or infection of the conjunctiva, the thin transparent layer covering the white part of the eye. It can be caused by bacteria, viruses, allergies, or irritants.",
    symptoms: [
      "Redness in the white of the eye",
      "Increased tear production",
      "Discharge that may crust overnight",
      "Itching or burning sensation",
      "Gritty feeling in the eye",
    ],
    treatment:
      "Treatment depends on the cause. We provide proper diagnosis and prescribe appropriate medications including antibiotic drops for bacterial infections, or recommend supportive care for viral conjunctivitis.",
    icon: "i-lucide-eye",
  },
  {
    id: "digital-strain",
    name: "Digital Eye Strain",
    brief: "Eye discomfort from prolonged screen use",
    details:
      "Digital eye strain, also called computer vision syndrome, results from prolonged use of digital devices. The eyes work harder to focus on digital screens, and reduced blinking can lead to dryness and discomfort.",
    symptoms: [
      "Eye fatigue and discomfort",
      "Dry or watery eyes",
      "Blurred vision",
      "Headaches",
      "Neck and shoulder pain",
    ],
    treatment:
      "We provide specialized computer vision exams and prescribe computer glasses with blue light filtering if needed. We also educate patients on the 20-20-20 rule and proper screen ergonomics.",
    icon: "i-lucide-monitor",
  },
]);

// Specialized Services
const diagnosticServices = ref([
  "Comprehensive Eye Evaluation",
  "Visual Acuity Testing",
  "Intraocular Pressure Measurement",
  "Visual Field Testing",
  "Retinal Examination",
  "Pediatric Vision Assessment",
]);

const managementServices = ref([
  "Glaucoma Management",
  "Cataract Evaluation & Co-management",
  "Dry Eye Treatment",
  "Infection & Allergy Treatment",
  "Contact Lens Fitting",
  "Low Vision Rehabilitation",
]);
</script>

<style scoped>
/* Custom animations for smooth transitions */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%,
  100% {
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

to {
  opacity: 1;
  transform: translateY(0);
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
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

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #7fc540;
  outline-offset: 2px;
}

/* Smooth accordion transitions */
[v-show] {
  transition: all 0.3s ease-in-out;
}

/* Touch-friendly interactions */
.touch-manipulation {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Prevent text selection on interactive elements */
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Line clamping utility */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Ensure smooth scrolling on mobile */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Optimize for touchscreen laptops */
@media (hover: hover) and (pointer: fine) {
  /* Only apply hover effects on devices with precise pointers */
  .group:hover .transform {
    transform: scale(1.1);
  }
}

/* Active states for all touch devices */
@media (hover: none) and (pointer: coarse) {
  /* Enhance touch feedback on mobile devices */
  button:active,
  .touch-manipulation:active {
    opacity: 0.9;
  }
}

/* Responsive breakpoint adjustments */
@media (min-width: 640px) and (max-width: 1023px) {
  /* Tablet optimizations */
  .max-w-5xl,
  .max-w-6xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Prevent layout shift on accordion open/close */
[v-show] {
  will-change: opacity, max-height;
}
</style>
