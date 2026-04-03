import type { Market, MarketTrade } from "@polypredict/shared";
import { POLYMARKET_API, POLYMARKET_DATA_API } from "@polypredict/shared";

class PolymarketClient {
  private apiBase = POLYMARKET_API;
  private dataBase = POLYMARKET_DATA_API;

  async getMarkets(opts: { category?: string; limit?: number }): Promise<Market[]> {
    const params = new URLSearchParams();
    if (opts.limit) params.set("limit", String(opts.limit));
    if (opts.category) params.set("tag", opts.category);
    params.set("active", "true");
    params.set("closed", "false");

    try {
      const res = await fetch(`${this.dataBase}/markets?${params}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const raw = await res.json();
      return this.mapMarkets(raw);
    } catch {
      return this.getMockMarkets(opts.category);
    }
  }

  async getTrending(): Promise<Market[]> {
    try {
      const res = await fetch(`${this.dataBase}/markets?limit=10&order=volume24hr&ascending=false&active=true`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const raw = await res.json();
      return this.mapMarkets(raw);
    } catch {
      return this.getMockMarkets("trending");
    }
  }

  async getMarket(id: string): Promise<Market | null> {
    try {
      const res = await fetch(`${this.dataBase}/markets/${id}`);
      if (!res.ok) return null;
      const raw = await res.json();
      return this.mapMarket(raw);
    } catch {
      return null;
    }
  }

  async getMarketTrades(marketId: string): Promise<MarketTrade[]> {
    try {
      const res = await fetch(`${this.dataBase}/activity?market=${marketId}&limit=50`);
      if (!res.ok) return [];
      const raw = await res.json();
      return raw.map((t: any) => ({
        id: t.id,
        marketId,
        walletAddress: t.proxyWalletAddress || t.address,
        outcome: t.outcome,
        side: t.side,
        price: parseFloat(t.price),
        size: parseFloat(t.size),
        timestamp: new Date(t.timestamp),
      }));
    } catch {
      return [];
    }
  }

  async getWalletActivity(address: string): Promise<MarketTrade[]> {
    try {
      const res = await fetch(`${this.dataBase}/activity?address=${address}&limit=100`);
      if (!res.ok) return [];
      return res.json();
    } catch {
      return [];
    }
  }

  private mapMarkets(raw: any[]): Market[] {
    if (!Array.isArray(raw)) return [];
    return raw.map((m) => this.mapMarket(m)).filter(Boolean) as Market[];
  }

  private mapMarket(m: any): Market {
    const outcomes = (m.tokens || []).map((t: any) => ({
      id: t.token_id,
      title: t.outcome,
      price: parseFloat(t.price) || 0,
    }));

    return {
      id: m.condition_id || m.id,
      question: m.question,
      slug: m.slug || "",
      category: m.category || m.tags?.[0] || "other",
      endDate: m.end_date_iso || m.endDate || "",
      active: m.active ?? true,
      closed: m.closed ?? false,
      outcomes,
      volume: parseFloat(m.volume) || 0,
      liquidity: parseFloat(m.liquidity) || 0,
      image: m.image,
    };
  }

  private getMockMarkets(category?: string): Market[] {
    return [
      {
        id: "mock-1",
        question: "Will BTC be above $70k on May 1?",
        slug: "btc-70k-may",
        category: "crypto",
        endDate: "2026-05-01",
        active: true,
        closed: false,
        outcomes: [
          { id: "y1", title: "Yes", price: 0.62 },
          { id: "n1", title: "No", price: 0.38 },
        ],
        volume: 1200000,
        liquidity: 340000,
      },
      {
        id: "mock-2",
        question: "Fed rate cut in June 2026?",
        slug: "fed-rate-cut-june",
        category: "economics",
        endDate: "2026-06-30",
        active: true,
        closed: false,
        outcomes: [
          { id: "y2", title: "Yes", price: 0.45 },
          { id: "n2", title: "No", price: 0.55 },
        ],
        volume: 2100000,
        liquidity: 580000,
      },
      {
        id: "mock-3",
        question: "Will ETH reach $3k in April?",
        slug: "eth-3k-april",
        category: "crypto",
        endDate: "2026-04-30",
        active: true,
        closed: false,
        outcomes: [
          { id: "y3", title: "Yes", price: 0.28 },
          { id: "n3", title: "No", price: 0.72 },
        ],
        volume: 890000,
        liquidity: 210000,
      },
    ];
  }
}

export const polymarketClient = new PolymarketClient();
