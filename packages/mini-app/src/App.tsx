import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Markets } from "./pages/Markets";
import { MarketDetail } from "./pages/MarketDetail";
import { Wallet } from "./pages/Wallet";
import { Portfolio } from "./pages/Portfolio";
import { Radar } from "./pages/Radar";
import { Signals } from "./pages/Signals";

export function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      tg.setHeaderColor("#0a0a0f");
      tg.setBackgroundColor("#0a0a0f");
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/market/:id" element={<MarketDetail />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/radar" element={<Radar />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/bet/:marketId/:outcome" element={<MarketDetail />} />
      </Routes>
    </div>
  );
}
