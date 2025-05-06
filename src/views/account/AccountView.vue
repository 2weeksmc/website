<script setup lang="ts">
import { ref, computed } from 'vue'
import BannerComponent from '@/components/BannerComponent.vue'
import InformationSection from '@/views/account/section/InformationSection.vue'
import BalanceSection from '@/views/account/section/BalanceSection.vue'
import AffiliateSection from '@/views/account/section/AffiliateSection.vue'
import SettingsSection from '@/views/account/section/SettingsSection.vue'

const currentSection = ref<
  'information' | 'balance' | 'affiliate' | 'support' | 'security' | 'notifications' | 'settings'
>('information')

function showSection(section: typeof currentSection.value) {
  currentSection.value = section
}

const positions = {
  information: 0,
  balance: 1,
  affiliate: 2,
  support: 3,
  security: 4,
  notifications: 5,
  settings: 6,
} as const

const selectedIndex = computed(() => positions[currentSection.value])

const strideRem = 4
const topOffset = computed(() => `${selectedIndex.value * strideRem}rem`)
</script>

<template>
  <main class="w-full min-h-[calc(100svh-21rem)] text-white">
    <BannerComponent height="h-80" title="Account" />
    <div class="w-full flex flex-col items-center">
      <div class="my-16 w-3/4 min-h-100 flex bg-[#1E1E1E] rounded-2xl">
        <div class="mb-16 min-w-70 w-1/5 min-h-100">
          <ul class="relative mt-20 w-full flex flex-col items-center gap-4">
            <span
              :style="{ top: topOffset }"
              class="absolute w-50 h-12 bg-[#FF8C00] rounded-lg z-10 transition-[top] duration-300"
            ></span>
            <li
              @click="showSection('information')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'information',
                'hover:bg-[#22222222]': currentSection === 'information',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Information</a>
            </li>
            <li
              @click="showSection('balance')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'balance',
                'hover:bg-[#22222222]': currentSection === 'balance',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Balance</a>
            </li>
            <li
              @click="showSection('affiliate')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'affiliate',
                'hover:bg-[#22222222]': currentSection === 'affiliate',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Affiliate</a>
            </li>
            <li
              @click="showSection('support')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'support',
                'hover:bg-[#22222222]': currentSection === 'support',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Support</a>
            </li>
            <li
              @click="showSection('security')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'security',
                'hover:bg-[#22222222]': currentSection === 'security',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Security</a>
            </li>
            <li
              @click="showSection('notifications')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'notifications',
                'hover:bg-[#22222222]': currentSection === 'notifications',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Notifications</a>
            </li>
            <li
              @click="showSection('settings')"
              :class="{
                'hover:bg-[#55555555]': currentSection !== 'settings',
                'hover:bg-[#22222222]': currentSection === 'settings',
              }"
              class="relative px-8 w-50 h-12 flex items-center rounded-lg transition-colors duration-200 cursor-pointer z-20"
            >
              <a class="-mt-0.5 text-lg">Settings</a>
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
            <div :key="currentSection" class="section px-4 py-12 pr-8">
              <InformationSection v-if="currentSection === 'information'" />
              <BalanceSection v-else-if="currentSection === 'balance'" />
              <AffiliateSection v-else-if="currentSection === 'affiliate'" />
              <SettingsSection v-else />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>
