<template>
  <div class="stats shadow">
    <div class="stat place-items-center">
      <div class="stat-title">Best bid:</div>
      <div class="stat-value text-sm">{{ price.bestBid }} {{ pairSecondary }}</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Best Offer</div>
      <div class="stat-value text-sm">{{ price.bestOffer }} {{ pairSecondary }}</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Last Price</div>
      <div class="stat-value text-sm">{{ price.last }} {{ pairSecondary }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Nullable } from '@/types/common-types';
import { Price } from '@/types/dto/market';

defineProps<{
  price: Price;
  pairSecondary: Nullable<string>;
}>();
</script>

<style scoped></style>
