<template>
  <span :class="badgeClass" class="px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
    {{ status }}
  </span>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true,
    default: 'pending'
  }
})

const badgeClass = computed(() => {
  switch (props.status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    case 'pending':
    default:
      return 'bg-yellow-100 text-yellow-800'
  }
})
</script>