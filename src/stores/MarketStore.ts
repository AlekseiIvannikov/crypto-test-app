import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import $api from '@/http/axios';
import { Paths } from '@/paths';
import { Nullable } from '@/types/common-types';
import { MarketDataItem } from '@/types/dto/market';

export const useMarketStore = defineStore('marketStore', () => {
  const _marketData = ref<Nullable<MarketDataItem[]>>(null);

  const marketData = computed(() => {
    if (!_marketData.value) refreshMarketData();
    return _marketData.value;
  });

  async function refreshMarketData() {
    const { data } = await $api.get<MarketDataItem[]>(Paths.Market);
    _marketData.value = data;
  }

  console.log(marketData);

  return {
    refreshMarketData,

    marketData,
  };
});
