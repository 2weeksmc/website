<script setup lang="ts">
import { onMounted } from 'vue'
import LinkComponent from './header/LinkComponent.vue'
import { ref } from 'vue'
import { onUnmounted } from 'vue'

const loggedIn = ref(true)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    id="header"
    :class="{ 'bg-[#111111]': isScrolled }"
    class="fixed top-0 w-full h-20 flex items-center gap-8 text-white text-xl transition-colors duration-200 z-50"
  >
    <div class="ml-48 w-full flex justify-start">
      <div
        class="flex items-center gap-2 cursor-pointer text-3xl font-serif"
        onclick="window.open('/', '_self')"
      >
        <img src="/logo.png" alt="Logo" class="w-18" />
        <p>2weeksmc</p>
      </div>
    </div>
    <div class="mr-48 w-full flex justify-end gap-8">
      <LinkComponent route="http://2weeksmc.local" route-name="Home" />
      <LinkComponent route="http://2weeksmc.local/about" route-name="About" />
      <LinkComponent route="http://2weeksmc.local/contact" route-name="Contact" />
      <LinkComponent route="http://2weeksmcshop.local" route-name="Shop" />
      <LinkComponent route="http://2weeksmcpanel.local" route-name="Panel" />
      <LinkComponent
        v-if="!loggedIn"
        route="http://account.2weeksmc.local/login"
        route-name="Login"
      />
      <LinkComponent v-else route="http://account.2weeksmc.local" route-name="Account" />
    </div>
  </header>
</template>
