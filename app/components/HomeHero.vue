<template>
  <section class="main relative w-full min-h-[90dvh] flex items-center justify-center overflow-hidden mt-[10vh]">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-linear-to-br from-black/90 via-black/70 to-transparent animate-gradient" />
      <div class="absolute top-20 left-10 w-72 h-72 bg-[#7fc540]/20 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

        <!-- LEFT -->
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 w-full lg:w-[55%]">

          <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-medium animate-fade-in">
            <span class="w-1.5 h-1.5 bg-[#7fc540] rounded-full animate-pulse"></span>
            Trusted Eye Care Since 2019
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
            Quality Eye Care,
            <span class="block mt-1 bg-linear-to-r from-[#7fc540] to-[#6ab030] bg-clip-text text-transparent animate-slide-up-delayed">
              Accessible to Everyone
            </span>
          </h1>

          <p class="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed animate-fade-in-delayed">
            Expert, affordable, and compassionate care to help you see the world clearly.
          </p>

          <div class="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-200 text-sm animate-fade-in-delayed">
            <UIcon name="i-lucide-map-pin" class="text-[#7fc540] text-sm" />
            <p class="font-medium">Abuja, Nigeria</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-fade-in-delayed w-full sm:w-auto">
            <NuxtLink
              to="/contact"
              class="group relative px-7 py-3.5 bg-linear-to-r from-[#7fc540] to-[#6ab030] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#7fc540]/50 w-full sm:w-auto overflow-hidden text-center text-sm"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                Book Your Eye Test Today
                <UIcon name="i-lucide-arrow-right" class="transition-transform group-hover:translate-x-1" />
              </span>
              <div class="absolute inset-0 bg-linear-to-r from-[#6ab030] to-[#7fc540] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="group px-7 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 w-full sm:w-auto hover:shadow-xl text-center text-sm"
            >
              <span class="flex items-center justify-center gap-2">
                Learn More About Us
                <UIcon name="i-lucide-info" class="transition-transform group-hover:rotate-12" />
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT: Hours card -->
        <div class="w-full max-w-sm lg:w-[42%] animate-slide-up-delayed">
          <div class="bg-linear-to-br from-orange-500 to-orange-600  p-6 shadow-2xl relative overflow-hidden border border-white/10">

            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
            </div>

            <div class="relative z-10 space-y-4">

              <div class="flex items-center gap-2.5">
                <div class="p-2 bg-white/20 rounded-lg">
                  <UIcon name="i-lucide-clock" class="text-white text-lg" />
                </div>
                <h3 class="text-lg font-bold text-white">Clinic Hours</h3>
              </div>

              <!-- Days list -->
              <div class="flex flex-col divide-y divide-white/10">
                <div
                  v-for="day in clinicHours"
                  :key="day.label"
                  class="flex justify-between items-center py-2"
                >
                  <span class="text-white/80 text-sm">{{ day.label }}</span>
                  <span
                    :class="day.closed ? 'text-white/35' : 'text-white font-medium'"
                    class="text-sm"
                  >
                    {{ day.time }}
                  </span>
                </div>
              </div>

              <p class="text-xs text-white/60 text-right">All times in WAT</p>

              <!-- Trust badges -->
              <div class="grid grid-cols-2 gap-3 pt-1 border-t border-white/15">
                <div v-for="item in trustItems" :key="item" class="flex items-center gap-2 group">
                  <div class="p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors shrink-0">
                    <UIcon name="i-lucide-check" class="text-white text-xs" />
                  </div>
                  <p class="text-xs font-semibold text-white">{{ item }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clinicHours = [
  { label: 'Monday',    time: '8:30 AM – 5:00 PM', closed: false },
  { label: 'Tuesday',   time: '8:30 AM – 5:00 PM', closed: false },
  { label: 'Wednesday', time: '8:30 AM – 5:00 PM', closed: false },
  { label: 'Thursday',  time: '8:30 AM – 5:00 PM', closed: false },
  { label: 'Friday',    time: '8:30 AM – 5:00 PM', closed: false },
  { label: 'Saturday',  time: '8:30 AM – 4:30 PM', closed: false },
  { label: 'Sunday',    time: 'Appointment only',             closed: true  },
]

const trustItems = ['Expert Doctors', 'Quality Service', 'Affordable Care', 'Modern Equipment']
</script>

<style scoped>
section {
  background: url('/img/shero.webp') center center/cover no-repeat;
}

@keyframes gradient {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
.animate-gradient { animation: gradient 8s ease-in-out infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(10px); }
}
@keyframes float-delayed {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(20px) translateX(-10px); }
}
.animate-float { animation: float 8s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
.animate-slide-up-delayed { opacity: 0; animation: slideUp 0.8s ease-out 0.2s forwards; }
.animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
.animate-fade-in-delayed { opacity: 0; animation: fadeIn 0.8s ease-out 0.4s forwards; }
</style>