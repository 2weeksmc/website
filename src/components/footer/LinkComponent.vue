<script setup lang="ts">
const props = defineProps({
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
  <div>
    <a
      :href="props.route"
      class="inline-block transition-all duration-200 ease-in-out hover:text-[#FF8C00] hover:translate-x-1"
      >{{ routeName }}</a
    >
  </div>
</template>
