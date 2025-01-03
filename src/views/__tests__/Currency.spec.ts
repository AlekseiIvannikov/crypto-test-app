import { mount } from '@vue/test-utils';
import { createPinia, defineStore } from 'pinia';
import { describe, it, expect } from 'vitest';
import { ComponentPublicInstance } from 'vue';

import { Direction } from '@/types/table';

import SortDownIcon from '../../assets/icons/SortDownIcon.vue';
import SortUpIcon from '../../assets/icons/SortUpIcon.vue';
import Currencies from '../HomePage/Currency/Index.vue';

type SortItem = { sort_order: number };

const useMockCurrenciesStore = defineStore('currencies', {
  state: () => ({
    _currencies: {
      value: [
        { code: 'USD', ticker: 'USD', sort_order: 2, decimals: 2, type: 'Fiat' },
        { code: 'EUR', ticker: 'EUR', sort_order: 1, decimals: 2, type: 'Fiat' },
      ],
    },
  }),
  actions: {
    sortCurrencies(direction: Direction) {
      const sortingExpression = {
        ASC: (a: SortItem, b: SortItem) => a.sort_order - b.sort_order,
        DESC: (a: SortItem, b: SortItem) => b.sort_order - a.sort_order,
      };

      this._currencies.value.sort(sortingExpression[direction]);
    },
  },
});

describe('Currencies Component', () => {
  it('renders correctly', async () => {
    const pinia = createPinia();
    pinia.use(() => useMockCurrenciesStore);

    const wrapper = mount(Currencies, {
      global: {
        plugins: [pinia],
      },
    });

    await (wrapper.vm as ComponentPublicInstance).$nextTick();

    expect(wrapper.find('h1').text()).toBe('Currencies');
    expect(wrapper.findComponent(SortDownIcon).exists()).toBe(true);
    expect(wrapper.findComponent(SortUpIcon).exists()).toBe(true);
  });

  it('sorts currencies in descending order', async () => {
    const pinia = createPinia();
    pinia.use(() => useMockCurrenciesStore);

    const wrapper = mount(Currencies, {
      global: {
        plugins: [pinia],
      },
    });

    const currenciesStore = useMockCurrenciesStore();

    await wrapper.findComponent(SortUpIcon).trigger('click');
    await (wrapper.vm as ComponentPublicInstance).$nextTick();

    expect(currenciesStore._currencies.value[0].sort_order).toBe(2);
    expect(currenciesStore._currencies.value[1].sort_order).toBe(1);
  });
});
