<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

let fixed = true

if (window.location.hostname === '2weeksmcpanel.local') {
  fixed = false
}
</script>

<template>
  <HeaderComponent :fixed="fixed" />
  <RouterView />
  <FooterComponent />
</template>
