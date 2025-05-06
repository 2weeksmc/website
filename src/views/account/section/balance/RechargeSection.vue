<script setup lang="ts">
import PaymentComponent from '@/components/account/balance/PaymentComponent.vue'
import { ref } from 'vue'

type PaymentMethod =
  | 'paypal'
  | 'paysafecard'
  | 'sofort'
  | 'credit-card'
  | 'google-pay'
  | 'apple-pay'

const selectedPaymentMethod = ref<PaymentMethod | null>(null)

function selectPaymentMethod(method: PaymentMethod) {
  selectedPaymentMethod.value = method
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="mb-4 text-2xl">Payment methods</p>
      <div class="p-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <PaymentComponent
          name="paypal"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
        <PaymentComponent
          name="paysafecard"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
        <PaymentComponent
          name="sofort"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
        <PaymentComponent
          name="credit-card"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
        <PaymentComponent
          name="google-pay"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
        <PaymentComponent
          name="apple-pay"
          :selected="selectedPaymentMethod"
          @select="selectPaymentMethod"
        />
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
