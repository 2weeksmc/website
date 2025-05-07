<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true,
    default: '#aaaaaa',
  },
  name: {
    type: String,
    required: true,
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
  pluginSupportAmount: {
    type: Number,
    required: true,
  },
  modSupportAmount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  special: {
    type: String,
  },
  popular: {
    type: Boolean,
  },
})

const styleVars = computed(() => ({
  borderTop: `5px solid ${props.color}`,
  borderBottom: `5px solid #272727`,
}))
</script>

<template>
  <div
    :class="{
      'outline-4': popular /* outline-width: 2px */,
      'outline-[#e5453f]': popular /* outline-color: #e5453f */,
    }"
    :style="styleVars"
    class="relative overflow-visible m-8 px-4 py-8 w-[calc(100%-2rem)] h-120 flex flex-col items-center bg-[#2E2E2E] rounded-lg text-[#DEDEDE]"
  >
    <a class="absolute -top-4 -right-4 px-2 py-1 text-end rounded-full bg-[#e5453f]" v-if="popular"
      >Popular</a
    >
    <p class="text-center text-2xl text-white font-semibold">{{ name }}</p>
    <div class="flex flex-col items-center gap-4">
      <p class="mt-4 text-center text-white font-semibold">{{ cpu }}</p>
      <p class="text-center">{{ ram }} GB DDR5 RAM</p>
      <p class="text-center">{{ storage }} GB NVMe Storage</p>
      <p class="text-center">{{ pluginSupportAmount }} Plugins supported</p>
      <p class="text-center">{{ modSupportAmount }} Mods supported</p>
    </div>
    <div class="flex-grow"></div>
    <p class="mb-8 text-center">{{ special }}</p>
    <input
      type="button"
      :value="props.price + ' €'"
      class="w-2/3 h-10 bg-[#FF8C00] rounded-lg text-xl"
    />
  </div>
</template>
