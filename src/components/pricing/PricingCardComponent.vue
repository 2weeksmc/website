<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true,
    default: '#aaaaaa',
  },
  cpu: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  special: {
    type: String,
  },
})
</script>

<template>
  <div
    :class="{ 'border-[${props.color}]': props.color !== undefined }"
    class="m-8 w-full h-100 bg-stone-700 border-2 rounded-lg"
  ></div>
</template>
