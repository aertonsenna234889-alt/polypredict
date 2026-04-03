import { useState } from "react";
import { BottomNav } from "../components/BottomNav";
import { MarketCard } from "../components/MarketCard";
import type { Market } from "@polypredict/shared";

const categories = [
  { key: "trending", label: "🔥 Trending" },
  { key: "politics", label: "🏛 Politics" },
  { key: "crypto", label: "₿ Crypto" },
  { key: "sports", label: "⚽ Sports" },
  { key: "economics", label: "💹 Economics" },
  { key: "science", label: "🔬 Science" },
];

// Mock data — will be replaced with API calls
const mockMarkets: Market[] = [
  {
    id: "m1",
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
    id: "m2",
    question: "Will ETH reach $3k in April?",
    slug: "eth-3k-april",
    category: "crypto",
    endDate: "2026-04-30",
    active: true,
    closed: false,
    outcomes: [
      { id: "y2", title: "Yes", price: 0.28 },
      { id: "n2", title: "No", price: 0.72 },
    ],
    volume: 890000,
    liquidity: 210000,
  },
  {
    id: "m3",
    question: "Fed rate cut in June 2026?",
    slug: "fed-rate-cut",
    category: "economics",
    endDate: "2026-06-30",
    active: true,
    closed: false,
    outcomes: [
      { id: "y3", title: "Yes", price: 0.45 },
      { id: "n3", title: "No", price: 0.55 },
    ],
    volume: 2100000,
    liquidity: 580000,
  },
  {
    id: "m4",
    question: "Trump wins 2026 midterms?",
    slug: "trump-midterms",
    category: "politics",
    endDate: "2026-11-03",
    active: true,
    closed: false,
    outcomes: [
      { id: "y4", title: "Yes", price: 0.52 },
      { id: "n4", title: "No", price: 0.48 },
    ],
    volume: 3400000,
    liquidity: 920000,
  },
];

export function Markets() {
  const [active, setActive] = useState("trending");

  const filtered =
    active === "trending"
      ? mockMarkets
      : mockMarkets.filter((m) => m.category === active);

  return (
    <>
      <div className="header">
        <h1>📊 Markets</h1>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          marginBottom: 16,
          paddingBottom: 4,
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`btn btn-sm ${active === cat.key ? "btn-primary" : "btn-outline"}`}
            onClick={() => setActive(cat.key)}
            style={{ whiteSpace: "nowrap", flex: "none" }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Market list */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", color: "var(--text-secondary)", padding: 40 }}>
          No markets in this category
        </div>
      ) : (
        filtered.map((m) => <MarketCard key={m.id} market={m} />)
      )}

      <BottomNav />
    </>
  );
}
