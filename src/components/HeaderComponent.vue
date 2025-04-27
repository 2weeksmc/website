<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
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
      <div class="relative py-2">
        <a
          href="/"
          :class="{
            'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
              route.path === '/',
          }"
          class="transition-colors duration-200 ease-in-out hover:text-stone-400"
          >Home</a
        >
      </div>
      <div class="relative py-2">
        <a
          href="/about"
          :class="{
            'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
              route.path === '/about',
          }"
          class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400"
          >About</a
        >
      </div>
      <div class="relative py-2">
        <a
          href="/contact"
          :class="{
            'before:absolute before:bottom-[8px] before:w-full before:h-[2px] before:bg-[#FF8C00]':
              route.path === '/contact',
          }"
          class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400"
          >Contact</a
        >
      </div>
      <div class="relative py-2">
        <a
          href="https://shop.2weeksmc.com"
          class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400"
          >Shop</a
        >
      </div>
      <div class="relative py-2">
        <a
          href="https://2weeksmc.cloud"
          class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400"
        >
          Panel
        </a>
      </div>
      <div class="relative py-2">
        <a
          href="https://account.2weeksmc.com"
          class="py-2 transition-colors duration-200 ease-in-out hover:text-stone-400"
        >
          Account
        </a>
      </div>
    </div>
  </header>
</template>
