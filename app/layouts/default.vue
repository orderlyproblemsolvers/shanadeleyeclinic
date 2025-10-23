<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// You can add global layout logic here
</script>

<style>
/* Global styles for the layout */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}
</style>