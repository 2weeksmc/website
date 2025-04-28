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
  <div
    class="p-4 w-64 h-60 flex flex-col items-center bg-[#1E1E1E] rounded-2xl cursor-pointer duration-200 ease-in-out hover:-translate-y-2"
  >
    <div class="w-16 h-16 flex justify-center items-center bg-[#FF8C00] rounded-xl">
      <img :src="'/' + img + '.svg'" alt="" class="w-12 h-12" />
    </div>
    <p class="my-2 text-xl text-center">{{ head }}</p>
    <p class="text-center">
      {{ desc }}
    </p>
  </div>
</template>
