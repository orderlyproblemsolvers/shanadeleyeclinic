<template>
  <section class="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
    <div aria-hidden="true" class="absolute top-0 right-0 w-96 h-96 bg-[#5a912d]/5 rounded-full blur-3xl animate-float"></div>
    <div aria-hidden="true" class="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2">
          <div role="region" aria-labelledby="quiz-title" class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 backdrop-blur-sm">

            <div v-if="step === 0" class="p-10 md:p-12 animate-fade-in">
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <div aria-hidden="true" class="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                  <div class="relative p-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-lg">
                    <UIcon name="i-lucide-clipboard-check" class="text-5xl text-white" />
                  </div>
                </div>
              </div>
              
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full text-sm font-medium text-orange-800 mb-4">
                <span aria-hidden="true" class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Free Eye Health Assessment
              </div>

              <h2 id="quiz-title" class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Is Your Screen Time
                <span class="block mt-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Hurting Your Eyes?
                </span>
              </h2>
              
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Get a real-time <span class="font-semibold text-gray-900">"Eye Health Score"</span> in just 60 seconds. Take our quick quiz to understand your risks and receive personalized recommendations.
              </p>

              <div class="grid grid-cols-3 gap-3 mb-8">
                <div class="flex flex-col items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                  <UIcon name="i-lucide-clock" class="text-[#5a912d] text-2xl" />
                  <span class="font-medium">1 minute</span>
                </div>
                <div class="flex flex-col items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                  <UIcon name="i-lucide-shield-check" class="text-[#5a912d] text-2xl" />
                  <span class="font-medium">100% Private</span>
                </div>
                <div class="flex flex-col items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                  <UIcon name="i-lucide-sparkles" class="text-[#5a912d] text-2xl" />
                  <span class="font-medium">Instant Results</span>
                </div>
              </div>
              
              <button
                @click="step = 1"
                class="group relative w-full inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
                >
                <span class="relative z-10 flex items-center gap-2">
                  Start the Quiz
                  <UIcon name="i-lucide-arrow-right" class="group-hover:translate-x-1 transition-transform" />
                </span>
                <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <p class="text-sm text-gray-500 mt-4 text-center">No email required • Free forever</p>
            </div>

            <div v-if="step > 0 && step <= 3" role="region" :aria-labelledby="`section-title-${step}`" class="p-8 md:p-10 animate-fade-in">
              
              <div class="mb-8">
                <div class="flex justify-between items-center text-sm font-semibold mb-3">
                  <span id="progress-label" class="text-[#5a912d] flex items-center gap-2">
                    <UIcon name="i-lucide-check-circle" />
                    Progress
                  </span>
                  <span class="text-gray-600">Question {{ step }} of 3</span>
                </div>
                <div 
                  role="progressbar"
                  :aria-valuenow="step"
                  aria-valuemin="1"
                  aria-valuemax="3"
                  aria-labelledby="progress-label"
                  class="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner"
                >
                  <div 
                    class="bg-gradient-to-r from-[#5a912d] to-[#487524] h-3 rounded-full transition-all duration-700 ease-out relative overflow-hidden" 
                    :style="{ width: (step / 3) * 100 + '%' }"
                  >
                    <div aria-hidden="true" class="absolute inset-0 bg-white/30 animate-shimmer"></div>
                  </div>
                </div>
              </div>

              <div class="mb-8">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#5a912d]/10 rounded-full text-xs font-medium text-[#5a912d] mb-3">
                  Section {{ step }}
                </div>
                <h3 :id="`section-title-${step}`" tabindex="-1" class="text-2xl md:text-3xl font-bold text-gray-900 outline-none">
                  {{ currentSection.title }}
                </h3>
              </div>

              <div class="space-y-8">
                <div v-for="(question, qIndex) in currentSection.questions" :key="qIndex" class="animate-fade-in-up" :style="`animation-delay: ${qIndex * 100}ms`">
                  <p :id="`q-label-${qIndex}`" class="block text-lg font-semibold text-gray-900 mb-4 flex items-start gap-3">
                    <span aria-hidden="true" class="flex-shrink-0 w-7 h-7 bg-[#5a912d]/10 rounded-full flex items-center justify-center text-[#5a912d] text-sm font-bold">
                      {{ qIndex + 1 }}
                    </span>
                    {{ question.text }}
                  </p>
                  <div role="radiogroup" :aria-labelledby="`q-label-${qIndex}`" class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      v-for="(option, oIndex) in question.options"
                      :key="oIndex"
                      @click="selectAnswer(question.key, option.value)"
                      :aria-pressed="answers[question.key] === option.value"
                      :class="[
                        'group relative text-left px-5 py-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-100',
                        answers[question.key] === option.value
                          ? 'bg-gradient-to-br from-[#5a912d] to-[#487524] border-[#5a912d] text-white font-semibold shadow-xl shadow-[#5a912d]/30'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-[#5a912d]/50 hover:bg-gray-50 hover:shadow-lg'
                      ]"
                    >
                      <div class="flex items-center gap-3">
                        <div :class="[
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                          answers[question.key] === option.value
                            ? 'border-white bg-white'
                            : 'border-gray-300 group-hover:border-[#5a912d]'
                        ]">
                          <div 
                            class="w-2.5 h-2.5 bg-[#5a912d] rounded-full transform transition-all duration-300"
                            :class="answers[question.key] === option.value ? 'scale-100' : 'scale-0'"
                          ></div>
                        </div>
                        <span class="text-sm">{{ option.text }}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <span role="alert" class="block text-center text-sm font-medium text-red-600 mt-6" v-if="showError">
                Please answer all questions in this section.
              </span>

              <div class="flex justify-between mt-6 pt-6 border-t border-gray-200">
                <button
                  @click="step--"
                  :class="[
                    'group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all',
                    step === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-md'
                  ]"
                  :disabled="step === 1"
                >
                  <UIcon name="i-lucide-arrow-left" :class="step === 1 ? '' : 'group-hover:-translate-x-1 transition-transform'" />
                  Back
                </button>
                <button
                  @click="nextStep"
                  :class="[
                    'group flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all transform',
                    isSectionComplete 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-100' 
                      : 'bg-gray-300 text-gray-500', // Still show as disabled
                    shakeNextButton ? 'animate-shake' : ''
                  ]"
                  >
                  {{ step === 3 ? 'See My Results' : 'Next' }}
                  <UIcon name="i-lucide-arrow-right" :class="isSectionComplete ? 'group-hover:translate-x-1 transition-transform' : ''" />
                </button>
              </div>

              <p class="text-center text-sm text-gray-500 mt-4">
                {{ questionsAnswered }} of {{ totalQuestions }} questions answered in this section
              </p>
            </div>

            <div v-if="step === 4" role="region" aria-labelledby="result-title" class="p-10 md:p-12 animate-fade-in">
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <div aria-hidden="true" class="absolute inset-0 rounded-full blur-2xl animate-pulse-slow" :style="{ backgroundColor: result.color + '40' }"></div>
                  <div class="relative p-6 rounded-3xl shadow-2xl" :style="{ background: `linear-gradient(135deg, ${result.color}, ${result.color}dd)` }">
                    <UIcon :name="result.icon" class="text-6xl text-white" />
                  </div>
                </div>
              </div>

              <div class="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full mb-4">
                <span class="text-sm font-medium text-gray-600">Your Score:</span>
                <span 
                  aria-live="polite"
                  class="text-2xl font-bold" 
                  :style="{ color: result.color }"
                >{{ animatedScore }}/18</span>
              </div>
              
              <h2 id="result-title" tabindex="-1" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight outline-none">
                {{ result.title }}
              </h2>
              
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ result.description }}
              </p>

              <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-8 border border-gray-200">
                <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UIcon name="i-lucide-lightbulb" class="text-[#5a912d]" />
                  Personalized Recommendations
                </h3>
                <ul class="space-y-3 text-left">
                  <li v-for="(rec, index) in result.recommendations" :key="index" class="flex items-start gap-3 text-gray-700 text-sm">
                    <UIcon name="i-lucide-check-circle-2" class="text-[#5a912d] flex-shrink-0 mt-0.5" />
                    <span>{{ rec }}</span>
                  </li>
                </ul>
              </div>

              <NuxtLink
                to="/contact"
                class="group relative w-full inline-flex items-center justify-center gap-3 px-12 py-5 text-white font-semibold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-xl hover:shadow-2xl mb-6 overflow-hidden"
                :style="{ background: `linear-gradient(to right, ${result.color}, ${result.color}dd)` }"
              >
                <span class="relative z-10 flex items-center gap-2">
                  {{ result.cta }}
                  <UIcon name="i-lucide-calendar-check" class="group-hover:rotate-12 transition-transform" />
                </span>
                <div aria-hidden="true" class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" :style="{ background: `linear-gradient(to right, ${result.color}dd, ${result.color})` }" />
              </NuxtLink>

              <button
                @click="resetQuiz"
                class="group flex items-center justify-center gap-2 w-full text-center text-gray-500 hover:text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-all"
              >
                <UIcon name="i-lucide-rotate-ccw" class="group-hover:rotate-180 transition-transform duration-500" />
                Take the Quiz Again
              </button>
            </div>

          </div>
        </div>

        <div class="lg:col-span-1 space-y-6">
          
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-fade-in-up transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style="animation-delay: 200ms">
            <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div class="p-2 bg-[#5a912d]/10 rounded-lg">
                <UIcon name="i-lucide-heart-pulse" class="text-[#5a912d]" />
              </div>
              Why Take This Quiz?
            </h4>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#5a912d]/10 rounded-lg flex-shrink-0 group-hover:bg-[#5a912d]/20 transition-colors">
                  <UIcon name="i-lucide-eye" class="text-[#5a912d]" />
                </div>
                <div>
                  <h5 class="font-semibold text-gray-900 mb-1">Early Detection</h5>
                  <p class="text-sm text-gray-600">Identify potential eye health issues before they become serious</p>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#5a912d]/10 rounded-lg flex-shrink-0 group-hover:bg-[#5a912d]/20 transition-colors">
                  <UIcon name="i-lucide-target" class="text-[#5a912d]" />
                </div>
                <div>
                  <h5 class="font-semibold text-gray-900 mb-1">Personalized Tips</h5>
                  <p class="text-sm text-gray-600">Get customized recommendations based on your lifestyle</p>
                </div>
              </div>

              <div class="flex items-start gap-3 group">
                <div class="p-2 bg-[#5a912d]/10 rounded-lg flex-shrink-0 group-hover:bg-[#5a912d]/20 transition-colors">
                  <UIcon name="i-lucide-shield-check" class="text-[#5a912d]" />
                </div>
                <div>
                  <h5 class="font-semibold text-gray-900 mb-1">Prevention Focus</h5>
                  <p class="text-sm text-gray-600">Learn how to protect your vision for years to come</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div class="p-2 bg-[#5a912d]/10 rounded-lg">
                <UIcon name="i-lucide-phone-call" class="text-[#5a912d]" />
              </div>
              Need Expert Help?
            </h4>
            
            <p class="text-sm text-gray-600 mb-4">
              Our eye care specialists are here to answer your questions and provide personalized care.
            </p>
            
            <a
              href="tel:+2349024866554"
              class="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#5a912d]/10 transition-all border border-gray-100 hover:border-[#5a912d]/30 mb-3"
            >
              <div class="p-2 bg-[#5a912d]/10 rounded-lg">
                <UIcon name="i-lucide-phone" class="text-[#5a912d]" />
              </div>
              <div>
                <p class="font-semibold text-gray-900">+234 902 486 6554</p>
                <p class="text-sm text-gray-600">Call us anytime</p>
              </div>
            </a>

            <NuxtLink
              to="/contact"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5a912d] to-[#487524] hover:from-[#487524] hover:to-[#5a912d] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-lg"
            >
              <UIcon name="i-lucide-calendar" />
              Book Appointment
            </NuxtLink>
          </div>

          <div class="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="flex justify-center -space-x-3 mb-4">
              <div aria-label="Patient A" class="w-10 h-10 rounded-full bg-[#5a912d] border-2 border-white flex items-center justify-center text-white font-bold text-sm">A</div>
              <div aria-label="Patient B" class="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">B</div>
              <div aria-label="Patient C" class="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">C</div>
              <div aria-label="Thousands more" class="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">+</div>
            </div>
            <p class="text-sm text-gray-600 font-medium">
              Join <span class="text-[#5a912d] font-bold">thousands</span> of patients who trust Shanadel Eye Clinic
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// A11Y: Imported nextTick for focus management
import { ref, computed, watch, nextTick } from 'vue'

const step = ref(0)
const answers = ref({
  screenTime: null,
  eyeTired: null,
  breaks: null,
  blurryVision: null,
  headaches: null,
  glare: null,
  sunglasses: null,
  lastExam: null,
  nightVision: null,
})

const shakeNextButton = ref(false)
const animatedScore = ref(0)
// A11Y: Added a state for the error message
const showError = ref(false)

const sections = [
  {
    title: 'Daily Habits & Screen Time',
    keys: ['screenTime', 'eyeTired', 'breaks'],
    questions: [
      {
        text: 'How many hours do you spend on screens daily?',
        key: 'screenTime',
        options: [
          { text: 'Less than 2 hours', value: 0 },
          { text: '2–5 hours', value: 1 },
          { text: 'More than 6 hours', value: 2 },
        ],
      },
      {
        text: 'Do your eyes feel tired, dry, or watery after screen use?',
        key: 'eyeTired',
        options: [
          { text: 'Rarely', value: 0 },
          { text: 'Sometimes', value: 1 },
          { text: 'Often', value: 2 },
        ],
      },
      {
        text: 'Do you take breaks from screens every 20 minutes?',
        key: 'breaks',
        options: [
          { text: 'Always', value: 0 },
          { text: 'Occasionally', value: 1 },
          { text: 'Never', value: 2 },
        ],
      },
    ],
  },
  {
    title: 'Vision Clarity & Discomfort',
    keys: ['blurryVision', 'headaches', 'glare'],
    questions: [
      {
        text: 'How often do you experience blurry vision?',
        key: 'blurryVision',
        options: [
          { text: 'Never', value: 0 },
          { text: 'Occasionally', value: 1 },
          { text: 'Frequently', value: 2 },
        ],
      },
      {
        text: 'Do you get headaches or eye pain after screen use?',
        key: 'headaches',
        options: [
          { text: 'No', value: 0 },
          { text: 'Sometimes', value: 1 },
          { text: 'Yes, regularly', value: 2 },
        ],
      },
      {
        text: 'Do bright lights or glare bother your eyes?',
        key: 'glare',
        options: [
          { text: 'No', value: 0 },
          { text: 'Occasionally', value: 1 },
          { text: 'Yes', value: 2 },
        ],
      },
    ],
  },
  {
    title: 'Lifestyle & Eye Health Awareness',
    keys: ['sunglasses', 'lastExam', 'nightVision'],
    questions: [
      {
        text: 'Do you wear sunglasses outdoors?',
        key: 'sunglasses',
        options: [
          { text: 'Always', value: 0 },
          { text: 'Sometimes', value: 1 },
          { text: 'Rarely', value: 2 },
        ],
      },
      {
        text: 'When was your last eye exam?',
        key: 'lastExam',
        options: [
          { text: 'Within the last year', value: 0 },
          { text: '1–2 years ago', value: 1 },
          { text: 'Over 2 years ago', value: 2 },
        ],
      },
      {
        text: 'Do you have trouble seeing clearly at night?',
        key: 'nightVision',
        options: [
          { text: 'No', value: 0 },
          { text: 'Sometimes', value: 1 },
          { text: 'Yes', value: 2 },
        ],
      },
    ],
  },
]

const currentSection = computed(() => sections[step.value - 1])

const isSectionComplete = computed(() => {
  if (!currentSection.value) return false
  return currentSection.value.keys.every(key => answers.value[key] !== null)
})

const questionsAnswered = computed(() => {
  if (!currentSection.value) return 0
  return currentSection.value.keys.filter(key => answers.value[key] !== null).length
})

const totalQuestions = computed(() => {
  if (!currentSection.value) return 0
  return currentSection.value.keys.length
})

function selectAnswer(key, value) {
  answers.value[key] = value
  // A11Y: Hide error message as soon as user interacts
  showError.value = false
}

function nextStep() {
  if (isSectionComplete.value) {
    showError.value = false // Hide error
    if (step.value < 3) {
      step.value++
    } else {
      step.value = 4
    }
  } else {
    // A11Y: Show error message and trigger shake
    showError.value = true
    shakeNextButton.value = true
    setTimeout(() => {
      shakeNextButton.value = false
    }, 600)
  }
}

function resetQuiz() {
  answers.value = {
    screenTime: null,
    eyeTired: null,
    breaks: null,
    blurryVision: null,
    headaches: null,
    glare: null,
    sunglasses: null,
    lastExam: null,
    nightVision: null,
  }
  step.value = 0
  animatedScore.value = 0
  showError.value = false
}

const finalScore = computed(() => {
  return Object.values(answers.value).reduce((total, val) => total + (val || 0), 0)
})

// A11Y: Watch for step changes to manage focus
watch(step, (newStep) => {
  if (newStep > 0 && newStep <= 3) {
    // Move focus to the new section's heading
    nextTick(() => {
      document.getElementById(`section-title-${newStep}`)?.focus()
    })
  } else if (newStep === 4) {
    // Move focus to the result heading
    nextTick(() => {
      document.getElementById('result-title')?.focus()
    })
    
    // Animate score (this is fine)
    const target = finalScore.value
    if (target === 0) {
      animatedScore.value = 0
      return
    }
    
    const duration = 800
    const intervalTime = 16
    const steps = duration / intervalTime
    const increment = target / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        animatedScore.value = target
        clearInterval(interval)
      } else {
        animatedScore.value = Math.round(current)
      }
    }, intervalTime)
  }
})

