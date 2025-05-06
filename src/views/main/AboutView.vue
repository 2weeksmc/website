<script setup lang="ts">
import BannerComponent from '@/components/BannerComponent.vue'
</script>

<template>
  <main class="w-full min-h-[calc(100svh-21rem)] text-white">
    <BannerComponent height="h-80" title="About" sub-title="Who we are and what we are doing?" />
    <div class="w-full flex flex-col items-center">
      <div class="my-16 w-3/4 min-h-100 flex bg-[#1E1E1E] rounded-2xl"></div>
    </div>
  </main>
</template>
