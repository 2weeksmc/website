<script setup lang="ts">
import { computed } from 'vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()

const isActive = computed(() => {
  let target: URL

  try {
    target = new URL(props.route, window.location.origin)
  } catch {
    return false
  }

  if (target.hostname !== window.location.hostname) {
    return false
  }

  const normalize = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p)

  return normalize(route.path) === normalize(target.pathname)
})
</script>

<template>
  <div class="relative py-2">
    <a
      :href="props.route"
      :class="{
        'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
          isActive,
      }"
      class="transition-colors duration-200 ease-in-out hover:text-stone-400"
      >{{ routeName }}</a
    >
  </div>
</template>
