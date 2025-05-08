<script setup lang="ts">
import { ref } from 'vue'
import BannerComponent from '@/components/BannerComponent.vue'
import PricingCardComponent from '@/components/pricing/PricingCardComponent.vue'
import { onMounted } from 'vue'

const isOnCooldown = ref(false)

const ram = ref(2)
const storage = ref(16)
const plugins = ref(0)
const mods = ref(0)
const price = ref(0)

function calculatePrice() {
  const ramPrice = ram.value * 0.5
  const storagePrice = storage.value * 0.1
  const pluginsPrice = plugins.value * 0.025
  const modsPrice = mods.value * 0.05
  price.value = ramPrice + storagePrice + pluginsPrice + modsPrice
}

onMounted(() => {
  calculatePrice()
})
</script>

<template>
  <main class="w-full min-h-[calc(100svh-21rem)] text-white">
    <BannerComponent height="h-60" title="Pricing" />
    <div class="w-full flex flex-col items-center">
      <div class="my-16 pr-8 w-3/4 min-h-100 flex flex-col gap-8 bg-[#1E1E1E] rounded-2xl">
        <p class="mt-4 -mb-8 w-full text-center text-2xl font-semibold">Packets</p>
        <div class="w-full grid grid-cols-4 gap-1">
          <PricingCardComponent
            color="#aaaaaa"
            name="Starter"
            cpu="AMD Ryzen 5950X"
            ram="2"
            storage="16"
            plugin-support-amount="5"
            mod-support-amount="0"
            :price="isOnCooldown ? '1.99' : '0.00'"
            special="Only runs for 2 weeks. Available next after 3 months."
          />
          <PricingCardComponent
            color="#45f84f"
            name="Advanced"
            cpu="AMD Ryzen 5950X"
            ram="4"
            storage="32"
            plugin-support-amount="10"
            mod-support-amount="10"
            price="3.99"
            popular="true"
          />
          <PricingCardComponent
            color="#ffe942"
            name="Professional"
            cpu="AMD Ryzen 5950X"
            ram="6"
            storage="48"
            plugin-support-amount="25"
            mod-support-amount="25"
            price="6.99"
          />
          <div
            :class="{
              'outline-4': false /* outline-width: 2px */,
              'outline-[#e5453f]': false /* outline-color: #e5453f */,
            }"
            style="border-top: 5px solid #ff3333; border-bottom: 5px solid #272727"
            class="relative overflow-visible m-8 px-4 py-8 w-[calc(100%-2rem)] h-120 flex flex-col items-center bg-[#2E2E2E] rounded-lg text-[#DEDEDE]"
          >
            <a
              class="absolute -top-4 -right-4 px-2 py-1 text-end rounded-full bg-[#e5453f]"
              v-if="false"
              >Popular</a
            >
            <p class="text-center text-2xl text-white font-semibold">Ultimate</p>
            <div class="flex flex-col items-center gap-4">
              <p class="mt-4 text-center text-white font-semibold">AMD Ryzen 5950X</p>
              <p class="text-center">bis 16 GB DDR5 RAM</p>
              <p class="text-center">bis 128 GB NVMe Storage</p>
              <p class="text-center">bis 50 Plugins supported</p>
              <p class="text-center">bis 100 Mods supported</p>
            </div>
            <div class="flex-grow"></div>
            <p class="mb-8 text-center"></p>
            <input
              type="button"
              value="Configurator"
              class="w-2/3 h-10 bg-[#FF8C00] rounded-lg text-xl"
              onclick="document.getElementById('configurator').scrollIntoView()"
            />
          </div>
        </div>
        <p id="configurator" class="w-full text-center text-2xl font-semibold">Configurator</p>
        <div class="w-full">
          <label for="ram" class="ml-32 mr-24 flex flex-col">
            <div class="flex">
              RAM: <a>{{ ram }} GB</a>
            </div>
            <input
              id="ram"
              type="range"
              min="2"
              max="16"
              step="2"
              value="2"
              v-model="ram"
              @input="calculatePrice"
            />
          </label>
          <label for="nvme" class="ml-32 mr-24 flex flex-col">
            <div class="flex">
              NVMe: <a>{{ storage }} GB</a>
            </div>
            <input
              id="nvme"
              type="range"
              min="16"
              max="128"
              step="16"
              value="16"
              v-model="storage"
              @input="calculatePrice"
            />
          </label>
          <label for="plugins" class="ml-32 mr-24 flex flex-col">
            <div class="flex">
              Plugins: <a>{{ plugins }}</a>
            </div>
            <input
              id="plugins"
              type="range"
              min="0"
              max="50"
              step="5"
              value="0"
              v-model="plugins"
              @input="calculatePrice"
            />
          </label>
          <label for="mods" class="ml-32 mr-24 flex flex-col">
            <div class="flex">
              Mods: <a>{{ mods }}</a>
            </div>
            <input
              id="mods"
              type="range"
              min="0"
              max="100"
              step="5"
              value="0"
              v-model="mods"
              @input="calculatePrice"
            />
          </label>
          <p class="w-full text-center">{{ price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
