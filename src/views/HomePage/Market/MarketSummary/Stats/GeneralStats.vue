<template>
  <div class="stats shadow flex flex-col sm:flex-row gap-4 p-4">
    <div class="stat place-items-center text-center">
      <div class="stat-title text-xs sm:text-sm">Change:</div>
      <div
        class="stat-value text-sm sm:text-base font-bold"
        :class="{
          'text-green-500': direction === 'Up',
          'text-red-500': direction === 'Down',
        }"
      >
        {{ changePercent }}% ({{ priceChangeAmount }})
      </div>
    </div>

    <div class="stat place-items-center text-center">
      <div class="stat-title text-xs sm:text-sm">Volume:</div>
      <div class="stat-value text-sm sm:text-base font-bold">
        {{ primaryVolume }} {{ pair?.primary }} / {{ secondaryVolume }} {{ pair?.secondary }}
      </div>
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
