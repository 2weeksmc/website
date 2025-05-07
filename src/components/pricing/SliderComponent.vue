<script setup>
import { defineProps, defineEmits, computed, ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Slider' },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 10 },
  width: { type: [Number, String], default: '100%' },
  trackHeight: { type: Number, default: 2 }, // px
  tickHeight: { type: Number, default: 6 }, // px
  thumbSize: { type: Number, default: 24 }, // px
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])

const wrapperEl = ref(null)
const dragging = ref(false)

const range = computed(() => props.max - props.min)
const pct = computed(() => ((props.modelValue - props.min) / range.value) * 100)

const ticks = computed(() => {
  const arr = []
  for (let v = props.min; v <= props.max; v += props.step) {
    arr.push(v)
  }
  if (arr[arr.length - 1] !== props.max) arr.push(props.max)
  return arr
})

function setValueFromEvent(e) {
  const rect = wrapperEl.value.getBoundingClientRect()
  let x = e.clientX - rect.left
  x = Math.max(0, Math.min(x, rect.width))
  let v = props.min + (x / rect.width) * range.value
  v = Math.round(v / props.step) * props.step
  v = Math.min(props.max, Math.max(props.min, v))
  emit('update:modelValue', v)
}

function onPointerDown(e) {
  dragging.value = true
  setValueFromEvent(e)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}
function onPointerMove(e) {
  if (dragging.value) setValueFromEvent(e)
}
function onPointerUp() {
  dragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

onBeforeUnmount(() => onPointerUp())
</script>

<template>
  <div
    :style="{ width: typeof width === 'number' ? width + 'px' : width }"
    class="px-8 flex flex-col items-start"
  >
    <!-- Label + value -->
    <label class="text-sm font-medium mb-2">
      {{ label }}: <span class="font-semibold">{{ modelValue }}</span>
    </label>

    <!-- Slider wrapper -->
    <div ref="wrapperEl" class="relative w-full pb-8 overflow-visible" @pointerdown="onPointerDown">
      <!-- Track (dark gray) -->
      <div
        :style="{ height: trackHeight + 'px' }"
        class="w-full bg-[#2E2E2E] rounded-full z-0"
      ></div>

      <!-- Fill (orange) -->
      <div
        :style="{ width: pct + '%', height: trackHeight + 'px' }"
        class="absolute left-0 top-0 bg-[#FF8C00] rounded-full z-10"
      ></div>

      <!-- Ticks + Labels (teal accent) -->
      <div class="absolute left-0 top-0 w-full pointer-events-none z-20">
        <template v-for="tick in ticks" :key="tick">
          <div
            class="absolute flex flex-col items-center"
            :style="{ left: ((tick - min) / range) * 100 + '%' }"
          >
            <div :style="{ height: tickHeight + 'px' }" class="w-px bg-[#00BFA6]"></div>
            <div class="mt-1 text-xs select-none text-[#00BFA6]">
              {{ tick }}
            </div>
          </div>
        </template>
      </div>

      <!-- Thumb (visible above all) -->
      <div
        class="absolute bg-white border-2 rounded-full shadow-lg z-50"
        :style="{
          left: pct + '%',
          top: trackHeight / 2 + 'px',
          width: thumbSize + 'px',
          height: thumbSize + 'px',
          transform: 'translate(-50%, -50%)',
          borderColor: '#FF8C00',
        }"
      ></div>
    </div>
  </div>
</template>
