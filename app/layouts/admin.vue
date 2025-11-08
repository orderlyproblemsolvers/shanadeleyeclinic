<template>
  <div class="min-h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900">
    <!-- Mobile backdrop -->
    <Transition name="fade">
      <div
        v-if="sidebarOpen"
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      />
    </Transition>

    <!-- Sidebar -->
    <aside
      :class="[
        'group flex flex-col items-center bg-slate-800 text-white p-4 transition-all duration-300 z-50',
        'fixed lg:relative h-full flex-shrink-0',
        sidebarOpen ? 'w-56 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0',
        !sidebarOpen && 'lg:hover:w-56'
      ]"
    >
      <!-- Top section with logo -->
      <div class="flex items-center justify-between mb-6 w-full min-h-[48px]">
        <!-- Logo - show when sidebar is open -->
        <Transition name="fade">
          <img
            v-show="sidebarOpen"
            src="/img/shanadel-light.png"
            alt="Admin Logo"
            class="h-10 w-auto object-contain"
          />
        </Transition>
        
        <!-- Mobile close button -->
        <button
          v-if="sidebarOpen"
          @click="sidebarOpen = false"
          class="lg:hidden text-gray-400 hover:text-white ml-auto"
        >
          <UIcon name="i-lucide-x" class="text-2xl" />
        </button>
      </div>

      <!-- Navigation links -->
      <nav class="flex flex-col gap-2 w-full flex-grow">
        <NuxtLink
          v-for="path in paths"
          :key="path.pathName"
          :to="path.pathRoute"
          @click="closeMobileSidebar"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/link"
          :class="{
            'bg-[#7fc540] text-white shadow-lg': isActive(path.pathRoute),
            'text-gray-300 hover:text-white hover:bg-slate-700': !isActive(path.pathRoute)
          }"
        >
          <!-- Icon -->
          <UIcon 
            :name="`i-lucide-${path.pathIcon}`" 
            class="text-xl flex-shrink-0"
          />
          
          <!-- Label -->
          <span
            class="whitespace-nowrap transition-all duration-200 overflow-hidden"
            :class="{
              'opacity-100 w-auto': sidebarOpen,
              'opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-auto': !sidebarOpen
            }"
          >
            {{ path.pathName }}
          </span>
        </NuxtLink>
      </nav>

      <!-- Logout -->
      <button
        @click="logout"
        class="mt-auto flex items-center gap-3 text-red-400 font-semibold cursor-pointer px-3 py-2.5 rounded-lg hover:bg-slate-700 transition-all w-full"
      >
        <UIcon name="i-lucide-log-out" class="text-xl flex-shrink-0" />
        <span
          class="whitespace-nowrap transition-all duration-200 overflow-hidden"
          :class="{
            'opacity-100 w-auto': sidebarOpen,
            'opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-auto': !sidebarOpen
          }"
        >
          Logout
        </span>
      </button>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col min-h-screen lg:min-h-0">
      <!-- Mobile top bar -->
      <header class="lg:hidden flex items-center gap-4 bg-slate-800 text-white p-4 sticky top-0 z-30">
        <button @click="sidebarOpen = true" class="text-gray-300 hover:text-white">
          <UIcon name="i-lucide-menu" class="text-2xl" />
        </button>
        <img
          src="/img/shanadel-light.png"
          alt="Admin Logo"
          class="h-8 w-auto object-contain"
        />
      </header>

      <!-- Scrollable content -->
      <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient, useRoute, navigateTo } from '#imports'
import { ref, watch } from 'vue'

const supabase = useSupabaseClient()
const route = useRoute()
const sidebarOpen = ref(false)

const paths = [
  { pathName: 'Dashboard', pathRoute: '/admin', pathIcon: 'home' },
  { pathName: 'Blog Posts', pathRoute: '/admin/blog', pathIcon: 'file-text' },
  { pathName: 'Appointments', pathRoute: '/admin/appointments', pathIcon: 'calendar' }
]

// Check if route is active
function isActive(pathRoute) {
  if (pathRoute === '/admin') {
    return route.path === '/admin'
  }
  return route.path.startsWith(pathRoute)
}

// Close mobile sidebar
function closeMobileSidebar() {
  if (process.client && window.innerWidth < 1024) {
    sidebarOpen.value = false
  }
}

// Close sidebar on route change (mobile only)
if (process.client) {
  watch(() => route.path, () => {
    if (window.innerWidth < 1024) {
      sidebarOpen.value = false
    }
  })
}

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Logout error:', error.message)
  } else {
    await navigateTo('/login')
  }
}
</script>

<style scoped>
/* Smooth transitions */
aside {
  transition: width 0.3s ease, transform 0.3s ease;
}

/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>