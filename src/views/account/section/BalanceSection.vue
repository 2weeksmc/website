<script setup lang="ts">
import { ref } from 'vue'
import TransactionsSection from '@/views/account/section/balance/TransactionsSection.vue'
import RechargeSection from '@/views/account/section/balance/RechargeSection.vue'

const currentSection = ref<'recharge' | 'transactions'>('recharge')

function showSection(section) {
  currentSection.value = section
  document.querySelectorAll('.balance-section-switch').forEach((element) => {
    element.classList.remove('bg-[#FF8C00]')
    element.classList.remove('hover:bg-[#FF9C22]')
    element.classList.add('hover:bg-[#2E2E2E]')
  })
  const sectionSwitch = document.getElementById(`balance-section-switch-${section}`)
  sectionSwitch?.classList.add('bg-[#FF8C00]')
  sectionSwitch?.classList.add('hover:bg-[#FF9C22]')
  sectionSwitch?.classList.remove('hover:bg-[#2E2E2E]')
}
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div class="w-full flex justify-center gap-4">
      <input
        id="balance-section-switch-recharge"
        type="button"
        value="Recharge"
        class="balance-section-switch w-1/2 h-12 bg-[#FF8C00] rounded-lg duration-200 transition-colors cursor-pointer hover:bg-[#FF9C22]"
        @click="showSection('recharge')"
      />
      <input
        id="balance-section-switch-transactions"
        type="button"
        value="Transactions"
        class="balance-section-switch w-1/2 h-12 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#2E2E2E]"
        @click="showSection('transactions')"
      />
    </div>
    <transition
      mode="out-in"
      enter-active-class="transition-opacity duration-150 ease-in-out"
      leave-active-class="transition-opacity duration-150 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <RechargeSection v-if="currentSection === 'recharge'" />
      <TransactionsSection v-else />
    </transition>
  </div>
</template>
