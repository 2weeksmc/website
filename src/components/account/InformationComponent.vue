<script setup lang="ts">
import { type PropType } from 'vue'

const props = defineProps({
  information: {
    type: Array as PropType<string[]>,
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
