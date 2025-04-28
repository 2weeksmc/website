<script setup lang="ts">
import CardComponent from '@/components/home/CardComponent.vue'
</script>

<template>
  <main class="w-full min-h-[calc(100svh-5rem)] text-white">
    <div class="w-full h-100 bg-amber-800"><!--Banner--></div>
    <div class="mt-16 w-full flex flex-col items-center">
      <div class="max-w-3/4 flex flex-wrap justify-center gap-8">
        <CardComponent
          img="@/assets/money_off.svg"
          head="Free Server"
          desc="You can get a free minecraft server for two weeks, like our name and for a good two weeks
            minecraft phase, with a month cooldown."
        />
        <CardComponent
          img="@/assets/upgrade.svg"
          head="Cheap Upgrades"
          desc="For a small amount of money you can buy gems in our store to buy a better server or
            upgrade your current server."
        />
        <CardComponent
          img="@/assets/backup.svg"
          head="Daily Backups"
          desc="To prevent data loss after system failures we are backuping daily two times, the backups
            will save for five days."
        />
        <CardComponent
          img="@/assets/dashboard.svg"
          head="Modern Control-Panel"
          desc="Our control panel was created for the best experience with minecraft servers and plugins
            support."
        />
      </div>
    </div>
  </main>
</template>
