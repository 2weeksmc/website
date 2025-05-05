<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: 'h-100',
  },
})

const containerClass = [
  'relative',
  'w-full',
  props.height,
  'bg-[url("/server.png")]',
  'bg-no-repeat',
  'bg-cover',
  'bg-center',
]
</script>

<template>
  <div :class="containerClass">
    <div class="absolute w-full h-full bg-[#FF8C00]/15"></div>
  </div>
</template>