const result = computed(() => {
  const s = finalScore.value
  
  // A11Y: Updated colors to be accessible (pass contrast checks)
  if (s <= 5) {
    return {
      title: "You're a Bright Eye Champion! 🏆",
      icon: 'i-lucide-award',
      color: '#5a912d', // Was #7fc540
      description: 'Your eye health habits are excellent! Keep up the great work. Even champions need regular maintenance, so schedule your annual check-up to stay proactive.',
      cta: 'Book Your Annual Check-up',
      recommendations: [
        'Continue practicing the 20-20-20 rule during screen time',
        'Maintain your annual eye exam routine',
        'Keep wearing UV-protective sunglasses outdoors',
        'Stay hydrated for optimal eye moisture'
      ]
    }
  } else if (s <= 11) {
    return {
      title: "You're a Digital Vision Hero! 💻",
      icon: 'i-lucide-shield-check',
      color: '#d95b00', // Was #ff6900
      description: "You're doing well, but that screen time might be catching up with you. Try the 20-20-20 rule and schedule a vision check to keep your eyes fresh and focused.",
      cta: 'Schedule an Eye Evaluation',
      recommendations: [
        'Practice the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds',
        'Consider blue light filtering glasses for extended screen use',
        'Schedule a comprehensive eye exam within the next 3 months',
        'Adjust screen brightness and position for optimal comfort'
      ]
    }
  } else {
    return {
      title: 'Vision Care Needed! ⚠️',
      icon: 'i-lucide-alert-triangle',
      color: '#D92626', // Was #EF4444
      description: 'Your responses show signs of eye strain or possible prescription changes. Don\'t worry—with the right care, you\'ll be seeing clearly again in no time.',
      cta: 'Book an Appointment Now',
      recommendations: [
        'Schedule a comprehensive eye exam as soon as possible',
        'Take immediate breaks from screens every 20 minutes',
        'Use artificial tears if experiencing dryness',
        'Consider a workspace ergonomics assessment',
        'Discuss symptoms with an eye care professional'
      ]
    }
  }
})
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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Pulse animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Shimmer effect for progress bar */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* ✨ NEW: Shake animation for disabled button */
@keyframes shake {
  10%, 90% { transform: translateX(-2px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
}
.animate-shake {
  animation: shake 0.6s ease-in-out;
}
</style>