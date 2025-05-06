<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: 'h-100',
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  titleSize: {
    type: String,
    default: 'text-[2.5rem]',
  },
  subTitleSize: {
    type: String,
    default: 'text-[1.5rem]',
  },
})
</script>

<template>
  <div
    :class="props.height"
    class="relative w-full flex flex-col justify-center items-center bg-[url('/server.png')] bg-no-repeat bg-cover bg-center"
  >
    <div class="absolute w-full h-full bg-[#FF8C00]/15 brightness-85"></div>
    <div class="h-full flex flex-col justify-center items-center">
      <p :class="props.titleSize" class="font-semibold">
        {{ title }}
      </p>
      <p :class="props.subTitleSize">
        {{ subTitle }}
      </p>
    </div>
  </div>
</template>
