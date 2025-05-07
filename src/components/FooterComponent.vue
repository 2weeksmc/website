<script setup lang="ts">
import LinkComponent from '@/components/footer/LinkComponent.vue'
</script>

<template>
  <div class="w-full h-72 flex justify-center items-center bg-[#1E1E1E] text-stone-300">
    <div class="w-3/4 h-full grid items-center grid-flow-col auto-cols-auto gap-4">
      <div class="w-100 h-4/5 flex flex-col">
        <p class="text-white text-lg font-semibold">2weeksmc Handrick & Kaemereit GbR</p>
        <p class="mb-4 text-white">Copyright &copy; 2025</p>
        <p>We are a hosting company for fast and powerful dockerized minecraft servers.</p>
        <div
          class="mt-4 cursor-pointer"
          onclick="window.open('https://skrime.eu/a/eztxmmc', '_blank')"
        >
          <p class="text-white text-xl font-semibold">Partnered with</p>
          <img src="/skrime.png" class="h-12" />
        </div>
      </div>
      <div class="w-50 h-4/5 flex flex-col gap-2">
        <p class="mb-2 text-white text-lg font-semibold">Company</p>
        <LinkComponent route-name="About" route="http://2weeksmc.local/about" />
        <LinkComponent route-name="Team" route="http://2weeksmc.local/about#team" />
        <LinkComponent route-name="Career" route="http://2weeksmc.local/career" />
        <LinkComponent route-name="Blog" route="http://blog.2weeksmc.local" />
      </div>
      <div class="w-50 h-4/5 flex flex-col gap-2">
        <p class="mb-2 text-white text-lg font-semibold">Support</p>
        <LinkComponent route-name="Contact" route="http://2weeksmc.local/contact" />
        <LinkComponent route-name="Ticketsystem" route="http://ticket.2weeksmc.local" />
        <LinkComponent route-name="Status" route="http://status.2weeksmc.com" />
        <LinkComponent route-name="FAQ" route="http://2weeksmc.local/faq" />
      </div>
      <div class="w-50 h-4/5 flex flex-col gap-2">
        <p class="mb-2 text-white text-lg font-semibold">Legal</p>
        <LinkComponent route-name="Terms of Services" route="http://2weeksmc.local/tos" />
        <LinkComponent route-name="Privacy policy" route="http://2weeksmc.local/policy" />
        <LinkComponent route-name="Imprint" route="http://2weeksmc.local/imprint" />
      </div>
    </div>
  </div>
</template>
