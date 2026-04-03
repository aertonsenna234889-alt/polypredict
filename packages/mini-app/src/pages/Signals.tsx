import { useState } from "react";
import { BottomNav } from "../components/BottomNav";
import { SignalCard } from "../components/SignalCard";
import type { Signal } from "@polypredict/shared";

const mockSignals: Signal[] = [
  {
    id: "sig1",
    type: "cascade",
    marketId: "m3",
    marketQuestion: "Fed rate cut in June 2026?",
    outcome: "YES",
    confidence: 78,
    description: "4 elite wallets entered YES within 90min. Avg price 44¢. Combined $82K.",
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
    description: "AI estimates 68% probability vs market 62¢. Edge: +6¢.",
    sources: [
      { type: "ai", detail: "Technical: BTC momentum bullish, support at $65K" },
      { type: "ai", detail: "On-chain: exchange reserves declining" },
    ],
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: "sig3",
    type: "arbitrage",
    marketId: "m4",
    marketQuestion: "Trump wins 2026 midterms?",
    outcome: "YES",
    confidence: 85,
    description: "Polymarket YES 52¢ vs Kalshi YES 48¢. Spread: 7.7%.",
    sources: [
      { type: "arbitrage", detail: "Polymarket YES: 52¢" },
      { type: "arbitrage", detail: "Kalshi YES: 48¢" },
    ],
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
  },
];

type Filter = "all" | "cascade" | "ai_edge" | "arbitrage" | "basket_consensus";

export function Signals() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? mockSignals : mockSignals.filter((s) => s.type === filter);

  return (
    <>
      <div className="header">
        <h1>🤖 Signals</h1>
        <span className="badge badge-green">{mockSignals.length} active</span>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          marginBottom: 16,
          paddingBottom: 4,
        }}
      >
        {[
          { key: "all", label: "🔥 All" },
          { key: "cascade", label: "🐋 Cascade" },
          { key: "ai_edge", label: "🤖 AI" },
          { key: "arbitrage", label: "📈 Arb" },
          { key: "basket_consensus", label: "🧺 Basket" },
        ].map((f) => (
          <button
            key={f.key}
            className={`btn btn-sm ${filter === f.key ? "btn-primary" : "btn-outline"}`}
            onClick={() => setFilter(f.key as Filter)}
            style={{ whiteSpace: "nowrap", flex: "none" }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", color: "var(--text-secondary)", padding: 40 }}>
          No signals of this type right now
        </div>
      ) : (
        filtered.map((s) => <SignalCard key={s.id} signal={s} />)
      )}

      <BottomNav />
    </>
  );
}
