export const CURRENCY_TABLE_COLUMNS = ['Icon', 'Code', 'Ticker', 'Decimals Places', 'Type'];

export const CURRENCY_TABLE_COLUMNS_HIDDEN_MAPPER = {
  Icon: 'icon',
  Code: 'code',
  Ticker: 'ticker',
  Type: 'type',
  'Decimals Places': 'decimals_places',
} as const;
