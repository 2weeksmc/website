<script setup lang="ts">
import InternalLink from './header/InternalLink.vue'
import ExternalLink from './header/ExternalLink.vue'
</script>

<template>
  <header class="w-full h-20 flex items-center gap-8 text-white text-xl">
    <div class="ml-48 w-full flex justify-start">
      <div class="flex gap-4 cursor-pointer" onclick="window.open('/', '_self')">
        <img src="" alt="Logo" />
        <p>2weeksmc</p>
      </div>
    </div>
    <div class="mr-48 w-full flex justify-end gap-8">
      <InternalLink route="/" route-name="Home" />
      <InternalLink route="/about" route-name="About" />
      <InternalLink route="/contact" route-name="Contact" />
      <ExternalLink route="https://2weeksmc.shop" route-name="Shop" />
      <ExternalLink route="https://2weeksmc.cloud" route-name="Panel" />
      <ExternalLink route="https://account.2weeksmc.com" route-name="Account" />
    </div>
  </header>
</template>
