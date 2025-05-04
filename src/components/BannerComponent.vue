<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: 'h-100',
  },
  img: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    :class="[
      'relative',
      'w-full',
      height,
      'bg-[url(' + img + ')]',
      'bg-no-repeat',
      'bg-cover',
      'bg-center',
    ]"
  >
    <div class="absolute w-full h-full bg-[#FF8C00]/15"></div>
  </div>
</template>
