export type Direction = 'Up' | 'Down';

export type Pair = {
  primary: string;
  secondary: string;
};

export type PriceChange = {
  direction: Direction;
  percent: string;
  amount: string;
};

export type Price = {
  last: string;
  bestBid: string;
  bestOffer: string;
  change: PriceChange;
};

export type Volume = {
  primary: string;
  secondary: string;
};

export type MarketDataItem = {
  pair: Pair;
  price: Price;
  volume: Volume;
  priceHistory: string[];
};
