<template>
  <div class="stats shadow">
    <div class="stat place-items-center">
      <div class="stat-title">Change:</div>
      <div
        class="stat-value text-sm"
        :class="{
          'text-green-500': direction === 'Up',
          'text-red-500': direction === 'Down',
        }"
      >
        {{ changePercent }}% ({{ priceChangeAmount }})
      </div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Volume:</div>
      <div class="stat-value text-sm">{{ primaryVolume }} {{ pair?.primary }} / {{ secondaryVolume }} {{ pair?.secondary }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Nullable } from '@/types/common-types';
import { Pair } from '@/types/dto/market';
import { Direction } from '@/types/dto/market';

defineProps<{
  pair: Nullable<Pair>;
  primaryVolume: Nullable<string>;
  secondaryVolume: Nullable<string>;
  changePercent: string;
  priceChangeAmount: Nullable<string>;
  direction: Direction;
}>();
</script>

<style scoped></style>
