import { SORT_DIRECTION } from '@/consts/enums';

import type { Component } from 'vue';

export type IconItem = {
  icon: {
    type: 'image';
    value: string;
  };
};

export type ComponentItem = {
  type: 'component';
  value: string;
  component: Component;
};

export type CurrencyItem = IconItem & {
  type: ComponentItem;
  ticker: string;
  code: string;
  sort_order: number;
  decimals_places: number;
};

export type Direction = keyof typeof SORT_DIRECTION;
