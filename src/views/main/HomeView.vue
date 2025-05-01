<script setup lang="ts">
import CardComponent from '@/components/home/CardComponent.vue'
</script>

<template>
  <main class="w-full min-h-[calc(100svh-5rem)] text-white">
    <div class="relative w-full h-100 bg-[url(/server.png)] bg-no-repeat bg-cover bg-center">
      <div class="absolute w-full h-full bg-[#FF8C00]/15"></div>
    </div>
    <div class="w-full flex flex-col items-center">
      <div class="max-w-3/4 p-16 flex flex-wrap justify-center gap-8">
        <CardComponent
          img="money_off"
          head="Free Server"
          desc="Free two-week Minecraft server with a one-month cooldown."
        />
        <CardComponent
          img="upgrade"
          head="Cheap Upgrades"
          desc="Buy gems to upgrade your server or get a better one."
        />
        <CardComponent
          img="backup"
          head="Daily Backups"
          desc="Backups run twice daily and are kept for five days."
        />
        <CardComponent
          img="dashboard"
          head="Modern Control-Panel"
          desc="Control panel optimized for Minecraft server and plugin support."
        />
        <CardComponent
          img="payments"
          head="Prepaid based"
          desc="Pay only what you need; auto-payment occurs only if it’s enabled and you have enough gems."
        />
      </div>
    </div>
  </main>
</template>
