<template>
  <div class="card bg-base-100 w-5/12 shadow-xl">
    <div class="flex gap-1 align-items-center">
      <div class="mask mask-squircle h-6 w-6">
        <img :src="`data:image/svg+xml;base64,${icon}`" alt="image" />
      </div>
      <h2>{{ pair?.primary }}/{{ pair?.secondary }}</h2>
    </div>

    <GeneralStats
      :change-percent="data.price.change.percent"
      :direction="data.price.change.direction"
      :pair="pair"
      :price-change-amount="priceChangeAmount"
      :primary-volume="primaryVolume"
      :secondary-volume="secondaryVolume"
    />

    <PriceHistoryChart :price-history="data.priceHistory" />

    <BestPriceStats :price="data.price" :pair-secondary="pair?.secondary" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { applyLimitation } from '@/assets/scripts';
import { MarketDataItem, Pair } from '@/types/dto/market';
import PriceHistoryChart from '@/views/HomePage/Market/MarketSummary/PriceHistoryChart/Index.vue';
import BestPriceStats from '@/views/HomePage/Market/MarketSummary/Stats/BestPriceStats.vue';
import GeneralStats from '@/views/HomePage/Market/MarketSummary/Stats/GeneralStats.vue';

const props = defineProps<{
  data: MarketDataItem;
  icons: Map<string, string>;
}>();

const pair = ref<Pair>();
const priceChangeAmount = ref<string>();
const primaryVolume = ref<string>();
const secondaryVolume = ref<string>();

const icon = computed(() => {
  if (!pair.value?.primary) return '';
  return props.icons.get(pair.value?.primary);
});

onMounted(() => {
  formatPair();

  priceChangeAmount.value = applyLimitation(props.data.price.change.amount);
  primaryVolume.value = applyLimitation(props.data.volume.primary);
  secondaryVolume.value = applyLimitation(props.data.volume.secondary);
});

function formatPair() {
  pair.value = {
    primary: props.data?.pair?.primary.toUpperCase(),
    secondary: props.data?.pair?.secondary.toUpperCase(),
  };
}
</script>

<style scoped></style>
