<script setup lang="ts">
import { ref, computed } from 'vue'
import BannerComponent from '@/components/BannerComponent.vue'
import InformationView from '@/views/account/impl/InformationView.vue'
import BalanceView from '@/views/account/impl/BalanceView.vue'
import SettingsView from '@/views/account/impl/SettingsView.vue'

const currentSection = ref<'information' | 'balance' | 'settings'>('information')

function showSection(section: typeof currentSection.value) {
  currentSection.value = section
}

const positions = {
  information: 0,
  balance: 1,
  settings: 2,
} as const

const selectedIndex = computed(() => positions[currentSection.value])

const strideRem = 4
const topOffset = computed(() => `${selectedIndex.value * strideRem}rem`)
</script>

<template>
  <main class="w-full min-h-[calc(100svh-5rem)] text-white">
    <BannerComponent height="h-50" img="/server.png" />
    <div class="w-full flex flex-col items-center">
      <div class="my-16 w-3/4 min-h-100 flex bg-[#1E1E1E] rounded-2xl">
        <div class="w-1/5 h-100">
          <ul class="relative mt-20 w-full flex flex-col items-center gap-4">
            <span
              :style="{ top: topOffset }"
              class="absolute w-50 h-12 bg-[#FF8C00] rounded-2xl z-10 transition-[top] duration-300"
            ></span>
            <li
              @click="showSection('information')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'information',
                'hover:bg-[#22222222]': currentSection === 'information',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-2xl transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="text-lg">Information</a>
            </li>
            <li
              @click="showSection('balance')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'balance',
                'hover:bg-[#22222222]': currentSection === 'balance',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-2xl transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="text-lg">Balance</a>
            </li>
            <li
              @click="showSection('settings')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'settings',
                'hover:bg-[#22222222]': currentSection === 'settings',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-2xl transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="text-lg">Settings</a>
            </li>
          </ul>
        </div>
        <div class="w-4/5">
          <transition
            mode="out-in"
            enter-active-class="transition-opacity duration-250 ease-in-out"
            leave-active-class="transition-opacity duration-250 ease-in-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div :key="currentSection" class="section px-4 py-12">
              <InformationView v-if="currentSection === 'information'" />
              <BalanceView v-else-if="currentSection === 'balance'" />
              <SettingsView v-else />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>
