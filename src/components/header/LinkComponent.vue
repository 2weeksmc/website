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

const routeObj = useRoute()

const isActive = computed(() => {
  const currentPath = routeObj.path
  const hostname = window.location.hostname

  const pathMatches = currentPath === props.route
  const onMainHost = hostname === '2weeksmc.local'
  const onAccountHost = hostname === 'account.2weeksmc.local'
  const onPanelHost = hostname === '2weeksmcpanel.local'
  const onShopHost = hostname === '2weeksmcshop.local'
  if (onMainHost) {
    return onMainHost && pathMatches
  }
  if (onAccountHost) {
    return onAccountHost && props.route.includes('account.2weeksmc.com')
  }
  if (onPanelHost) {
    return onPanelHost && props.route.includes('2weeksmc.cloud')
  }
  if (onShopHost) {
    return onShopHost && props.route.includes('2weeksmc.shop')
  }
  return false
})
</script>

<template>
  <div class="relative py-2">
    <a
      :href="route"
      :class="{
        'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
          isActive,
      }"
      class="transition-colors duration-200 ease-in-out hover:text-stone-400"
      >{{ routeName }}</a
    >
  </div>
</template>
