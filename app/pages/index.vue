<template>
  <main class="overflow-x-hidden">
    <HomeHero />
    <HomeServices />
    <HomeAbout />
    <HomeQuiz />
    <HomeAppointment />
    <HomeBlog />
  </main>
</template>

<script setup>
// 1. Existing OgImage setup
defineOgImageComponent('InfoPages', {
  title: 'Premium Eye Care Services in Abuja | Shanadel Eye Clinic'
})

// 2. Strong Homepage Meta Tags
useSeoMeta({
  title: 'Best Eye Clinic in Abuja | Comprehensive Vision Care | Shanadel Eye Clinic',
  description: 'Shanadel Eye Clinic offers premium eye care services in Wuye, Abuja. We specialize in comprehensive eye exams, pediatric vision care, glaucoma management, and stylish optical dispensing.',
  keywords: 'eye clinic Abuja, best optometrist in Abuja, eye doctor near me, vision care, eye exam Wuye, Shanadel Eye Clinic, optical glasses Abuja',
  ogTitle: 'Premium Eye Care Services in Abuja | Shanadel Eye Clinic',
  ogDescription: 'Experience expert optometry and compassionate eye care at Shanadel Eye Clinic. Book your comprehensive eye examination today.',
  ogType: 'website',
  ogUrl: 'https://shanadeleyeclinicltd.com.ng/', // Update with actual URL
  twitterCard: 'summary_large_image',
})

// 3. Master LocalBusiness & MedicalClinic Schema
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://shanadeleyeclinicltd.com.ng/' // Update with actual URL
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Shanadel Eye Clinic",
        "alternateName": "Shanadel Eye Clinic Abuja",
        "description": "A premier eye clinic providing comprehensive eye examinations, pediatric eye care, optical dispensing, and management of various eye conditions.",
        "url": "https://shanadeleyeclinicltd.com.ng/",
        "logo": "https://shanadeleyeclinicltd.com.ng/img/shanadel-lg.webp",
        "image": "https://shanadeleyeclinicltd.com.ng/img/indoors.webp",
        "telephone": "+2349024866554",
        "email": "shanadeleyeclinic@gmail.com",
        "medicalSpecialty": "Optometry",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite A4, Triple H Plaza, Wuye",
          "addressLocality": "Abuja",
          "addressRegion": "FCT",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.0558", // Update with exact coordinates if needed
          "longitude": "7.4526"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:30",
            "closes": "16:30"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Dr. Zephyr Alabegbe"
        },
        "priceRange": "$$",
        "acceptsReservations": "True"
      })
    }
  ]
})
</script>

<style>
/* Any global homepage styles can go here */
</style>