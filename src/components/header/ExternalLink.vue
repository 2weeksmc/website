<script setup lang="ts">
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
    <a :href="route" class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400">{{
      routeName
    }}</a>
  </div>
</template>
