<template>
  <div class="bg-white">

    <!-- Top bar -->
    <div class="w-full bg-orange-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div class="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-6 text-white">
          <a href="tel:+2349024866554" aria-label="Call Shanadel Eye Clinic" class="flex items-center gap-2 text-sm font-semibold hover:text-orange-100 transition-colors">
            <UIcon name="i-lucide-phone" class="text-base" aria-hidden="true" />
            +234 902 486 6554
          </a>
          <a href="mailto:shanadeleyeclinic@gmail.com" aria-label="Email Shanadel Eye Clinic" class="flex items-center gap-2 text-sm font-semibold hover:text-orange-100 transition-colors">
            <UIcon name="i-lucide-mail" class="text-base" aria-hidden="true" />
            <span class="hidden sm:inline">shanadeleyeclinic@gmail.com</span>
            <span class="sm:hidden">Email Us</span>
          </a>
          <div class="flex items-center gap-2 text-sm font-semibold">
            <UIcon name="i-lucide-clock" class="text-base" aria-hidden="true" />
            Mon – Fri: 8:30 AM – 5:00 PM
          </div>
        </div>
      </div>
    </div>

    <!-- Booking form -->
    <HomeAppointment />

    <!-- FAQ -->
    <section class="relative w-full py-16 lg:py-24">
      <div class="absolute inset-0 z-0">
        <img src="/img/consult.webp" alt="Shanadely Eye Clinic interior" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gray-900/80" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-gray-300 mb-4">
            <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full" />
            Common Questions
          </span>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p class="text-sm text-gray-400">Quick answers to common questions about our services.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#7fc540]/50 hover:bg-white/8"
          >
            <div class="w-10 h-10 rounded-xl bg-[#7fc540]/15 flex items-center justify-center mb-4">
              <UIcon :name="faq.icon" class="text-[#7fc540] text-lg" aria-hidden="true" />
            </div>
            <h3 class="text-base font-semibold text-white mb-2 leading-snug">{{ faq.question }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
defineOgImageComponent('InfoPages', {
  title: 'Contact & Appointments | Shanadely Eye Clinic'
})

useSeoMeta({
  title: 'Contact Shanadely Eye Clinic | Book an Eye Exam in Abuja',
  description: 'Book an appointment at Shanadely Eye Clinic in Wuye, Abuja. Schedule a comprehensive eye exam with Dr. Alabegbe, ask questions, or inquire about NHIS coverage.',
  keywords: 'eye clinic Abuja, optometrist near me, book eye exam Abuja, eye doctor Wuye, Shanadel eye clinic contact',
  ogTitle: 'Book an Appointment | Shanadely Eye Clinic Abuja',
  ogDescription: 'Contact us today to schedule your comprehensive eye examination or pediatric vision screening.',
  ogType: 'website',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['MedicalClinic', 'LocalBusiness'],
        name: 'Shanadely Eye Clinic',
        description: 'Premium eye care services, optometry, and optical dispensing in Abuja.',
        url: 'https://shanadeleyeclinicltd.com.ng/contact',
        telephone: '+2349024866554',
        email: 'shanadeleyeclinic@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Suite A4, Triple H Plaza, Wuye',
          addressLocality: 'Abuja',
          addressRegion: 'FCT',
          addressCountry: 'NG',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '08:30', closes: '16:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '15:00' },
        ],
        acceptsReservations: 'True',
      }),
    },
  ],
})

const faqs = [
  {
    icon: 'i-lucide-help-circle',
    question: 'How often should I have an eye test?',
    answer: 'We recommend a comprehensive eye examination at least once every 12–24 months, depending on your age and any existing conditions.',
  },
  {
    icon: 'i-lucide-smile',
    question: 'Do you treat children?',
    answer: 'Yes! We offer gentle, specialised pediatric eye care for kids of all ages in a comfortable, child-friendly environment.',
  },
  {
    icon: 'i-lucide-shield-check',
    question: 'Can I use my NHIS or health insurance?',
    answer: 'Absolutely. We are NHIS-approved and accept various insurance plans. Please bring your insurance card for verification.',
  },
]
</script>