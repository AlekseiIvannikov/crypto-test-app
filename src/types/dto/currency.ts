type CurrencyType = 'Primary' | 'Secondary';

export type Currency = {
  code: string;
  sort_order: number;
  ticker: string;
  decimals_places: number;
  icon: string;
  type: CurrencyType;
};
