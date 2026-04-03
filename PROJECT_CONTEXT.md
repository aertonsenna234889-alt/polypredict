# PolyPredict — Project Context

## What is this
Telegram bot + Mini App for prediction market intelligence (Polymarket, Kalshi, Azuro).
Copy-trading, whale tracking, AI signals, cross-market arbitrage, built-in non-custodial wallet.

## Founder
- **Name:** Aerton Senna
- **GitHub:** aertonsenna234889-alt
- **Polymarket wallet:** 0xf9885da150836378ce5689395ff4d194683fd63b
- **Bot wallet:** 0x3fa1d0aB2D5da41c0C4366ce729cE315C4DBaa17

## Architecture

### Monorepo structure
```
packages/
  shared/     — Types, constants, leaderboard data (TypeScript)
  bot/        — Telegram bot (grammY, TypeScript)
  server/     — API server (Express, SQLite via Drizzle ORM)
  mini-app/   — Telegram Mini App (React, Vite)
```

### Tech Stack
- **Bot framework:** grammY (TypeScript)
- **Server:** Express.js
- **Database:** SQLite (better-sqlite3 + Drizzle ORM)
- **Mini App:** React 18 + Vite + React Router
- **Styling:** Custom CSS, dark theme, CSS variables
- **Process manager:** PM2
- **Hosting Mini App:** GitHub Pages

### Key design decisions
- **Single UI message** — bot edits ONE message instead of creating chat history (uiMessage() in context.ts)
- **Persistent sessions** — saved to data/sessions.json, survives bot restarts
- **14 languages** — i18n system in packages/bot/src/i18n/ (en, ru, zh, es, fr, de, pt, tr, ja, ko, ar, hi, id, uk)
- **Language selection on first /start** — stored in session, persists
- **Commands delete themselves** — user's /command message is deleted, only bot UI message updates

## Infrastructure

### VPS (Production)
- **IP:** 72.56.242.7
- **User:** root
- **OS:** Ubuntu 24.04, 2 CPU, 3.8GB RAM, 48GB disk
- **Project path:** /opt/polypredict
- **PM2 processes:** polypredict-bot, polypredict-server
- **PM2 autostart:** configured via systemd
- **Database:** /opt/polypredict/data/polypredict.db
- **Sessions:** /opt/polypredict/data/sessions.json
- **Server port:** 3001

### GitHub
- **Repo:** https://github.com/aertonsenna234889-alt/polypredict
- **Visibility:** Public (needed for free GitHub Pages)
- **Main branch:** main (source code)
- **gh-pages branch:** Mini App static files
- **Mini App URL:** https://aertonsenna234889-alt.github.io/polypredict
- **PAT:** stored locally, not in repo

### Telegram Bot
- **Username:** @PolyPredicting_bot
- **Token:** stored in .env, not in repo
- **Menu Button:** configured to open Mini App
- **Commands registered:** start, markets, radar, signals, portfolio, wallet, about, help, lang

## Bot Features (implemented)

### Commands
- /start — language picker (first time) or welcome with live signals + top traders
- /markets — browse by category (politics, crypto, sports, economics, science, entertainment)
- /radar — whale tracking, baskets, cascades, leaderboard
- /signals — whale signals, AI signals, arbitrage, basket consensus, subscribe to alerts
- /wallet — real on-chain balance (POL + USDC via Polygon RPC drpc.org)
- /portfolio — positions & P&L
- /about — founder story on all 14 languages
- /help — command reference
- /lang — change language

### Market Data (hardcoded, realistic)
- 18 markets across all categories with realistic prices/volumes
- Market detail shows: YES/NO price, volume, liquidity, whale count, AI score
- Betting flow: choose YES/NO → pick amount → confirmation

### Radar
- 8 top whales with P&L, win rate, score (Theo4, Fredi9999, GCRClassic, Domer, PredictoorBot, etc.)
- Clickable whales → show open positions, recent trades
- 4 wallet baskets (Politics, Crypto, Sports, Economics) with consensus positions
- Clickable baskets → show members, consensus %, current positions
- 3 cascade alerts with strength indicators
- Top 50 leaderboard (CryptoKing_92 $24.8K to SmartEntry $7.4K)

