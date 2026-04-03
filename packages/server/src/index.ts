import "dotenv/config";
import express from "express";
import cors from "cors";
import { marketsRouter } from "./routes/markets.js";
import { walletRouter } from "./routes/wallet.js";
import { radarRouter } from "./routes/radar.js";
import { signalsRouter } from "./routes/signals.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/markets", marketsRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/radar", radarRouter);
app.use("/api/signals", signalsRouter);

app.listen(PORT, () => {
  console.log(`🚀 PolyPredict server running on port ${PORT}`);
});
