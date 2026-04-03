import { Router } from "express";
import type { Market, ApiResponse } from "@polypredict/shared";
import { polymarketClient } from "../services/polymarket.js";

export const marketsRouter = Router();

// GET /api/markets — list markets
marketsRouter.get("/", async (req, res) => {
  const category = req.query.category as string | undefined;
  const limit = parseInt(req.query.limit as string) || 20;

  try {
    const markets = await polymarketClient.getMarkets({ category, limit });
    const response: ApiResponse<Market[]> = { ok: true, data: markets };
    res.json(response);
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch markets" });
  }
});

// GET /api/markets/trending — trending markets
marketsRouter.get("/trending", async (_req, res) => {
  try {
    const markets = await polymarketClient.getTrending();
    res.json({ ok: true, data: markets });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch trending" });
  }
});

// GET /api/markets/:id — market detail
marketsRouter.get("/:id", async (req, res) => {
  try {
    const market = await polymarketClient.getMarket(req.params.id);
    res.json({ ok: true, data: market });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Market not found" });
  }
});

// GET /api/markets/:id/trades — recent trades
marketsRouter.get("/:id/trades", async (req, res) => {
  try {
    const trades = await polymarketClient.getMarketTrades(req.params.id);
    res.json({ ok: true, data: trades });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch trades" });
  }
});
