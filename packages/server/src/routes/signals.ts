import { Router } from "express";
import type { Signal, ArbitrageOpportunity } from "@polypredict/shared";

export const signalsRouter = Router();

// GET /api/signals — active signals
signalsRouter.get("/", async (req, res) => {
  const type = req.query.type as string | undefined;

  // TODO: compute real signals
  const signals: Signal[] = [
    {
      id: "sig1",
      type: "cascade",
      marketId: "m3",
      marketQuestion: "Fed rate cut in June 2026?",
      outcome: "YES",
      confidence: 78,
      description: "4 elite wallets entered YES position within 90min. Avg price 44¢. Combined $82K.",
      sources: [
        { type: "whale", detail: "Fredi9999 bought $25K YES at 43¢" },
        { type: "whale", detail: "PolyWhale bought $22K YES at 44¢" },
        { type: "whale", detail: "CryptoOracle bought $20K YES at 45¢" },
        { type: "whale", detail: "PredictKing bought $15K YES at 44¢" },
      ],
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      id: "sig2",
      type: "ai_edge",
      marketId: "m1",
      marketQuestion: "Will BTC be above $70k on May 1?",
      outcome: "YES",
      confidence: 68,
      description: "AI model estimates 68% probability vs market price 62¢. Potential edge: +6¢.",
      sources: [
        { type: "ai", detail: "Technical analysis: BTC momentum bullish, support at $65K" },
        { type: "ai", detail: "On-chain: exchange reserves declining, accumulation phase" },
      ],
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    },
  ];

  const filtered = type ? signals.filter((s) => s.type === type) : signals;
  res.json({ ok: true, data: filtered });
});

// GET /api/signals/arbitrage — cross-market arbitrage
signalsRouter.get("/arbitrage", async (_req, res) => {
  const arbs: ArbitrageOpportunity[] = [
    {
      id: "arb1",
      question: "Trump wins 2026 midterm?",
      platforms: [
        { platform: "polymarket", outcome: "YES", yesPrice: 0.52, noPrice: 0.48 },
        { platform: "kalshi", outcome: "YES", yesPrice: 0.48, noPrice: 0.52 },
      ],
      spread: 0.077,
      createdAt: new Date(),
    },
    {
      id: "arb2",
      question: "BTC > $80k by July?",
      platforms: [
        { platform: "polymarket", outcome: "YES", yesPrice: 0.31, noPrice: 0.69 },
        { platform: "kalshi", outcome: "YES", yesPrice: 0.27, noPrice: 0.73 },
      ],
      spread: 0.129,
      createdAt: new Date(),
    },
  ];

  res.json({ ok: true, data: arbs });
});
