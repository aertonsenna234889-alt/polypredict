export const POLYMARKET_API = "https://clob.polymarket.com";
export const POLYMARKET_DATA_API = "https://data-api.polymarket.com";
export const POLYMARKET_WS = "wss://ws-subscriptions-clob.polymarket.com/ws/market";

export const POLYGON_CHAIN_ID = 137;
export const USDC_ADDRESS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // USDC.e on Polygon
export const USDC_DECIMALS = 6;

export const CASCADE_WINDOW_MINUTES = 90;
export const CASCADE_MIN_WALLETS = 3;
export const BASKET_CONSENSUS_THRESHOLD = 0.8;

export const CATEGORIES = [
  "politics",
  "crypto",
  "sports",
  "science",
  "entertainment",
  "economics",
  "weather",
] as const;

export type Category = (typeof CATEGORIES)[number];
