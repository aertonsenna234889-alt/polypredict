import { BottomNav } from "../components/BottomNav";
import { TOP_TRADERS } from "@polypredict/shared";

export function Leaderboard() {
  const totalPnl = TOP_TRADERS.reduce((s, t) => s + t.pnl, 0);

  return (
    <>
      <div className="header">
        <h1>🏆 Top 50</h1>
        <span className="badge badge-green">+${(totalPnl / 1000).toFixed(0)}K total</span>
      </div>

      <div className="stats-grid" style={{ marginBottom: 16 }}>
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--green)" }}>50</div>
          <div className="stat-label">Traders</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--green)" }}>+452%</div>
          <div className="stat-label">Avg Return</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$2.4K</div>
          <div className="stat-label">Avg Deposit</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">70%</div>
          <div className="stat-label">Avg Win Rate</div>
        </div>
      </div>

      {TOP_TRADERS.map((t) => (
        <div className="card" key={t.rank} style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: t.rank <= 3 ? "var(--yellow)" : "var(--text-secondary)", minWidth: 28 }}>
                {t.rank <= 3 ? ["🥇", "🥈", "🥉"][t.rank - 1] : `#${t.rank}`}
              </span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</span>
            </div>
            <span style={{ color: "var(--green)", fontWeight: 700, fontSize: 15 }}>
              +${t.pnl.toLocaleString()}
            </span>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 4, marginLeft: 38, fontSize: 12, color: "var(--text-secondary)" }}>
            <span>WR: {t.wr}%</span>
            <span>{t.trades} trades</span>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", padding: 20, color: "var(--text-secondary)", fontSize: 13 }}>
        Deposit USDC to start trading and join the leaderboard
      </div>

      <BottomNav />
    </>
  );
}
