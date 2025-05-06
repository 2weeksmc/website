<script setup lang="ts">
import BannerComponent from '@/components/BannerComponent.vue'
import CardComponent from '@/components/home/CardComponent.vue'
</script>

<template>
  <main class="w-full min-h-[calc(100svh-21rem)] text-white">
    <div
      class="relative w-full h-[calc(100svh-8rem)] flex flex-col justify-center items-center bg-[url('/server.png')] bg-no-repeat bg-cover bg-center"
    >
      <div class="w-3/4 h-3/4 flex justify-center items-center gap-64">
        <div class="w-full h-full flex flex-col justify-center gap-8">
          <div class="p-4 flex flex-col gap-12">
            <p class="relative text-[3rem] font-semibold z-10">
              Powerful &amp; dockerized<br />Minecraft servers
            </p>
            <p class="relative text-xl z-10">Free, paid upgradable, daily backups</p>
            <input
              type="button"
              value="Get a free server"
              class="my-4 relative w-1/3 h-12 bg-[#FF8C00] rounded-lg text-2xl cursor-pointer transition-all duration-250 z-10 hover:bg-[#FF9C22] hover:shadow-[0_0_15px_0_#FF9C22]"
            />
          </div>
        </div>
        <div class="p-4"></div>
      </div>
      <div class="absolute w-full h-full bg-[#FF8C00]/35 brightness-35 z-0"></div>
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
