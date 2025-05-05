<script setup lang="ts">
const props = defineProps({
  information: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-wrap gap-8">
    <label v-for="info in props.information" :for="info" class="min-w-50">
      {{ info }}
      <p>XYZ</p>
    </label>
  </div>
</template>
