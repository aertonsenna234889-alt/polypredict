import { useState } from "react";
import { BottomNav } from "../components/BottomNav";

export function Wallet() {
  const [copied, setCopied] = useState(false);
  const address = "0xaabb...ccdd"; // mock
  const balance = "0.00";

  const copyAddress = () => {
    navigator.clipboard.writeText("0xaabbccddeeff00112233445566778899aabbccdd");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="header">
        <h1>💰 Wallet</h1>
        <span className="badge badge-green">Polygon</span>
      </div>

      {/* Balance */}
      <div className="card" style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 4 }}>
          Available Balance
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, marginBottom: 4 }}>
          ${balance}
        </div>
        <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>USDC</div>
      </div>

      {/* Address */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 6 }}>
          Your Address
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <code style={{ fontSize: 13, color: "var(--accent)" }}>{address}</code>
          <button className="btn btn-outline btn-sm" onClick={copyAddress}>
            {copied ? "✓" : "Copy"}
          </button>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--text-secondary)",
            marginTop: 8,
          }}
        >
          🔐 Non-custodial · Keys secured in hardware enclave
        </div>
      </div>

      {/* Actions */}
      <div className="row" style={{ marginBottom: 16 }}>
        <button className="btn btn-primary">📥 Deposit</button>
        <button className="btn btn-outline">📤 Withdraw</button>
      </div>

      {/* Security info */}
      <div className="section-title">Security</div>
      <div className="card">
        <div style={{ fontSize: 14, marginBottom: 8 }}>
          🛡 Your wallet is <strong>non-custodial</strong>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          Private keys are generated and stored in Turnkey's hardware security
          enclaves. We never have access to your keys. No seed phrase needed.
        </div>
      </div>

      {/* Transaction History */}
      <div className="section-title" style={{ marginTop: 16 }}>Recent Transactions</div>
      <div
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          padding: 24,
          fontSize: 14,
        }}
      >
        No transactions yet
      </div>

      <BottomNav />
    </>
  );
}
