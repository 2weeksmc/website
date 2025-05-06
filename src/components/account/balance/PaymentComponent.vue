<script setup lang="ts">
import { type PropType } from 'vue'

const props = defineProps({
  name: { type: String as PropType<string>, required: true },
  selected: { type: String as PropType<string | null>, default: null },
})

const emit = defineEmits<{
  (e: 'select', method: string): void
}>()

function onClick() {
  emit('select', props.name)
}
</script>

<template>
  <div
    :class="{
      'shadow-[0_0_5px_1px_#ffffff]': selected === props.name,
    }"
    class="overflow-hidden h-20 flex justify-center items-center rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
    @click="onClick"
  >
    <img
      :src="`/recharge/${props.name}.png`"
      alt=""
      class="object-cover object-center w-full h-full"
    />
  </div>
</template>
