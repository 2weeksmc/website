<script setup lang="ts">
import { ref } from 'vue'

const selectedPaymentMethod = ref<
  'paypal',
  'paysafecard',
  'sofort',
  'credit card',
  'google pay',
  'apple pay'
>(null)

function selectPaymentMethod(method: typeof currentSection.value) {
  selectedPaymentMethod.value = method
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="mb-4 text-2xl">Payment methods</p>
      <div class="p-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'paypal',
          }"
          class="overflow-hidden h-20 flex justify-center items-center rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('paypal')"
        >
          <img src="/recharge/paypal.png" alt="" class="object-cover object-center w-full h-full" />
        </div>
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'paysafecard',
          }"
          class="overflow-hidden h-20 rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('paysafecard')"
        >
          <img
            src="/recharge/paysafecard.png"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'sofort',
          }"
          class="overflow-hidden h-20 rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('sofort')"
        >
          <img src="/recharge/sofort.png" alt="" class="object-cover object-center w-full h-full" />
        </div>
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'credit card',
          }"
          class="overflow-hidden h-20 rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('credit card')"
        >
          <img
            src="/recharge/credit-card.png"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'google pay',
          }"
          class="overflow-hidden h-20 rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('google pay')"
        >
          <img
            src="/recharge/google-pay.png"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div
          :class="{
            'shadow-[0_0_5px_1px_#ffffff]': selectedPaymentMethod === 'apple pay',
          }"
          class="overflow-hidden h-20 rounded-3xl transition-[box-shadow] duration-300 ease-in-out cursor-pointer"
          @click="selectPaymentMethod('apple pay')"
        >
          <img
            src="/recharge/apple-pay.png"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
    <div>
      <p class="mb-4 text-lg">Amount</p>
      <input
        type="number"
        placeholder="0.00"
        class="no-arrows px-4 py-2 w-full lg:w-1/2 xl:w-1/3 bg-[#2E2E2E] rounded-lg focus:outline-none"
      />
      <div class="mt-4 w-full flex flex-col gap-2 items-start">
        <label for="agb">
          <input id="agb" type="checkbox" />
          I have read and accepted the general terms and conditions and the privacy policy.
        </label>
        <label for="noback">
          <input id="noback" type="checkbox" />
          I expressly agree that credit cannot be refunded.
        </label>
      </div>
      <input
        type="button"
        value="Recharge"
        class="mt-4 px-4 py-2 w-full lg:w-1/2 xl:w-1/3 bg-[#2E2E2E] rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#3E3E3E]"
      />
    </div>
  </div>
</template>

<style>
/* Chrome, Safari, Edge, Opera */
.no-arrows::-webkit-outer-spin-button,
.no-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

/* Firefox */
.no-arrows {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
