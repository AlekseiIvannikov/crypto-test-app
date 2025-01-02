import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import Badge from '@/components/UI/Badge.vue';
import { SORT_DIRECTION } from '@/consts/enums';
import $api from '@/http/axios';
import { Paths } from '@/paths';
import { Nullable } from '@/types/common-types';
import { Currency } from '@/types/dto/currency';
import { CurrencyItem, Direction } from '@/types/table';
56;

export const useCurrenciesStore = defineStore('currenciesStore', () => {
  const _currencies = ref<Nullable<Currency[]>>(null);

  const currenciesIcons = computed(() => {
    const icons = new Map<string, string>();

    _currencies.value?.forEach((item) => {
      icons.set(item.code.toUpperCase(), item.icon);
    });

    return icons;
  });

  const currencies = computed(() => {
    if (!_currencies.value) refreshCurrencies();
    return _currencies.value?.map(prepareCurrencies);
  });

  function prepareCurrencies(currency: Currency): CurrencyItem {
    return {
      ...currency,
      ticker: currency.ticker?.toUpperCase(),
      code: currency.code?.toUpperCase(),
      icon: {
        value: currency.icon,
        type: 'image',
      },
      type: {
        value: currency.type,
        type: 'component',
        component: Badge,
      },
    };
  }

  function sortCurrencies(direction: Direction) {
    if (!_currencies.value) return;

    const sortingExpression = {
      [SORT_DIRECTION.ASC]: (a: Currency, b: Currency) => a.sort_order - b.sort_order,
      [SORT_DIRECTION.DESC]: (a: Currency, b: Currency) => b.sort_order - a.sort_order,
    };

    _currencies.value.sort(sortingExpression[direction]);
  }

  async function refreshCurrencies() {
    const { data } = await $api.get<Currency[]>(Paths.Currency);
    _currencies.value = data;
  }

  return {
    refreshCurrencies,
    sortCurrencies,

    currencies,
    currenciesIcons,
  };
});
