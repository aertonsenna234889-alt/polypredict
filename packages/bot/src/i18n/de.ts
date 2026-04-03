import type { Translations } from "./en.js";

export const de: Translations = {
  lang_name: "Deutsch",
  flag: "🇩🇪",

  choose_language: "🌍 Wähle deine Sprache:",
  welcome: (name) =>
    `Hallo ${name}! 👋

*PolyPredict* — dein Vorteil auf Prognosemärkten.

🐋 *Smart Money Radar* — verfolge Elite-Wallets, Kaskaden-Alerts wenn 3+ Wale übereinstimmen
🤖 *KI-Analyst* — KI bewertet Wahrscheinlichkeit vs Marktpreis, findet Fehlbewertungen
📈 *Cross-Market Arbitrage* — Preisunterschiede zwischen Polymarket / Kalshi / Azuro
💰 *Integriertes Wallet* — non-custodial, gaslos, sofort

Wähle wie du arbeiten möchtest:`,

  menu_markets: "📊 Märkte",
  menu_radar: "🐋 Radar",
  menu_signals: "🤖 Signale",
  menu_arb: "📈 Arbitrage",
  menu_wallet: "💰 Wallet",
  menu_portfolio: "📁 Portfolio",
  menu_open_app: "🚀 App öffnen",
  menu_choose: "*PolyPredict* — dein Vorteil auf Prognosemärkten.\n\nWähle einen Bereich:",
  btn_back: "« Zurück",

  help: "*PolyPredict — Prognosemarkt-Intelligence*\n\n📊 /markets — Märkte nach Kategorie\n🐋 /radar — Smart Money Radar & Wal-Tracking\n🤖 /signals — KI-Signale & Kaskaden-Alerts\n📈 /portfolio — Positionen & P&L\n💰 /wallet — Einzahlung, Auszahlung, Guthaben\n🌐 /lang — Sprache ändern",

  markets_title: "📊 *Märkte* — wähle eine Kategorie:",
  cat_politics: "🏛 Politik",
  cat_crypto: "₿ Krypto",
  cat_sports: "⚽ Sport",
  cat_science: "🔬 Wissenschaft",
  cat_entertainment: "🎬 Unterhaltung",
  cat_economics: "💹 Wirtschaft",
  cat_trending: "🔥 Trending",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nVolumen: *$${vol}* · Liquidität: *$${liq}*\n\n🐋 *Smart Money:* ${whales} Wale long YES\n🤖 *KI-Score:* ${ai}% Wahrscheinlichkeit\n\nTippe um zu wetten:`,

  btn_buy_yes: "✅ YES kaufen",
  btn_buy_no: "❌ NO kaufen",
  btn_whales: "🐋 Wale",
  btn_ai_analysis: "🤖 KI-Analyse",
  btn_full_view: "📊 Vollansicht",

  bet_title: (outcome, price) => `*${outcome} kaufen* zu *${price}*\n\nBetrag wählen oder in der App bestätigen:`,
  bet_confirm_app: "🔐 In App bestätigen",
  bet_cancel: "« Abbrechen",
  bet_custom: "Eigener Betrag",
  bet_placed: (q, side, amount, price, shares) => `✅ *Order platziert!*\n\nMarkt: ${q}\nSeite: *${side}*\nBetrag: *$${amount} USDC*\nPreis: *${price}¢*\nAnteile: *${shares}*\n\nVerfolge in /portfolio`,

  wallet_title: "💰 *Wallet*",
  wallet_no_wallet: "💰 *Wallet*\n\nDu hast noch kein Wallet. Es wird automatisch erstellt — keine Seed-Phrase, non-custodial, gesichert durch Turnkey.\n\nWallet wird erstellt...",
  wallet_created: (address) => `✅ *Wallet erstellt!*\n\nAdresse: \`${address}\`\nNetzwerk: Polygon\nWährung: USDC\n\nDeine Schlüssel sind in einer Hardware-Enklave gesichert.`,
  wallet_info: (address, balance) => `💰 *Wallet*\n\nAdresse: \`${address}\`\nGuthaben: *$${balance} USDC*\nNetzwerk: Polygon`,
  btn_deposit: "📥 Einzahlen",
  btn_withdraw: "📤 Auszahlen",
  btn_refresh: "🔄 Aktualisieren",
  btn_history: "📜 Verlauf",
  wallet_deposit_info: (address) => `📥 *USDC einzahlen*\n\nSende *USDC* auf *Polygon* an:\n\`${address}\`\n\n⚠️ Nur USDC im Polygon-Netzwerk senden.`,
  wallet_withdraw_prompt: "📤 *Auszahlen*\n\nSende die Zieladresse (Polygon USDC):",
  wallet_no_history: "📜 *Transaktionsverlauf*\n\nKeine Transaktionen.",
  wallet_create_first: "Erstelle zuerst ein Wallet mit /wallet",

  radar_title: (status) => `🐋 *Smart Money Radar*\n\nVerfolge Elite-Wallets in Echtzeit.\n\n🔔 *Kaskaden-Alerts* — löst aus wenn 3+ Top-Wallets in 90 Min dieselbe Position eingehen\n🧺 *Körbe* — Wallet-Gruppen nach Expertise\n📊 *Rangliste* — Top nach P&L & Win Rate\n\nStatus: ${status}`,
  radar_active: "🟢 Aktiv",
  radar_inactive: "🔴 Inaktiv",
  btn_top_whales: "🐋 Top Wale",
  btn_baskets: "🧺 Körbe",
  btn_cascades: "🔔 Kaskaden-Alerts",
  btn_leaderboard: "📊 Rangliste",
  btn_settings: "⚙️ Einstellungen",

  radar_whales_title: "🐋 *Top Wale (30T)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Score: ${score}`,
  radar_whales_footer: "\nTippe zum Verfolgen:",
  radar_baskets_title: "🧺 *Wallet-Körbe*\n\nVorgefertigte Körbe von Experten-Wallets:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} Wallets · Konsens: ${consensus}% · Ø WR: ${wr}%`,
  radar_baskets_footer: "\nSignal löst aus wenn 80%+ des Korbes übereinstimmen.",
  radar_cascades_title: "🔔 *Kaskaden-Alerts*\n\nEine Kaskade löst aus wenn 3+ Elite-Wallets unabhängig dieselbe Position in 90 Min eingehen.",
  radar_cascade_strong: "⚡ *STARK*",
  radar_cascade_medium: "⚡ *MITTEL*",
  radar_cascade_accuracy: "\nHistorisch 73% genauer als Einzelwallet-Signale.",
  radar_leaderboard: "📊 *Rangliste — Gesamt*\n\n🥇 Fredi9999 — +$1.2M · 2.847 Trades · 71% WR\n🥈 GCR_Poly — +$890K · 1.203 Trades · 68% WR\n🥉 WhaleAlert — +$654K · 3.102 Trades · 64% WR\n4. CryptoSage — +$521K · 982 Trades · 72% WR\n5. PredictMax — +$487K · 1.567 Trades · 66% WR",
  radar_settings_toggled: (status) => `⚙️ *Radar-Einstellungen*\n\nBenachrichtigungen: ${status}\n\nErneut tippen zum Ändern.`,
  radar_enabled: "🟢 Aktiviert",
  radar_disabled: "🔴 Deaktiviert",

  signals_title: "🤖 *Signale* — wähle den Typ:",
  signals_no_active: "🤖 *Aktive Signale*\n\nKeine aktiven Signale. Signale werden generiert wenn:\n\n🐋 *Kaskade* — 3+ Elite-Wallets übereinstimmen\n🤖 *KI Edge* — KI findet Fehlbewertung\n📈 *Arbitrage* — Preisunterschied zwischen Plattformen\n🧺 *Korb* — 80%+ des Korbes übereinstimmt\n\nDu wirst sofort benachrichtigt.",
  signal_whale: "🐋 Wal-Signale",
  signal_ai: "🤖 KI-Signale",
  signal_arb: "📈 Arbitrage",
  signal_basket: "🧺 Korb-Konsens",
  signal_all: "🔥 Alle Aktiven",
  signal_none: (type) => `*${type}*\n\nKeine aktiven Signale dieses Typs. Du wirst benachrichtigt.`,

  arb_title: "📈 *Cross-Market Arbitrage*\n\nScanne Polymarket vs Kalshi vs Azuro...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Spread: *${spread}*`,

  portfolio_title: "📁 *Portfolio*",
  portfolio_empty: (balance) => `📁 *Portfolio*\n\n💰 Guthaben: *$${balance} USDC*\n📊 Positionen: *0*\n📈 Gesamt P&L: *$0.00 (0%)*\n🏆 Win Rate: *—*\n\nÖffne eine Position über /markets oder folge einem Signal aus /signals.`,
  portfolio_need_wallet: "Du brauchst zuerst ein Wallet. Erstelle eines mit /wallet.",
  btn_positions: "📊 Positionen",
  btn_pnl: "📈 P&L-Grafik",
  portfolio_no_data: "📊 Noch keine Daten. Starte den Handel um Statistiken zu sehen.",

  lang_changed: "✅ Sprache auf Deutsch geändert",
};
