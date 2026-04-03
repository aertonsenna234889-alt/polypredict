import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.DATABASE_PATH || path.join(__dirname, "../../../../data/polypredict.db");

// Ensure data directory exists
import fs from "fs";
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const sqlite = new Database(DB_PATH);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });

// Create tables if they don't exist
export function initDatabase() {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      telegram_id INTEGER NOT NULL UNIQUE,
      username TEXT,
      first_name TEXT NOT NULL,
      lang TEXT NOT NULL DEFAULT 'en',
      wallet_address TEXT,
      turnkey_sub_org_id TEXT,
      turnkey_wallet_id TEXT,
      radar_enabled INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      type TEXT NOT NULL,
      amount REAL NOT NULL,
      currency TEXT NOT NULL DEFAULT 'USDC',
      tx_hash TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS positions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      market_id TEXT NOT NULL,
      market_question TEXT NOT NULL,
      outcome TEXT NOT NULL,
      shares REAL NOT NULL,
      avg_price REAL NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL DEFAULT 'open',
      pnl REAL,
      closed_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS whales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      address TEXT NOT NULL UNIQUE,
      label TEXT NOT NULL,
      tags TEXT NOT NULL DEFAULT '[]',
      pnl REAL NOT NULL DEFAULT 0,
      win_rate REAL NOT NULL DEFAULT 0,
      total_trades INTEGER NOT NULL DEFAULT 0,
      score INTEGER NOT NULL DEFAULT 0,
      last_active TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS baskets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      category TEXT NOT NULL,
      wallet_addresses TEXT NOT NULL DEFAULT '[]',
      consensus_threshold REAL NOT NULL DEFAULT 0.8,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS signals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      market_id TEXT NOT NULL,
      market_question TEXT NOT NULL,
      outcome TEXT NOT NULL,
      confidence INTEGER NOT NULL,
      description TEXT NOT NULL,
      sources TEXT NOT NULL DEFAULT '[]',
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS cascades (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      market_id TEXT NOT NULL,
      market_question TEXT NOT NULL,
      outcome TEXT NOT NULL,
      whale_addresses TEXT NOT NULL DEFAULT '[]',
      avg_price REAL NOT NULL,
      total_size REAL NOT NULL,
      strength TEXT NOT NULL DEFAULT 'medium',
      first_trade_at TEXT NOT NULL,
      last_trade_at TEXT NOT NULL,
      active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS user_subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      type TEXT NOT NULL,
      target_id TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_users_telegram_id ON users(telegram_id);
    CREATE INDEX IF NOT EXISTS idx_positions_user_id ON positions(user_id);
    CREATE INDEX IF NOT EXISTS idx_positions_status ON positions(status);
    CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
    CREATE INDEX IF NOT EXISTS idx_signals_active ON signals(active);
    CREATE INDEX IF NOT EXISTS idx_cascades_active ON cascades(active);
    CREATE INDEX IF NOT EXISTS idx_whales_score ON whales(score);
    CREATE INDEX IF NOT EXISTS idx_user_subs_user_id ON user_subscriptions(user_id);
  `);

  console.log("📦 Database initialized at", DB_PATH);
}

export { schema };
