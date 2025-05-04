<script setup lang="ts">
import LinkComponent from './header/LinkComponent.vue'
import { ref } from 'vue'

const loggedIn = ref(false)
</script>

<template>
  <header class="w-full h-20 flex items-center gap-8 text-white text-xl">
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
      <LinkComponent route="/" route-name="Home" />
      <LinkComponent route="/about" route-name="About" />
      <LinkComponent route="/contact" route-name="Contact" />
      <LinkComponent route="http://2weeksmc.shop" route-name="Shop" />
      <LinkComponent route="http://2weeksmc.cloud" route-name="Panel" />
      <LinkComponent
        v-if="!loggedIn"
        route="http://account.2weeksmc.com/login"
        route-name="Login"
      />
      <LinkComponent v-else route="http://account.2weeksmc.com" route-name="Account" />
    </div>
  </header>
</template>
