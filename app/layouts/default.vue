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

body {
  margin: 0;
  padding: 0;
}
</style>