### Signals (all types show data)
- Whale: 3 active signals from top traders
- AI Edge: 4 signals with probability vs market price, edge calculation
- Arbitrage: 4 cross-market opportunities with spreads
- Basket: 3 consensus positions from wallet baskets
- All: summary of 12 total signals
- Subscribe button for notifications

### Wallet
- Real on-chain balance query via Polygon RPC (drpc.org)
- Shows POL + USDC.e balance
- Address: 0x3fa1d0aB2D5da41c0C4366ce729cE315C4DBaa17
- Deposit/withdraw UI

## Mini App Features

### Pages
- Home — dashboard with wallet card, live signals, top traders, hot markets, stats
- Markets — category tabs, market cards with price bars
- Market Detail — YES/NO buttons, amount picker, share calculator
- Wallet — balance, deposit form (copy address), withdraw form
- Portfolio — positions, P&L, stats grid
- Radar — 3 tabs: whales, baskets, cascades (clickable to markets)
- Signals — filter by type, signal cards with confidence dots
- About — founder story, principles ($0 fee, open source, works anywhere), links
- Leaderboard — top 50 traders with PnL, WR, trades

### Design
- Dark theme (#0a0a0f background)
- CSS variables for colors (--accent: #6c5ce7, --green, --red, --yellow, --blue)
- Bottom navigation bar (Home, Markets, Radar, Signals, Wallet)
- Card-based layout, badge system, price bars
- basename="/polypredict" for GitHub Pages

## Database Schema (SQLite)
- users — telegram_id, username, first_name, lang, wallet_address, turnkey IDs
- transactions — user_id, type, amount, currency, tx_hash, status
- positions — user_id, market_id, outcome, shares, avg_price, pnl
- whales — address, label, tags (JSON), pnl, win_rate, score
- baskets — name, category, wallet_addresses (JSON), consensus_threshold
- signals — type, market_id, outcome, confidence, sources (JSON)
- cascades — market_id, outcome, whale_addresses (JSON), strength
- user_subscriptions — user_id, type, target_id

Seeded with: 8 whales, 4 baskets, 3 signals, 1 cascade

## Security Audit (completed)
- No secrets in git history (verified)
- GitHub PAT removed from git remote URL
- .env, .db, sessions.json in .gitignore
- CORS restricted to Mini App URL + localhost
- Callback regex fixed ([^:]+ instead of .+)
- uiMessage handles "message not modified" error
- Input validation (limit clamped 1-100)
- Clipboard with .catch()

## Deploy Commands
```bash
# Deploy bot+server to VPS
cd c:/PROJECT
tar --exclude='node_modules' --exclude='.git' --exclude='data' --exclude='.env' --exclude='*.db*' --exclude='sessions.json' -czf /tmp/polypredict.tar.gz .
scp /tmp/polypredict.tar.gz root@72.56.242.7:/opt/polypredict.tar.gz
ssh root@72.56.242.7 "cd /opt/polypredict && pm2 stop all && tar -xzf /opt/polypredict.tar.gz && rm polypredict.tar.gz && npm install && npx tsc -p packages/shared/tsconfig.json && pm2 restart all"

# Deploy Mini App to GitHub Pages
# Build locally, then push to gh-pages branch
npx vite build packages/mini-app
# Copy dist to temp, init git, force push to gh-pages

# VPS management
ssh root@72.56.242.7
pm2 status
pm2 logs
pm2 restart all
```

## What's NOT implemented yet (TODO for future)
- Real Polymarket API integration (currently hardcoded data)
- Turnkey wallet integration (real non-custodial wallet creation)
- Account Abstraction (ERC-4337, gasless transactions, paymasters)
- Real-time WebSocket whale tracking
- Actual trade execution on Polymarket
- Persistent session in database (currently file-based)
- Telegram initData verification on API routes
- Custom amount flow in betting (dead end currently)
- Real AI probability calculation (LLM integration)
- Push notifications for signals
- Cross-chain support
