<template>
  <section class="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
    <div aria-hidden="true" class="absolute top-0 right-0 w-80 h-80 bg-[#5a912d]/5 rounded-full blur-3xl animate-float pointer-events-none" />
    <div aria-hidden="true" class="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

        <!-- MAIN: Quiz card -->
        <div class="lg:col-span-2">
          <div role="region" aria-labelledby="quiz-title" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Step 0: Intro -->
            <div v-if="step === 0" class="p-8 md:p-10 animate-fade-in">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-medium text-orange-700 mb-5">
                <span aria-hidden="true" class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                Free Eye Health Assessment
              </div>

              <h2 id="quiz-title" class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                Is Your Screen Time
                <span class="bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Hurting Your Eyes?</span>
              </h2>

              <p class="text-base text-gray-500 mb-8 leading-relaxed max-w-xl">
                Get a personalised <span class="font-semibold text-gray-700">Eye Health Score</span> in just 60 seconds — and receive tailored recommendations.
              </p>

              <div class="grid grid-cols-3 gap-3 mb-8">
                <div v-for="meta in quizMeta" :key="meta.label" class="flex flex-col items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <UIcon :name="meta.icon" class="text-[#5a912d] text-lg" />
                  <span class="font-medium text-gray-700">{{ meta.label }}</span>
                </div>
              </div>

              <button
                @click="step = 1"
                class="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold text-base rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-orange-500/25 overflow-hidden"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Start the Quiz
                  <UIcon name="i-lucide-arrow-right" class="group-hover:translate-x-1 transition-transform" />
                </span>
                <div aria-hidden="true" class="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <p class="text-xs text-gray-400 mt-3 text-center">No email required · Free forever</p>
            </div>

            <!-- Steps 1–3: Questions -->
            <div v-if="step > 0 && step <= 3" role="region" :aria-labelledby="`section-title-${step}`" class="p-8 md:p-10 animate-fade-in">

              <!-- Progress -->
              <div class="mb-8">
                <div class="flex justify-between items-center text-xs font-medium text-gray-500 mb-2">
                  <span class="text-[#5a912d]">Section {{ step }} of 3</span>
                  <span>{{ questionsAnswered }}/{{ totalQuestions }} answered</span>
                </div>
                <div
                  role="progressbar"
                  :aria-valuenow="step"
                  aria-valuemin="1"
                  aria-valuemax="3"
                  class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden"
                >
                  <div
                    class="bg-linear-to-r from-[#5a912d] to-[#487524] h-1.5 rounded-full transition-all duration-700 ease-out"
                    :style="{ width: (step / 3) * 100 + '%' }"
                  />
                </div>
              </div>

              <!-- Section heading -->
              <div class="mb-7">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5a912d]/8 rounded-full text-xs font-medium text-[#5a912d] mb-2">
                  {{ currentSection.title }}
                </span>
                <h3 :id="`section-title-${step}`" tabindex="-1" class="text-xl md:text-2xl font-bold text-gray-900 outline-none">
                  Answer all three questions below
                </h3>
              </div>

              <!-- Questions -->
              <div class="space-y-7">
                <div
                  v-for="(question, qIndex) in currentSection.questions"
                  :key="qIndex"
                  class="animate-fade-in-up"
                  :style="`animation-delay: ${qIndex * 80}ms`"
                >
                  <p :id="`q-label-${qIndex}`" class="flex items-start gap-2.5 text-sm font-semibold text-gray-800 mb-3">
                    <span aria-hidden="true" class="shrink-0 w-6 h-6 bg-[#5a912d]/10 rounded-full flex items-center justify-center text-[#5a912d] text-xs font-bold mt-0.5">
                      {{ qIndex + 1 }}
                    </span>
                    {{ question.text }}
                  </p>
                  <div role="radiogroup" :aria-labelledby="`q-label-${qIndex}`" class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      v-for="(option, oIndex) in question.options"
                      :key="oIndex"
                      @click="selectAnswer(question.key, option.value)"
                      :aria-pressed="answers[question.key] === option.value"
                      :class="[
                        'text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm',
                        answers[question.key] === option.value
                          ? 'bg-[#5a912d] border-[#5a912d] text-white font-medium shadow-md'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-[#5a912d]/40 hover:bg-[#5a912d]/4'
                      ]"
                    >
                      <div class="flex items-center gap-2.5">
                        <div :class="[
                          'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all',
                          answers[question.key] === option.value ? 'border-white' : 'border-gray-300'
                        ]">
                          <div
                            class="w-2 h-2 bg-white rounded-full transition-transform duration-200"
                            :class="answers[question.key] === option.value ? 'scale-100' : 'scale-0'"
                          />
                        </div>
                        {{ option.text }}
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Error -->
              <span role="alert" class="block text-center text-xs font-medium text-red-500 mt-5" v-if="showError">
                Please answer all questions before continuing.
              </span>

              <!-- Nav -->
              <div class="flex justify-between mt-7 pt-6 border-t border-gray-100">
                <button
                  @click="step--"
                  :disabled="step === 1"
                  class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  <UIcon name="i-lucide-arrow-left" />
                  Back
                </button>
                <button
                  @click="nextStep"
                  :class="[
                    'flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                    isSectionComplete
                      ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02]'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed',
                    shakeNextButton ? 'animate-shake' : ''
                  ]"
                >
                  {{ step === 3 ? 'See My Results' : 'Next Section' }}
                  <UIcon name="i-lucide-arrow-right" />
                </button>
              </div>
            </div>

            <!-- Step 4: Results -->
            <div v-if="step === 4" role="region" aria-labelledby="result-title" class="p-8 md:p-10 animate-fade-in">

              <!-- Score badge -->
              <div class="flex items-center gap-4 mb-6 p-5 rounded-xl border" :style="{ borderColor: result.color + '30', background: result.color + '08' }">
                <div class="p-3 rounded-xl shrink-0" :style="{ background: result.color + '15' }">
                  <UIcon :name="result.icon" class="text-2xl" :style="{ color: result.color }" />
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-0.5">Your Eye Health Score</p>
                  <p class="text-2xl font-bold" :style="{ color: result.color }">
                    {{ animatedScore }}<span class="text-sm font-medium text-gray-400">/18</span>
                  </p>
                </div>
              </div>

              <h2 id="result-title" tabindex="-1" class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 outline-none leading-snug">
                {{ result.title }}
              </h2>

              <p class="text-sm text-gray-500 leading-relaxed mb-7">
                {{ result.description }}
              </p>

              <!-- Recommendations -->
              <div class="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-7">
                <h3 class="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <UIcon name="i-lucide-lightbulb" class="text-[#5a912d]" />
                  Personalised Recommendations
                </h3>
                <ul class="flex flex-col gap-3">
                  <li v-for="(rec, index) in result.recommendations" :key="index" class="flex items-start gap-2.5 text-sm text-gray-600">
                    <UIcon name="i-lucide-check-circle-2" class="text-[#5a912d] shrink-0 mt-0.5 text-sm" />
                    {{ rec }}
                  </li>
                </ul>
              </div>

              <NuxtLink
                to="/contact"
                class="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl mb-4 overflow-hidden"
                :style="{ background: `linear-gradient(to right, ${result.color}, ${result.color}dd)` }"
              >
                <span class="relative z-10 flex items-center gap-2">
                  {{ result.cta }}
                  <UIcon name="i-lucide-calendar-check" class="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </NuxtLink>

              <button
                @click="resetQuiz"
                class="group flex items-center justify-center gap-2 w-full text-sm text-gray-400 hover:text-gray-600 font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-all"
              >
                <UIcon name="i-lucide-rotate-ccw" class="group-hover:rotate-180 transition-transform duration-500 text-sm" />
                Retake the Quiz
              </button>
            </div>

          </div>
        </div>

        <!-- SIDEBAR -->
        <div class="lg:col-span-1 flex flex-col gap-5">

          <!-- Why take this -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 class="text-base font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <div class="p-1.5 bg-[#5a912d]/10 rounded-lg">
                <UIcon name="i-lucide-heart-pulse" class="text-[#5a912d] text-sm" />
              </div>
              Why Take This Quiz?
            </h4>
            <div class="flex flex-col gap-4">
              <div v-for="reason in whyReasons" :key="reason.title" class="flex items-start gap-3">
                <div class="p-1.5 bg-[#5a912d]/8 rounded-lg shrink-0 mt-0.5">
                  <UIcon :name="reason.icon" class="text-[#5a912d] text-sm" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-800 mb-0.5">{{ reason.title }}</p>
                  <p class="text-xs text-gray-500 leading-relaxed">{{ reason.body }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 class="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#5a912d]/10 rounded-lg">
                <UIcon name="i-lucide-phone-call" class="text-[#5a912d] text-sm" />
              </div>
              Need Expert Help?
            </h4>
            <p class="text-xs text-gray-500 mb-4 leading-relaxed">
              Our specialists are ready to answer your questions and provide personalised care.
            </p>
            <NuxtLink
  to="tel:+2349024866554"
  external
  class="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-[#5a912d]/6 transition-all border border-gray-100 hover:border-[#5a912d]/25 mb-3"
>
  <div class="p-1.5 bg-[#5a912d]/10 rounded-lg">
    <UIcon name="i-lucide-phone" class="text-[#5a912d] text-sm" />
  </div>
  <div>
    <p class="text-sm font-semibold text-gray-900">+234 902 486 6554</p>
    <p class="text-xs text-gray-500">Mon – Sat, during clinic hours</p>
  </div>
</NuxtLink>
            <NuxtLink
              to="/contact"
              class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#5a912d] hover:bg-[#487524] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm"
            >
              <UIcon name="i-lucide-calendar" class="text-sm" />
              Book an Appointment
            </NuxtLink>
          </div>

          <!-- Social proof -->
          <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
            <div class="flex justify-center -space-x-2.5 mb-3">
              <div v-for="avatar in avatars" :key="avatar.label" :aria-label="avatar.label"
                class="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                :style="{ background: avatar.color }"
              >{{ avatar.initials }}</div>
            </div>
            <p class="text-xs text-gray-500">
              Join <span class="text-[#5a912d] font-semibold">thousands</span> of patients who trust Shanadely Eye Clinic
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const step = ref(0)
const answers = ref({
  screenTime: null, eyeTired: null, breaks: null,
  blurryVision: null, headaches: null, glare: null,
  sunglasses: null, lastExam: null, nightVision: null,
})
const shakeNextButton = ref(false)
const animatedScore = ref(0)
const showError = ref(false)

const quizMeta = [
  { icon: 'i-lucide-clock', label: '1 minute' },
  { icon: 'i-lucide-shield-check', label: '100% Private' },
  { icon: 'i-lucide-sparkles', label: 'Instant Results' },
]

const whyReasons = [
  { icon: 'i-lucide-eye', title: 'Early Detection', body: 'Identify potential eye health issues before they become serious.' },
  { icon: 'i-lucide-target', title: 'Personalised Tips', body: 'Get recommendations based on your actual lifestyle and habits.' },
  { icon: 'i-lucide-shield-check', title: 'Prevention Focus', body: 'Learn how to protect your vision for years to come.' },
]

const avatars = [
  { initials: 'A', label: 'Patient A', color: '#5a912d' },
  { initials: 'B', label: 'Patient B', color: '#d95b00' },
  { initials: 'C', label: 'Patient C', color: '#3b82f6' },
  { initials: '+', label: 'Many more', color: '#7c3aed' },
]

const sections = [
  {
    title: 'Daily Habits & Screen Time',
    keys: ['screenTime', 'eyeTired', 'breaks'],
    questions: [
      { text: 'How many hours do you spend on screens daily?', key: 'screenTime',
        options: [{ text: 'Less than 2 hours', value: 0 }, { text: '2–5 hours', value: 1 }, { text: 'More than 6 hours', value: 2 }] },
      { text: 'Do your eyes feel tired, dry, or watery after screen use?', key: 'eyeTired',
        options: [{ text: 'Rarely', value: 0 }, { text: 'Sometimes', value: 1 }, { text: 'Often', value: 2 }] },
      { text: 'Do you take breaks from screens every 20 minutes?', key: 'breaks',
        options: [{ text: 'Always', value: 0 }, { text: 'Occasionally', value: 1 }, { text: 'Never', value: 2 }] },
    ],
  },
  {
    title: 'Vision Clarity & Discomfort',
    keys: ['blurryVision', 'headaches', 'glare'],
    questions: [
      { text: 'How often do you experience blurry vision?', key: 'blurryVision',
        options: [{ text: 'Never', value: 0 }, { text: 'Occasionally', value: 1 }, { text: 'Frequently', value: 2 }] },
      { text: 'Do you get headaches or eye pain after screen use?', key: 'headaches',
        options: [{ text: 'No', value: 0 }, { text: 'Sometimes', value: 1 }, { text: 'Yes, regularly', value: 2 }] },
      { text: 'Do bright lights or glare bother your eyes?', key: 'glare',
        options: [{ text: 'No', value: 0 }, { text: 'Occasionally', value: 1 }, { text: 'Yes', value: 2 }] },
    ],
  },
  {
    title: 'Lifestyle & Eye Health Awareness',
    keys: ['sunglasses', 'lastExam', 'nightVision'],
    questions: [
      { text: 'Do you wear sunglasses outdoors?', key: 'sunglasses',
        options: [{ text: 'Always', value: 0 }, { text: 'Sometimes', value: 1 }, { text: 'Rarely', value: 2 }] },
      { text: 'When was your last eye exam?', key: 'lastExam',
        options: [{ text: 'Within the last year', value: 0 }, { text: '1–2 years ago', value: 1 }, { text: 'Over 2 years ago', value: 2 }] },
      { text: 'Do you have trouble seeing clearly at night?', key: 'nightVision',
        options: [{ text: 'No', value: 0 }, { text: 'Sometimes', value: 1 }, { text: 'Yes', value: 2 }] },
    ],
  },
]

const currentSection = computed(() => sections[step.value - 1])
const isSectionComplete = computed(() => currentSection.value?.keys.every(k => answers.value[k] !== null) ?? false)
const questionsAnswered = computed(() => currentSection.value?.keys.filter(k => answers.value[k] !== null).length ?? 0)
const totalQuestions = computed(() => currentSection.value?.keys.length ?? 0)
const finalScore = computed(() => Object.values(answers.value).reduce((t, v) => t + (v || 0), 0))

function selectAnswer(key, value) {
  answers.value[key] = value
  showError.value = false
}

function nextStep() {
  if (isSectionComplete.value) {
    showError.value = false
    step.value = step.value < 3 ? step.value + 1 : 4
  } else {
    showError.value = true
    shakeNextButton.value = true
    setTimeout(() => { shakeNextButton.value = false }, 600)
  }
}

function resetQuiz() {
  Object.keys(answers.value).forEach(k => { answers.value[k] = null })
  step.value = 0
  animatedScore.value = 0
  showError.value = false
}

watch(step, (newStep) => {
  if (newStep > 0 && newStep <= 3) {
    nextTick(() => document.getElementById(`section-title-${newStep}`)?.focus())
  } else if (newStep === 4) {
    nextTick(() => document.getElementById('result-title')?.focus())
    const target = finalScore.value
    if (target === 0) { animatedScore.value = 0; return }
    const steps = 800 / 16
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) { animatedScore.value = target; clearInterval(interval) }
      else animatedScore.value = Math.round(current)
    }, 16)
  }
})

