import { useNavigate } from "react-router-dom";
import type { Market } from "@polypredict/shared";

export function MarketCard({ market }: { market: Market }) {
  const navigate = useNavigate();
  const yes = market.outcomes.find((o) => o.title === "Yes");
  const no = market.outcomes.find((o) => o.title === "No");
  const yesPrice = yes?.price ?? 0.5;
  const noPrice = no?.price ?? 0.5;

  return (
    <div className="card" onClick={() => navigate(`/market/${market.id}`)}>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
        {market.question}
      </div>

      <div className="price-bar">
        <div className="price-bar-yes" style={{ width: `${yesPrice * 100}%` }} />
        <div className="price-bar-no" style={{ width: `${noPrice * 100}%` }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span style={{ color: "var(--green)" }}>YES {(yesPrice * 100).toFixed(0)}¢</span>
        <span style={{ color: "var(--red)" }}>NO {(noPrice * 100).toFixed(0)}¢</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
          fontSize: 12,
          color: "var(--text-secondary)",
        }}
      >
        <span>Vol: ${(market.volume / 1e6).toFixed(1)}M</span>
        <span>{market.category}</span>
      </div>
    </div>
  );
}
