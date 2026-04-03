export const en = {
  lang_name: "English",
  flag: "🇬🇧",

  // ── Start / Welcome ──
  choose_language: "🌍 Choose your language:",
  welcome: (name: string) =>
    `Hey ${name}! 👋

*PolyPredict* — your edge on prediction markets.

🐋 *Smart Money Radar* — track elite wallets, cascade alerts when 3+ whales agree
🤖 *AI Analyst* — LLM evaluates probability vs market price, finds mispricing
📈 *Cross-Market Arbitrage* — spots price gaps across Polymarket / Kalshi / Azuro
💰 *Built-in Wallet* — non-custodial, gasless, instant

Choose how you want to work:`,

  // ── Main Menu ──
  menu_markets: "📊 Markets",
  menu_radar: "🐋 Radar",
  menu_signals: "🤖 Signals",
  menu_arb: "📈 Arbitrage",
  menu_wallet: "💰 Wallet",
  menu_portfolio: "📁 Portfolio",
  menu_open_app: "🚀 Open App",
  menu_choose: "*PolyPredict* — your edge on prediction markets.\n\nChoose a section:",
  btn_back: "« Back",

  // ── Help ──
  help: `*PolyPredict — Prediction Market Intelligence*

📊 /markets — Browse markets by category
🐋 /radar — Smart Money Radar & whale tracking
🤖 /signals — AI signals & cascade alerts
📈 /portfolio — Your positions & P&L
💰 /wallet — Deposit, withdraw, balance
🌐 /lang — Change language

Tap the button below to open the full app.`,

  // ── Markets ──
  markets_title: "📊 *Markets* — choose a category:",
  cat_politics: "🏛 Politics",
  cat_crypto: "₿ Crypto",
  cat_sports: "⚽ Sports",
  cat_science: "🔬 Science",
  cat_entertainment: "🎬 Entertainment",
  cat_economics: "💹 Economics",
  cat_trending: "🔥 Trending",

  market_detail: (q: string, yes: string, no: string, vol: string, liq: string, whales: number, ai: number) =>
    `📊 *${q}*

YES: *${yes}¢* · NO: *${no}¢*
Volume: *$${vol}* · Liquidity: *$${liq}*

🐋 *Smart Money:* ${whales} whales long YES
🤖 *AI Score:* ${ai}% probability

Tap below to place a bet:`,

  btn_buy_yes: "✅ Buy YES",
  btn_buy_no: "❌ Buy NO",
  btn_whales: "🐋 Whales",
  btn_ai_analysis: "🤖 AI Analysis",
  btn_full_view: "📊 Full View",

  // ── Betting ──
  bet_title: (outcome: string, price: string) =>
    `*Buy ${outcome}* at *${price}*\n\nChoose amount or confirm in the app:`,
  bet_confirm_app: "🔐 Confirm in App",
  bet_cancel: "« Cancel",
  bet_custom: "Custom",
  bet_placed: (q: string, side: string, amount: string, price: string, shares: string) =>
    `✅ *Order placed!*

Market: ${q}
Side: *${side}*
Amount: *$${amount} USDC*
Price: *${price}¢*
Shares: *${shares}*

Track in /portfolio`,

  // ── Wallet ──
  wallet_title: "💰 *Wallet*",
  wallet_no_wallet: `💰 *Wallet*

You don't have a wallet yet. One will be created automatically — no seed phrase, non-custodial, secured by Turnkey.

Creating your wallet...`,
  wallet_created: (address: string) =>
    `✅ *Wallet created!*

Address: \`${address}\`
Network: Polygon
Currency: USDC

Your keys are secured in a hardware enclave — we never have access to them.`,
  wallet_info: (address: string, balance: string) =>
    `💰 *Wallet*

Address: \`${address}\`
Balance: *$${balance} USDC*
Network: Polygon`,
  btn_deposit: "📥 Deposit",
  btn_withdraw: "📤 Withdraw",
  btn_refresh: "🔄 Refresh",
  btn_history: "📜 History",
  wallet_deposit_info: (address: string) =>
    `📥 *Deposit USDC*

Send *USDC* on *Polygon* to:
\`${address}\`

⚠️ Only send USDC on Polygon network. Other tokens or networks may result in loss.`,
  wallet_withdraw_prompt: "📤 *Withdraw*\n\nSend your destination address (Polygon USDC):",
  wallet_no_history: "📜 *Transaction History*\n\nNo transactions yet.",
  wallet_create_first: "Create a wallet first with /wallet",

  // ── Radar ──
  radar_title: (status: string) =>
    `🐋 *Smart Money Radar*

Track elite prediction market wallets in real-time.

🔔 *Cascade Alerts* — fires when 3+ top wallets enter the same position within 90 minutes
🧺 *Baskets* — wallet groups by expertise (politics, crypto, sports)
📊 *Leaderboard* — top performers by P&L & win rate

Status: ${status}`,
  radar_active: "🟢 Active",
  radar_inactive: "🔴 Inactive",
  btn_top_whales: "🐋 Top Whales",
  btn_baskets: "🧺 Baskets",
  btn_cascades: "🔔 Cascade Alerts",
  btn_leaderboard: "📊 Leaderboard",
  btn_settings: "⚙️ Settings",

  radar_whales_title: "🐋 *Top Whales (30d)*",
  radar_whale_line: (i: number, label: string, pnl: string, wr: number, score: number) =>
    `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Score: ${score}`,
  radar_whales_footer: "\nTap a whale number to track:",

  radar_baskets_title: `🧺 *Wallet Baskets*

Pre-built baskets of expert wallets by topic:`,
  radar_basket_line: (emoji: string, name: string, wallets: number, consensus: number, wr: number) =>
    `${emoji} *${name}* — ${wallets} wallets · Consensus: ${consensus}% · Avg WR: ${wr}%`,
  radar_baskets_footer: "\nSignal fires when 80%+ of basket agrees on a position.",

  radar_cascades_title: `🔔 *Cascade Alerts*

A cascade fires when 3+ elite wallets independently enter the same position within 90 minutes.`,
  radar_cascade_strong: "⚡ *STRONG*",
  radar_cascade_medium: "⚡ *MEDIUM*",
  radar_cascade_accuracy: "\nHistorically 73% more accurate than single-wallet signals.",

  radar_leaderboard: `📊 *Leaderboard — All Time*

🥇 Fredi9999 — +$1.2M · 2,847 trades · 71% WR
🥈 GCR_Poly — +$890K · 1,203 trades · 68% WR
🥉 WhaleAlert — +$654K · 3,102 trades · 64% WR
4. CryptoSage — +$521K · 982 trades · 72% WR
5. PredictMax — +$487K · 1,567 trades · 66% WR`,

  radar_settings_toggled: (status: string) => `⚙️ *Radar Settings*\n\nNotifications: ${status}\n\nToggle again to change.`,
  radar_enabled: "🟢 Enabled",
  radar_disabled: "🔴 Disabled",

  // ── Signals ──
  signals_title: "🤖 *Signals* — choose signal type:",
  signals_no_active: `🤖 *Active Signals*

No active signals right now. Signals are generated when:

🐋 *Cascade* — 3+ elite wallets agree on a position
🤖 *AI Edge* — AI finds mispricing (model probability vs market price)
📈 *Arbitrage* — price gap between platforms
🧺 *Basket* — 80%+ of a wallet basket agrees

You'll get notified instantly when a signal fires.`,
  signal_whale: "🐋 Whale Signals",
  signal_ai: "🤖 AI Signals",
  signal_arb: "📈 Arbitrage",
  signal_basket: "🧺 Basket Consensus",
  signal_all: "🔥 All Active",
  signal_none: (type: string) => `*${type}*\n\nNo active signals of this type right now. You'll be notified when one fires.`,

  // ── Arbitrage ──
  arb_title: `📈 *Cross-Market Arbitrage*

Scanning Polymarket vs Kalshi vs Azuro...`,
  arb_line: (q: string, p1: string, price1: string, p2: string, price2: string, spread: string) =>
    `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Spread: *${spread}*`,

  // ── Portfolio ──
  portfolio_title: "📁 *Portfolio*",
  portfolio_empty: (balance: string) =>
    `📁 *Portfolio*

💰 Balance: *$${balance} USDC*
📊 Positions: *0*
📈 Total P&L: *$0.00 (0%)*
🏆 Win Rate: *—*

Open a position from /markets or follow a signal from /signals to get started.`,
  portfolio_need_wallet: "You need a wallet first. Use /wallet to create one.",
  btn_positions: "📊 Positions",
  btn_pnl: "📈 P&L Chart",
  portfolio_no_data: "📊 No data yet. Start trading to see your portfolio stats.",

  // ── Language ──
  lang_changed: "✅ Language changed to English",
} as const;

export type Translations = typeof en;
