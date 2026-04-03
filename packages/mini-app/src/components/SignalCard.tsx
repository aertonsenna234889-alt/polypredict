import type { Signal } from "@polypredict/shared";

const typeIcons: Record<string, string> = {
  cascade: "🐋",
  ai_edge: "🤖",
  arbitrage: "📈",
  basket_consensus: "🧺",
};

const typeLabels: Record<string, string> = {
  cascade: "Cascade Alert",
  ai_edge: "AI Edge",
  arbitrage: "Arbitrage",
  basket_consensus: "Basket",
};

export function SignalCard({ signal }: { signal: Signal }) {
  const strengthDots = Math.ceil(signal.confidence / 20); // 1-5 dots

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span className="badge badge-blue">
          {typeIcons[signal.type]} {typeLabels[signal.type]}
        </span>
        <span className="badge badge-green">{signal.confidence}%</span>
      </div>

      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
        {signal.marketQuestion}
      </div>

      <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>
        {signal.description}
      </div>

      <div className="signal-strength">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`signal-dot ${i <= strengthDots ? "active" : ""}`} />
        ))}
      </div>

      <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
        {signal.sources.length} sources · {timeAgo(signal.createdAt)}
      </div>
    </div>
  );
}

function timeAgo(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const mins = Math.floor((Date.now() - d.getTime()) / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
