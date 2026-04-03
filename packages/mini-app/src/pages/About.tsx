import { BottomNav } from "../components/BottomNav";

export function About() {
  return (
    <>
      <div className="header">
        <h1>About</h1>
      </div>

      {/* Founder Story */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
          Why PolyPredict exists
        </div>
        <div
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          <p style={{ marginBottom: 12 }}>
            Created by <strong style={{ color: "var(--text)" }}>Aerton Senna</strong> — a trader
            who got tired of the broken state of prediction market tools.
          </p>

          <p
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 14,
              marginBottom: 12,
              fontStyle: "italic",
              color: "var(--text)",
            }}
          >
            "I spent months trying to copy-trade on Polymarket. The tools were garbage — half of
            them custodial (they literally hold your private keys on their server), the other half
            worked only on one chain and crashed during high volatility, exactly when you need them
            most.
          </p>

          <p
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 14,
              marginBottom: 12,
              fontStyle: "italic",
              color: "var(--text)",
            }}
          >
            Then I tried to use Polymarket itself from different countries — and discovered it's
            blocked in half the world. VPN works sometimes, but your account can get flagged. I
            talked to traders from Brazil, Turkey, India, Korea — same story everywhere. Great
            market, zero access.
          </p>

          <p
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 14,
              marginBottom: 12,
              fontStyle: "italic",
              color: "var(--text)",
            }}
          >
            I looked at the 'smart money' tracking tools — they all show you what whales did
            YESTERDAY. By the time you see the signal, the price already moved. Useless.
          </p>

          <p
            style={{
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 14,
              marginBottom: 16,
              fontStyle: "italic",
              color: "var(--text)",
              fontWeight: 600,
            }}
          >
            So I said f*ck it and built PolyPredict."
          </p>

          <p style={{ color: "var(--text)", fontWeight: 600 }}>
            — Aerton Senna, founder
          </p>
        </div>
      </div>

      {/* What is PolyPredict */}
      <div className="section-title">What is PolyPredict</div>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: "var(--text)" }}>One bot. Works from anywhere.</strong>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <span style={{ color: "var(--green)" }}>🐋</span>{" "}
              <strong style={{ color: "var(--text)" }}>Smart Money Radar</strong> — real-time whale
              tracking with cascade alerts that fire BEFORE the price moves
            </div>
            <div>
              <span style={{ color: "var(--blue)" }}>🤖</span>{" "}
              <strong style={{ color: "var(--text)" }}>AI Analyst</strong> — calculates actual
              probability, not just charts. Finds mispricing vs market odds
            </div>
            <div>
              <span style={{ color: "var(--yellow)" }}>📈</span>{" "}
              <strong style={{ color: "var(--text)" }}>Cross-Market Arbitrage</strong> — spots price
              gaps across Polymarket, Kalshi, and Azuro
            </div>
            <div>
              <span style={{ color: "var(--accent)" }}>💰</span>{" "}
              <strong style={{ color: "var(--text)" }}>Non-Custodial Wallet</strong> — your keys,
              your money. We literally cannot touch it. No seed phrase needed
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="section-title">Principles</div>
      <div className="stats-grid" style={{ marginBottom: 16 }}>
        <div className="stat-card">
          <div className="stat-value" style={{ fontSize: 24 }}>$0</div>
          <div className="stat-label">Subscription fee</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ fontSize: 24 }}>0</div>
          <div className="stat-label">Hidden fees</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ fontSize: 24 }}>🔓</div>
          <div className="stat-label">Open source</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ fontSize: 24 }}>🌍</div>
          <div className="stat-label">Works anywhere</div>
        </div>
      </div>

      {/* Links */}
      <div className="section-title">Links</div>
      <div className="card">
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
          <a
            href="https://github.com/aertonsenna234889-alt/polypredict"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            🔗 GitHub — source code
          </a>
          <a
            href="https://t.me/PolyPredicting_bot"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            🤖 Telegram Bot — @PolyPredicting_bot
          </a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: 12,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Built with frustration and love.
        <br />
        "I built what I wanted to use."
      </div>

      <BottomNav />
    </>
  );
}
