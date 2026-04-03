import { useNavigate } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export function Home() {
  const navigate = useNavigate();
  const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <>
      <div className="header">
        <h1>PolyPredict</h1>
        <span className="badge badge-green">Live</span>
      </div>

      <div style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 20 }}>
        Hey {tgUser?.first_name || "trader"}! Your prediction market edge.
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--green)" }}>$0.00</div>
          <div className="stat-label">Balance</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Positions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--yellow)" }}>2</div>
          <div className="stat-label">Active Signals</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: "var(--blue)" }}>1</div>
          <div className="stat-label">Cascades</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="section-title">Quick Actions</div>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="btn btn-primary" onClick={() => navigate("/markets")}>
          📊 Markets
        </button>
        <button className="btn btn-outline" onClick={() => navigate("/radar")}>
          🐋 Radar
        </button>
      </div>
      <div className="row" style={{ marginBottom: 12 }}>
        <button className="btn btn-outline" onClick={() => navigate("/signals")}>
          🤖 Signals
        </button>
        <button className="btn btn-outline" onClick={() => navigate("/wallet")}>
          💰 Wallet
        </button>
      </div>

      {/* Active Signal Preview */}
      <div className="section-title" style={{ marginTop: 8 }}>Latest Signal</div>
      <div className="card" onClick={() => navigate("/signals")}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span className="badge badge-blue">🐋 Cascade</span>
          <span className="badge badge-green">78%</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
          Fed rate cut in June 2026?
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
          4 whales entered YES · avg 44¢ · $82K total
        </div>
      </div>

      <BottomNav />
    </>
  );
}
