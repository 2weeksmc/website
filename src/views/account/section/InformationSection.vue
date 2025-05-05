<script setup lang="ts">
import InformationComponent from '@/components/account/InformationComponent.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <p class="text-2xl">Information</p>
    <div class="flex flex-col gap-12">
      <InformationComponent :information="['Companyname', 'Firstname', 'Lastname']" />
      <InformationComponent
        :information="['Street', 'Number', 'ZIP Code', 'City', 'State', 'Country']"
      />
    </div>
  </div>
</template>
