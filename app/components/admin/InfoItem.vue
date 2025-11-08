<template>
  <div>
    <label class="text-xs font-medium text-gray-500 uppercase flex items-center gap-1.5">
      <UIcon :name="icon" class="w-4 h-4" />
      {{ label }}
    </label>
    <div class="mt-1 text-sm text-gray-900 font-semibold">
      <a v-if="isLink" :href="isLink" class="text-[#7fc540] hover:text-[#6ab030] hover:underline break-words">
        {{ value }}
      </a>
      <p v-else-if="value" class="break-words">{{ value }}</p>
      <slot v-else />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  value: String,
  isLink: {
    type: [String, Boolean],
    default: false
  }
})
</script>