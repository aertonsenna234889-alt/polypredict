// ── User & Wallet ──

export interface User {
  id: string;
  telegramId: number;
  username?: string;
  firstName: string;
  walletAddress?: string;
  turnkeySubOrgId?: string;
  turnkeyWalletId?: string;
  createdAt: Date;
}

// ── Polymarket ──

export interface Market {
  id: string;
  question: string;
  slug: string;
  category: string;
  endDate: string;
  active: boolean;
  closed: boolean;
  outcomes: Outcome[];
  volume: number;
  liquidity: number;
  image?: string;
}

export interface Outcome {
  id: string;
  title: string;
  price: number; // 0.00 - 1.00
}

export interface MarketTrade {
  id: string;
  marketId: string;
  walletAddress: string;
  outcome: string;
  side: "BUY" | "SELL";
  price: number;
  size: number;
  timestamp: Date;
}

// ── Smart Money ──

export interface TrackedWallet {
  address: string;
  label: string;
  tags: string[]; // ["politics", "crypto", "sports"]
  pnl: number;
  winRate: number;
  totalTrades: number;
  score: number; // 0-100 conviction score
}

export interface WalletBasket {
  id: string;
  name: string;
  description: string;
  category: string;
  wallets: TrackedWallet[];
  consensusThreshold: number; // e.g. 0.8 = 80% agreement
}

export interface CascadeAlert {
  id: string;
  marketId: string;
  marketQuestion: string;
  outcome: string;
  wallets: TrackedWallet[];
  avgPrice: number;
  totalSize: number;
  firstTradeAt: Date;
  lastTradeAt: Date;
  strength: "weak" | "medium" | "strong"; // based on # wallets & conviction
}

// ── Signals ──

export interface Signal {
  id: string;
  type: "cascade" | "ai_edge" | "arbitrage" | "basket_consensus";
  marketId: string;
  marketQuestion: string;
  outcome: string;
  confidence: number; // 0-100
  description: string;
  sources: SignalSource[];
  createdAt: Date;
}

export interface SignalSource {
  type: "whale" | "ai" | "arbitrage" | "basket";
  detail: string;
}

// ── Arbitrage ──

export interface ArbitrageOpportunity {
  id: string;
  question: string;
  platforms: PlatformPrice[];
  spread: number; // percentage
  createdAt: Date;
}

export interface PlatformPrice {
  platform: "polymarket" | "kalshi" | "azuro";
  outcome: string;
  yesPrice: number;
  noPrice: number;
  url?: string;
}

// ── Portfolio ──

export interface Position {
  marketId: string;
  marketQuestion: string;
  outcome: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}

export interface Portfolio {
  balance: number; // USDC
  totalValue: number; // balance + positions value
  positions: Position[];
  totalPnl: number;
  winRate: number;
}

// ── API Responses ──

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}
