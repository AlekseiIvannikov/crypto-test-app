<template>
  <div class="flex flex-col">
    <CurrencyTable />
    <MarketData />
  </div>
</template>

<script setup lang="ts">
import CurrencyTable from '@/views/HomePage/Currency/Index.vue';
import MarketData from '@/views/HomePage/Market/Index.vue';
</script>

<style scoped></style>
