<template>
  <section class="relative bg-gray-950 py-16 lg:py-24 overflow-hidden min-h-screen">

    <div aria-hidden="true" class="absolute top-0 left-0 w-80 h-80 bg-[#7fc540]/8 rounded-full blur-3xl animate-float pointer-events-none" />
    <div aria-hidden="true" class="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs font-medium text-gray-400 mb-4">
          <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full animate-pulse" />
          Data Protection & Privacy
        </span>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p class="text-sm text-gray-400">Last updated: April 2026</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

        <div class="lg:col-span-2">
          <div class="bg-white/4 border border-white/10 rounded-2xl p-7 md:p-9 space-y-10">
            
            <div class="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                At <strong>Shanadel Eye Clinic</strong>, your privacy and the security of your personal and medical information are our top priorities. This Privacy Policy outlines how we collect, use, and protect your data when you use our website, book appointments, or visit our clinic in Abuja.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy. We strictly adhere to medical confidentiality standards and local data protection regulations.
              </p>
            </div>

            <div class="h-px w-full bg-white/10" />

            <div v-for="(section, index) in privacySections" :key="index" class="space-y-4" :id="section.id">
              <h2 class="text-xl font-bold text-white flex items-center gap-3">
                <div class="p-2 bg-[#7fc540]/15 rounded-lg shrink-0">
                  <UIcon :name="section.icon" class="text-[#7fc540] text-lg" />
                </div>
                {{ section.title }}
              </h2>
              <div class="text-gray-300 text-sm leading-relaxed space-y-3">
                <p v-for="(paragraph, pIndex) in section.content" :key="pIndex">
                  {{ paragraph }}
                </p>
                <ul v-if="section.list" class="list-disc pl-5 space-y-1 mt-2 text-gray-400">
                  <li v-for="(item, iIndex) in section.list" :key="iIndex">{{ item }}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="flex flex-col gap-5 sticky top-24">

          <div class="bg-white/4 border border-white/10 rounded-2xl p-6 hidden lg:block">
            <h4 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#7fc540]/15 rounded-lg">
                <UIcon name="i-lucide-list" class="text-[#7fc540] text-sm" />
              </div>
              In this Policy
            </h4>
            <div class="flex flex-col gap-2">
              <a 
                v-for="section in privacySections" 
                :key="section.id" 
                :href="`#${section.id}`"
                class="text-xs text-gray-400 hover:text-[#7fc540] transition-colors py-1.5 flex items-center gap-2"
              >
                <UIcon name="i-lucide-chevron-right" class="text-[10px] opacity-50" />
                {{ section.title }}
              </a>
            </div>
          </div>

          <div class="bg-white/4 border border-white/10 rounded-2xl p-6">
            <h4 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <div class="p-1.5 bg-[#7fc540]/15 rounded-lg">
                <UIcon name="i-lucide-shield-question" class="text-[#7fc540] text-sm" />
              </div>
              Privacy Questions?
            </h4>
            <p class="text-xs text-gray-400 mb-4 leading-relaxed">
              If you have any questions about how we handle your medical data, or wish to request your records, please contact our administrative team.
            </p>
            <div class="flex flex-col gap-3">
              <NuxtLink
                to="mailto:shanadeleyeclinic@gmail.com"
                external
                class="flex items-center gap-3 p-3.5 rounded-xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/18 transition-all group"
              >
                <div class="p-1.5 bg-[#7fc540]/15 rounded-lg shrink-0 group-hover:bg-[#7fc540]/25 transition-colors">
                  <UIcon name="i-lucide-mail" class="text-[#7fc540] text-sm" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-white truncate max-w-[150px]">shanadeleyeclinic@gmail.com</p>
                  <p class="text-xs text-gray-500">Data Protection Officer</p>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="flex items-center justify-center gap-2 w-full p-3.5 rounded-xl border border-[#7fc540]/50 text-[#7fc540] text-sm font-medium hover:bg-[#7fc540] hover:text-white transition-all duration-300"
              >
                Go to Contact Page
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const privacySections = [
  {
    id: 'information-we-collect',
    icon: 'i-lucide-database',
    title: '1. Information We Collect',
    content: [
      'To provide you with the best possible eye care, we collect various types of information, including:',
    ],
    list: [
      'Personal Identification: Name, date of birth, address, email, and phone number.',
      'Medical History: Previous eye exams, medical conditions, current medications, and family eye health history.',
      'Payment Information: Billing details and insurance information (handled securely via third-party processors).',
      'Usage Data: Information about how you interact with our website to help us improve user experience.'
    ]
  },
  {
    id: 'how-we-use-it',
    icon: 'i-lucide-activity',
    title: '2. How We Use Your Information',
    content: [
      'Your personal and medical information is used exclusively to facilitate your healthcare and improve our clinic\'s operations:',
    ],
    list: [
      'To schedule and manage your appointments.',
      'To provide accurate diagnoses, treatments, and prescriptions (e.g., glasses or contact lenses).',
      'To communicate with you regarding appointment reminders, test results, and follow-up care.',
      'To process payments and coordinate with your health insurance providers.'
    ]
  },
  {
    id: 'data-protection',
    icon: 'i-lucide-lock',
    title: '3. Data Protection & Security',
    content: [
      'We implement robust security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Electronic medical records are stored on encrypted, secure servers, and physical records are kept in locked facilities accessible only to authorized medical personnel.',
      'Our staff undergoes regular training on patient confidentiality and data privacy protocols.'
    ]
  },
  {
    id: 'information-sharing',
    icon: 'i-lucide-share-2',
    title: '4. Sharing Your Information',
    content: [
      'Shanadel Eye Clinic does not sell or rent your personal information. We may share your information only in the following circumstances:'
    ],
    list: [
      'With other healthcare professionals for specialist referrals, with your explicit consent.',
      'With trusted third-party service providers (e.g., optical labs creating your lenses) who are bound by strict confidentiality agreements.',
      'When required by law, court order, or governmental regulation.'
    ]
  },
  {
    id: 'your-rights',
    icon: 'i-lucide-user-check',
    title: '5. Your Rights',
    content: [
      'You have the right to access, review, and request corrections to your personal and medical information. You may also request a copy of your records or ask us to delete your non-medical personal data from our marketing communications at any time.',
      'To exercise any of these rights, please contact us using the details provided on this page.'
    ]
  }
]
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

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>