import { BottomNav } from "../components/BottomNav";

export function Portfolio() {
  return (
    <>
      <div className="header">
        <h1>📁 Portfolio</h1>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">$0.00</div>
          <div className="stat-label">Total Value</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--text-secondary)" }}>$0.00</div>
          <div className="stat-label">Total P&L</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Open Positions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">—</div>
          <div className="stat-label">Win Rate</div>
        </div>
      </div>

      <div className="section-title">Open Positions</div>
      <div
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          padding: 40,
          fontSize: 14,
        }}
      >
        No open positions.
        <br />
        <span style={{ fontSize: 13 }}>
          Browse markets or follow signals to get started.
        </span>
      </div>

      <div className="section-title">Trade History</div>
      <div
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          padding: 24,
          fontSize: 14,
        }}
      >
        No trades yet
      </div>

      <BottomNav />
    </>
  );
}
