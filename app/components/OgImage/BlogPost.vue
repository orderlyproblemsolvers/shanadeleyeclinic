<script setup lang="ts">
// Props for customizing the OG image
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Shanadel Eye Clinic',
  description: 'Expert Eye Care Services in Nigeria'
})
</script>

<template>
  <div style="display: flex; height: 100%; width: 100%; flex-direction: column; justify-content: space-between; background: linear-gradient(135deg, #ffffff 0%, #dcfce7 40%, #bbf7d0 70%, #fed7aa 100%); padding: 64px;">
    <!-- Logo and Title Section -->
    <div style="display: flex; flex-direction: row; align-items: center; gap: 32px;">
      <!-- Shanadel Logo -->
      <div style="display: flex; width: 148px; height: 148px; align-items: center; justify-content: center;">
        <img 
          src="/img/shanadel-lg.png" 
          alt="Shanadel Logo" 
          width="148"
          height="148"
          style="object-fit: contain;"
        />
      </div>
      
      <div style="display: flex; flex-direction: column;">
        <h1 style="font-size: 72px; font-weight: 900; color: #15803d; margin: 0; letter-spacing: -0.025em;">
          {{ title }}
        </h1>
      </div>
    </div>

    <!-- Description Section -->
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <p style="font-size: 40px; font-weight: 600; color: #166534; margin: 0; line-height: 1.5;">
        Read this article at shanadeleyeclinicltd.com.ng
      </p>
      
      <!-- Decorative line with gradient -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 128px; height: 8px; background: linear-gradient(90deg, #7fc540 0%, #ff6900 100%); border-radius: 9999px;"></div>
        <span style="font-size: 20px; font-weight: 600; color: #15803d; letter-spacing: 0.05em;">
          We Make You Smile
        </span>
      </div>
    </div>
  </div>
</template>