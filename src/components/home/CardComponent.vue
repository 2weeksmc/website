<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true,
  },
  head: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="p-4 w-66 h-66 flex flex-col items-center bg-[#1E1E1E] rounded-2xl">
    <div class="w-16 h-16 bg-[#FF8C00] rounded-xl">
      <img :src="img" alt="" />
    </div>
    <p class="my-2 text-xl">{{ head }}</p>
    <p class="text-center">
      {{ desc }}
    </p>
  </div>
</template>
