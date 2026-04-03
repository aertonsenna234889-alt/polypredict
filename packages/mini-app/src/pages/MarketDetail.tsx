import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

export function MarketDetail() {
  const { id, outcome: urlOutcome } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no">(
    (urlOutcome as "yes" | "no") || "yes"
  );

  // Mock market data
  const market = {
    question: "Will BTC be above $70k on May 1?",
    yesPrice: 0.62,
    noPrice: 0.38,
    volume: 1200000,
    liquidity: 340000,
    endDate: "May 1, 2026",
    whaleCount: 4,
    aiScore: 68,
  };

  const price = selectedOutcome === "yes" ? market.yesPrice : market.noPrice;
  const shares = amount ? (parseFloat(amount) / price).toFixed(1) : "0";
  const payout = amount ? (parseFloat(amount) / price).toFixed(2) : "0";

  return (
    <>
      <div className="header">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => navigate(-1)}
          style={{ width: "auto" }}
        >
          ←
        </button>
        <span className="badge badge-blue">Ends {market.endDate}</span>
      </div>

      <h2 style={{ fontSize: 18, marginBottom: 16 }}>{market.question}</h2>

      {/* Price bar */}
      <div className="price-bar" style={{ height: 12, marginBottom: 4 }}>
        <div className="price-bar-yes" style={{ width: `${market.yesPrice * 100}%` }} />
        <div className="price-bar-no" style={{ width: `${market.noPrice * 100}%` }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 16 }}>
        <span style={{ color: "var(--green)", fontWeight: 700 }}>YES {(market.yesPrice * 100).toFixed(0)}¢</span>
        <span style={{ color: "var(--red)", fontWeight: 700 }}>NO {(market.noPrice * 100).toFixed(0)}¢</span>
      </div>

      {/* Intelligence */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">🐋 {market.whaleCount}</div>
          <div className="stat-label">Whales Long YES</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">🤖 {market.aiScore}%</div>
          <div className="stat-label">AI Probability</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${(market.volume / 1e6).toFixed(1)}M</div>
          <div className="stat-label">Volume</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${(market.liquidity / 1e3).toFixed(0)}K</div>
          <div className="stat-label">Liquidity</div>
        </div>
      </div>

      {/* Trade section */}
      <div className="section-title" style={{ marginTop: 8 }}>Place Bet</div>

      <div className="row" style={{ marginBottom: 12 }}>
        <button
          className={`btn ${selectedOutcome === "yes" ? "btn-green" : "btn-outline"}`}
          onClick={() => setSelectedOutcome("yes")}
        >
          ✅ YES {(market.yesPrice * 100).toFixed(0)}¢
        </button>
        <button
          className={`btn ${selectedOutcome === "no" ? "btn-red" : "btn-outline"}`}
          onClick={() => setSelectedOutcome("no")}
        >
          ❌ NO {(market.noPrice * 100).toFixed(0)}¢
        </button>
      </div>

      {/* Amount */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>Amount (USDC)</div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          style={{
            width: "100%",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: "12px",
            color: "var(--text)",
            fontSize: 18,
            fontWeight: 700,
            outline: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 6,
            marginTop: 8,
          }}
        >
          {[5, 10, 25, 50, 100].map((v) => (
            <button
              key={v}
              className="btn btn-outline btn-sm"
              onClick={() => setAmount(String(v))}
            >
              ${v}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      {amount && parseFloat(amount) > 0 && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
            <span style={{ color: "var(--text-secondary)" }}>Shares</span>
            <span>{shares}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
            <span style={{ color: "var(--text-secondary)" }}>Avg Price</span>
            <span>{(price * 100).toFixed(0)}¢</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700 }}>
            <span style={{ color: "var(--text-secondary)" }}>Payout if correct</span>
            <span style={{ color: "var(--green)" }}>${payout}</span>
          </div>
        </div>
      )}

      <button
        className={`btn ${selectedOutcome === "yes" ? "btn-green" : "btn-red"}`}
        disabled={!amount || parseFloat(amount) <= 0}
        style={{ opacity: !amount || parseFloat(amount) <= 0 ? 0.5 : 1 }}
      >
        Buy {selectedOutcome.toUpperCase()} — ${amount || "0"} USDC
      </button>

      <BottomNav />
    </>
  );
}
