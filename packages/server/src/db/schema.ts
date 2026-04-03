import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// ── Users ──

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  telegramId: integer("telegram_id").notNull().unique(),
  username: text("username"),
  firstName: text("first_name").notNull(),
  lang: text("lang").notNull().default("en"),
  walletAddress: text("wallet_address"),
  turnkeySubOrgId: text("turnkey_sub_org_id"),
  turnkeyWalletId: text("turnkey_wallet_id"),
  radarEnabled: integer("radar_enabled", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Wallet Transactions ──

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  type: text("type").notNull(), // "deposit" | "withdraw" | "bet" | "payout"
  amount: real("amount").notNull(),
  currency: text("currency").notNull().default("USDC"),
  txHash: text("tx_hash"),
  status: text("status").notNull().default("pending"), // "pending" | "confirmed" | "failed"
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Positions (user bets) ──

export const positions = sqliteTable("positions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  marketId: text("market_id").notNull(),
  marketQuestion: text("market_question").notNull(),
  outcome: text("outcome").notNull(), // "YES" | "NO"
  shares: real("shares").notNull(),
  avgPrice: real("avg_price").notNull(),
  amount: real("amount").notNull(), // USDC spent
  status: text("status").notNull().default("open"), // "open" | "closed" | "settled"
  pnl: real("pnl"),
  closedAt: text("closed_at"),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Tracked Whales ──

export const whales = sqliteTable("whales", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  address: text("address").notNull().unique(),
  label: text("label").notNull(),
  tags: text("tags").notNull().default("[]"), // JSON array
  pnl: real("pnl").notNull().default(0),
  winRate: real("win_rate").notNull().default(0),
  totalTrades: integer("total_trades").notNull().default(0),
  score: integer("score").notNull().default(0),
  lastActive: text("last_active"),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Wallet Baskets ──

export const baskets = sqliteTable("baskets", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  walletAddresses: text("wallet_addresses").notNull().default("[]"), // JSON array
  consensusThreshold: real("consensus_threshold").notNull().default(0.8),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Signals ──

export const signals = sqliteTable("signals", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), // "cascade" | "ai_edge" | "arbitrage" | "basket_consensus"
  marketId: text("market_id").notNull(),
  marketQuestion: text("market_question").notNull(),
  outcome: text("outcome").notNull(),
  confidence: integer("confidence").notNull(),
  description: text("description").notNull(),
  sources: text("sources").notNull().default("[]"), // JSON array
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── Cascade Alerts ──

export const cascades = sqliteTable("cascades", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  marketId: text("market_id").notNull(),
  marketQuestion: text("market_question").notNull(),
  outcome: text("outcome").notNull(),
  whaleAddresses: text("whale_addresses").notNull().default("[]"), // JSON array
  avgPrice: real("avg_price").notNull(),
  totalSize: real("total_size").notNull(),
  strength: text("strength").notNull().default("medium"), // "weak" | "medium" | "strong"
  firstTradeAt: text("first_trade_at").notNull(),
  lastTradeAt: text("last_trade_at").notNull(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});

// ── User Subscriptions (which whales/baskets user follows) ──

export const userSubscriptions = sqliteTable("user_subscriptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  type: text("type").notNull(), // "whale" | "basket"
  targetId: text("target_id").notNull(), // whale address or basket id
  createdAt: text("created_at").notNull().$defaultFn(() => new Date().toISOString()),
});
