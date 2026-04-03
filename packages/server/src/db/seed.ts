import { db, schema } from "./index.js";

/**
 * Seeds the database with initial data (whales, baskets, sample signals)
 */
export function seedDatabase() {
  const existingWhales = db.select().from(schema.whales).all();
  if (existingWhales.length > 0) {
    console.log("📦 Database already seeded, skipping");
    return;
  }

  console.log("🌱 Seeding database...");

  // ── Whales ──
  const whaleData = [
    { address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", label: "Fredi9999", tags: '["politics","economics"]', pnl: 142000, winRate: 0.74, totalTrades: 847, score: 92 },
    { address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", label: "PolyWhale", tags: '["crypto","economics"]', pnl: 89000, winRate: 0.68, totalTrades: 523, score: 87 },
    { address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", label: "CryptoOracle", tags: '["crypto","science"]', pnl: 67000, winRate: 0.71, totalTrades: 312, score: 85 },
    { address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906", label: "PredictKing", tags: '["politics"]', pnl: 54000, winRate: 0.65, totalTrades: 289, score: 81 },
    { address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", label: "AlphaTrader", tags: '["sports"]', pnl: 43000, winRate: 0.62, totalTrades: 456, score: 78 },
    { address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", label: "GCR_Poly", tags: '["politics","crypto"]', pnl: 890000, winRate: 0.68, totalTrades: 1203, score: 94 },
    { address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9", label: "WhaleAlert", tags: '["economics","politics"]', pnl: 654000, winRate: 0.64, totalTrades: 3102, score: 88 },
    { address: "0x14dC79964da2C08dfa4B27006B525f894F058764", label: "CryptoSage", tags: '["crypto"]', pnl: 521000, winRate: 0.72, totalTrades: 982, score: 90 },
  ];

  for (const w of whaleData) {
    db.insert(schema.whales).values({
      ...w,
      lastActive: new Date().toISOString(),
    }).run();
  }

  // ── Baskets ──
  const basketData = [
    { name: "Politics Experts", description: "Top wallets specializing in political prediction markets", category: "politics", walletAddresses: JSON.stringify(whaleData.filter(w => w.tags.includes("politics")).map(w => w.address)), consensusThreshold: 0.8 },
    { name: "Crypto Analysts", description: "Expert wallets on crypto price and event markets", category: "crypto", walletAddresses: JSON.stringify(whaleData.filter(w => w.tags.includes("crypto")).map(w => w.address)), consensusThreshold: 0.8 },
    { name: "Sports Predictors", description: "High-accuracy sports betting wallets", category: "sports", walletAddresses: JSON.stringify(whaleData.filter(w => w.tags.includes("sports")).map(w => w.address)), consensusThreshold: 0.8 },
    { name: "Economics", description: "Wallets focused on economic events and Fed decisions", category: "economics", walletAddresses: JSON.stringify(whaleData.filter(w => w.tags.includes("economics")).map(w => w.address)), consensusThreshold: 0.85 },
  ];

  for (const b of basketData) {
    db.insert(schema.baskets).values(b).run();
  }

  // ── Sample Signals ──
  db.insert(schema.signals).values({
    type: "cascade",
    marketId: "fed-rate-cut-june",
    marketQuestion: "Fed rate cut in June 2026?",
    outcome: "YES",
    confidence: 78,
    description: "4 elite wallets entered YES position within 90min. Avg price 44¢. Combined $82K.",
    sources: JSON.stringify([
      { type: "whale", detail: "Fredi9999 bought $25K YES at 43¢" },
      { type: "whale", detail: "PolyWhale bought $22K YES at 44¢" },
      { type: "whale", detail: "CryptoOracle bought $20K YES at 45¢" },
      { type: "whale", detail: "PredictKing bought $15K YES at 44¢" },
    ]),
  }).run();

  db.insert(schema.signals).values({
    type: "ai_edge",
    marketId: "btc-70k-may",
    marketQuestion: "Will BTC be above $70k on May 1?",
    outcome: "YES",
    confidence: 68,
    description: "AI model estimates 68% probability vs market price 62¢. Potential edge: +6¢.",
    sources: JSON.stringify([
      { type: "ai", detail: "Technical analysis: BTC momentum bullish, support at $65K" },
      { type: "ai", detail: "On-chain: exchange reserves declining, accumulation phase" },
    ]),
  }).run();

  db.insert(schema.signals).values({
    type: "arbitrage",
    marketId: "trump-midterms",
    marketQuestion: "Trump wins 2026 midterms?",
    outcome: "YES",
    confidence: 85,
    description: "Polymarket YES 52¢ vs Kalshi YES 48¢. Spread: 7.7%.",
    sources: JSON.stringify([
      { type: "arbitrage", detail: "Polymarket YES: 52¢" },
      { type: "arbitrage", detail: "Kalshi YES: 48¢" },
    ]),
  }).run();

  // ── Sample Cascade ──
  db.insert(schema.cascades).values({
    marketId: "fed-rate-cut-june",
    marketQuestion: "Fed rate cut in June 2026?",
    outcome: "YES",
    whaleAddresses: JSON.stringify([whaleData[0].address, whaleData[1].address, whaleData[2].address, whaleData[3].address]),
    avgPrice: 0.44,
    totalSize: 82000,
    strength: "strong",
    firstTradeAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    lastTradeAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  }).run();

  console.log("✅ Database seeded with", whaleData.length, "whales,", basketData.length, "baskets, 3 signals, 1 cascade");
}
