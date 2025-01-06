<template>
  <div class="stats shadow flex flex-col sm:flex-row gap-4 p-4 sm:gap-6 sm:p-6">
    <Stat title="Best Bid:" :value="`${price.bestBid} ${pairSecondary}`" />
    <Stat title="Best Offer:" :value="`${price.bestOffer} ${pairSecondary}`" />
    <Stat title="Last price:" :value="`${price.last} ${pairSecondary}`" />
  </div>
</template>

<script setup lang="ts">
import Stat from '@/components/UI/Stat.vue';
import { Nullable } from '@/types/common-types';
import { Price } from '@/types/dto/market';

defineProps<{
  price: Price;
  pairSecondary: Nullable<string>;
}>();
</script>
