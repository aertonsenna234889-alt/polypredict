import { Router } from "express";
import type { TrackedWallet, WalletBasket, CascadeAlert } from "@polypredict/shared";

export const radarRouter = Router();

// GET /api/radar/whales — top performing wallets
radarRouter.get("/whales", async (req, res) => {
  const period = (req.query.period as string) || "30d";
  const limit = parseInt(req.query.limit as string) || 20;

  // TODO: fetch from on-chain analytics / database
  const whales: TrackedWallet[] = [
    {
      address: "0x1234...abcd",
      label: "Fredi9999",
      tags: ["politics", "economics"],
      pnl: 142000,
      winRate: 0.74,
      totalTrades: 847,
      score: 92,
    },
    {
      address: "0x5678...efgh",
      label: "PolyWhale",
      tags: ["crypto", "economics"],
      pnl: 89000,
      winRate: 0.68,
      totalTrades: 523,
      score: 87,
    },
    {
      address: "0x9abc...ijkl",
      label: "CryptoOracle",
      tags: ["crypto", "science"],
      pnl: 67000,
      winRate: 0.71,
      totalTrades: 312,
      score: 85,
    },
  ];

  res.json({ ok: true, data: whales });
});

// GET /api/radar/baskets — wallet baskets
radarRouter.get("/baskets", async (_req, res) => {
  const baskets: WalletBasket[] = [
    {
      id: "b1",
      name: "Politics Experts",
      description: "Top wallets specializing in political prediction markets",
      category: "politics",
      wallets: [],
      consensusThreshold: 0.8,
    },
    {
      id: "b2",
      name: "Crypto Analysts",
      description: "Expert wallets on crypto price and event markets",
      category: "crypto",
      wallets: [],
      consensusThreshold: 0.8,
    },
    {
      id: "b3",
      name: "Sports Predictors",
      description: "High-accuracy sports betting wallets",
      category: "sports",
      wallets: [],
      consensusThreshold: 0.8,
    },
  ];

  res.json({ ok: true, data: baskets });
});

// GET /api/radar/cascades — active cascade alerts
radarRouter.get("/cascades", async (_req, res) => {
  const cascades: CascadeAlert[] = [
    {
      id: "c1",
      marketId: "m3",
      marketQuestion: "Fed rate cut in June 2026?",
      outcome: "YES",
      wallets: [],
      avgPrice: 0.44,
      totalSize: 82000,
      firstTradeAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      lastTradeAt: new Date(Date.now() - 30 * 60 * 1000),
      strength: "strong",
    },
  ];

  res.json({ ok: true, data: cascades });
});

// GET /api/radar/wallet/:address — wallet detail
radarRouter.get("/wallet/:address", async (req, res) => {
  // TODO: fetch wallet analytics
  res.json({
    ok: true,
    data: {
      address: req.params.address,
      pnl: 0,
      winRate: 0,
      trades: [],
    },
  });
});