const result = computed(() => {
  const s = finalScore.value
  if (s <= 5) return {
    title: "You're a Bright Eye Champion!",
    icon: 'i-lucide-award', color: '#5a912d',
    description: "Your eye health habits are excellent. Even so, an annual check-up keeps you ahead of any changes.",
    cta: 'Book Your Annual Check-up',
    recommendations: [
      'Continue the 20-20-20 rule during screen time',
      'Maintain your annual eye exam routine',
      'Keep wearing UV-protective sunglasses outdoors',
      'Stay hydrated for optimal eye moisture',
    ],
  }
  if (s <= 11) return {
    title: "You're a Digital Vision Hero!",
    icon: 'i-lucide-shield-check', color: '#d95b00',
    description: "You're doing well, but screen time may be catching up with you. A vision check will keep you sharp.",
    cta: 'Schedule an Eye Evaluation',
    recommendations: [
      'Practice the 20-20-20 rule: every 20 min, look 20 ft away for 20 seconds',
      'Consider blue light filtering glasses for extended screen use',
      'Schedule a comprehensive eye exam within the next 3 months',
      'Adjust screen brightness and position for optimal comfort',
    ],
  }
  return {
    title: 'Vision Care Recommended',
    icon: 'i-lucide-alert-triangle', color: '#D92626',
    description: "Your responses suggest eye strain or possible prescription changes. The right care will have you seeing clearly again.",
    cta: 'Book an Appointment Now',
    recommendations: [
      'Schedule a comprehensive eye exam as soon as possible',
      'Take screen breaks every 20 minutes immediately',
      'Use artificial tears if experiencing dryness',
      'Discuss all symptoms with an eye care professional',
    ],
  }
})
</script>

<style scoped>
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
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
.animate-fade-in-up { opacity: 0; animation: fadeInUp 0.5s ease-out forwards; }

@keyframes shake {
  10%, 90% { transform: translateX(-2px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-3px); }
  40%, 60% { transform: translateX(3px); }
}
.animate-shake { animation: shake 0.5s ease-in-out; }
</style>