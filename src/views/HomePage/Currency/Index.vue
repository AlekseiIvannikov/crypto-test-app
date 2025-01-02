<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl pb-4">Currencies</h1>
    <div class="flex justify-between items-center gap-3">
      <SortDownIcon class="cursor-pointer" @click="currenciesStore.sortCurrencies(SORT_DIRECTION.ASC)" />
      <SortUpIcon class="cursor-pointer" @click="currenciesStore.sortCurrencies(SORT_DIRECTION.DESC)" />
    </div>
  </div>
  <div class="h-96">
    <Table :data="currenciesStore.currencies as CurrencyItem[]" :columns="CURRENCY_TABLE_COLUMNS" />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

import SortDownIcon from '@/assets/icons/SortDownIcon.vue';
import SortUpIcon from '@/assets/icons/SortUpIcon.vue';
import Table from '@/components/Table/Table.vue';
import { CURRENCY_TABLE_COLUMNS, CURRENCY_TABLE_COLUMNS_HIDDEN_MAPPER } from '@/consts';
import { SORT_DIRECTION } from '@/consts/enums';
import { useCurrenciesStore } from '@/stores/CurrenciesStore';
import { CurrencyItem } from '@/types/table';

const currenciesStore = useCurrenciesStore();

provide<typeof CURRENCY_TABLE_COLUMNS_HIDDEN_MAPPER>('columnsMapper', CURRENCY_TABLE_COLUMNS_HIDDEN_MAPPER);
</script>

<style scoped></style>
