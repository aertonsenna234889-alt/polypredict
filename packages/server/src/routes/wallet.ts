import { Router } from "express";

export const walletRouter = Router();

// POST /api/wallet/create — create wallet for telegram user
walletRouter.post("/create", async (req, res) => {
  const { telegramId, firstName } = req.body;

  if (!telegramId) {
    res.status(400).json({ ok: false, error: "telegramId required" });
    return;
  }

  try {
    // TODO: integrate Turnkey
    // For now, generate a mock address
    const address = "0x" + Buffer.from(`user-${telegramId}`).toString("hex").padEnd(40, "0").slice(0, 40);

    res.json({
      ok: true,
      data: {
        address,
        telegramId,
        network: "polygon",
      },
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to create wallet" });
  }
});

// GET /api/wallet/:address/balance
walletRouter.get("/:address/balance", async (req, res) => {
  try {
    // TODO: query Polygon RPC for USDC balance
    res.json({
      ok: true,
      data: {
        address: req.params.address,
        balance: "0.00",
        currency: "USDC",
        network: "polygon",
      },
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch balance" });
  }
});

// GET /api/wallet/:address/history
walletRouter.get("/:address/history", async (req, res) => {
  try {
    // TODO: query transaction history
    res.json({ ok: true, data: [] });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch history" });
  }
});
