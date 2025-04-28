<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  route: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative py-2">
    <a
      :href="route"
      :class="{
        'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
          useRoute().path === route,
      }"
      class="transition-colors duration-200 ease-in-out hover:text-stone-400"
      >{{ routeName }}</a
    >
  </div>
</template>
