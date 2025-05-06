<script setup lang="ts">
import BannerComponent from '@/components/BannerComponent.vue'
import PricingCardComponent from '@/components/pricing/PricingCardComponent.vue'
</script>

<template>
  <main class="w-full min-h-[calc(100svh-21rem)] text-white">
    <BannerComponent height="h-60" title="Pricing" />
    <div class="w-full flex flex-col items-center">
      <div class="my-16 w-3/4 min-h-100 flex bg-[#1E1E1E] rounded-2xl">
        <div class="w-full grid grid-cols-5 gap-4">
          <PricingCardComponent
            color="#c342fd"
            cpu="AMD Ryzen 5950X (shared)"
            ram="2048"
            storage="64"
            special="Only runs for 2 weeks. Available next after 3 months."
          />
          <PricingCardComponent />
          <PricingCardComponent />
          <PricingCardComponent />
        </div>
      </div>
    </div>
  </main>
</template>
