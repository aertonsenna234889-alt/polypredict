import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

type Tab = "whales" | "baskets" | "cascades";

const mockWhales = [
  { label: "Fredi9999", pnl: 142000, winRate: 74, score: 92, tags: ["politics", "economics"] },
  { label: "PolyWhale", pnl: 89000, winRate: 68, score: 87, tags: ["crypto"] },
  { label: "CryptoOracle", pnl: 67000, winRate: 71, score: 85, tags: ["crypto", "science"] },
  { label: "PredictKing", pnl: 54000, winRate: 65, score: 81, tags: ["politics"] },
  { label: "AlphaTrader", pnl: 43000, winRate: 62, score: 78, tags: ["sports"] },
];

const mockBaskets = [
  { name: "🏛 Politics Experts", wallets: 12, consensus: 85, avgWR: 71 },
  { name: "₿ Crypto Analysts", wallets: 8, consensus: 78, avgWR: 68 },
  { name: "⚽ Sports Predictors", wallets: 15, consensus: 82, avgWR: 64 },
  { name: "💹 Economics", wallets: 6, consensus: 90, avgWR: 73 },
];

export function Radar() {
  const [tab, setTab] = useState<Tab>("whales");

  return (
    <>
      <div className="header">
        <h1>🐋 Radar</h1>
      </div>

      {/* Tabs */}
      <div className="row" style={{ marginBottom: 16 }}>
        <button
          className={`btn btn-sm ${tab === "whales" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setTab("whales")}
        >
          Whales
        </button>
        <button
          className={`btn btn-sm ${tab === "baskets" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setTab("baskets")}
        >
          Baskets
        </button>
        <button
          className={`btn btn-sm ${tab === "cascades" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setTab("cascades")}
        >
          Cascades
        </button>
      </div>

      {/* Whales tab */}
      {tab === "whales" &&
        mockWhales.map((w, i) => (
          <div className="card" key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>
                #{i + 1} {w.label}
              </span>
              <span className="badge badge-green">Score: {w.score}</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-secondary)" }}>
              <span>P&L: <strong style={{ color: "var(--green)" }}>+${(w.pnl / 1000).toFixed(0)}K</strong></span>
              <span>WR: <strong style={{ color: "var(--text)" }}>{w.winRate}%</strong></span>
            </div>
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
              {w.tags.map((t) => (
                <span key={t} className="badge badge-blue" style={{ fontSize: 11 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

      {/* Baskets tab */}
      {tab === "baskets" &&
        mockBaskets.map((b, i) => (
          <div className="card" key={i}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{b.name}</div>
            <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-secondary)" }}>
              <span>{b.wallets} wallets</span>
              <span>Consensus: {b.consensus}%</span>
              <span>Avg WR: {b.avgWR}%</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 6 }}>
              Signal fires when {b.consensus}%+ of wallets agree
            </div>
          </div>
        ))}

      {/* Cascades tab */}
      {tab === "cascades" && (
        <>
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span className="badge badge-yellow">⚡ STRONG</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>2h ago</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
              Fed rate cut in June 2026? → YES
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              4 whales · avg 44¢ · $82K total
            </div>
            <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }}>
              View Market →
            </button>
          </div>

          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span className="badge badge-blue">⚡ MEDIUM</span>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>5h ago</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
              BTC above $70k May 1? → YES
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              3 whales · avg 59¢ · $45K total
            </div>
            <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }}>
              View Market →
            </button>
          </div>
        </>
      )}

      <BottomNav />
    </>
  );
}
