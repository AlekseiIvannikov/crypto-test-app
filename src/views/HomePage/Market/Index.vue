<template>
  <h1 class="text-2xl pb-4 mt-20">Market Data</h1>
  <div class="flex flex-wrap gap-10 justify-between items-center">
    <MarketSummary v-for="(data, i) in MarketStore.marketData" :key="i" :data="data" :icons="CurrenciesStore.currenciesIcons" />
  </div>
</template>

<script setup lang="ts">
import { useCurrenciesStore } from '@/stores/CurrenciesStore';
import { useMarketStore } from '@/stores/MarketStore';
import MarketSummary from '@/views/HomePage/Market/MarketSummary/Index.vue';

const MarketStore = useMarketStore();
const CurrenciesStore = useCurrenciesStore();
</script>

<style scoped></style>
