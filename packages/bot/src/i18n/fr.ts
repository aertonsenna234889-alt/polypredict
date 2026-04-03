import type { Translations } from "./en.js";

export const fr: Translations = {
  lang_name: "Français",
  flag: "🇫🇷",

  choose_language: "🌍 Choisissez votre langue :",
  welcome: (name: string) =>
    `Salut ${name} ! 👋

*PolyPredict* — votre avantage sur les marchés prédictifs.

🐋 *Smart Money Radar* — suivez les portefeuilles d'élite, alertes cascade quand 3+ baleines s'alignent
🤖 *Analyste IA* — évalue la probabilité vs le prix du marché, détecte les erreurs de prix
📈 *Arbitrage cross-market* — écarts de prix entre Polymarket / Kalshi / Azuro
💰 *Portefeuille intégré* — non-custodial, sans gas, instantané

Choisissez comment travailler :`,

  menu_markets: "📊 Marchés",
  menu_radar: "🐋 Radar",
  menu_signals: "🤖 Signaux",
  menu_arb: "📈 Arbitrage",
  menu_wallet: "💰 Portefeuille",
  menu_portfolio: "📁 Portfolio",
  menu_open_app: "🚀 Ouvrir l'App",
  menu_choose: "*PolyPredict* — votre avantage sur les marchés prédictifs.\n\nChoisissez une section :",
  btn_back: "« Retour",

  help: `*PolyPredict — Intelligence des Marchés Prédictifs*

📊 /markets — Parcourir les marchés par catégorie
🐋 /radar — Smart Money Radar et suivi des baleines
🤖 /signals — Signaux IA et alertes cascade
📈 /portfolio — Vos positions et P&L
💰 /wallet — Dépôt, retrait, solde
🌐 /lang — Changer de langue

Appuyez sur le bouton ci-dessous pour ouvrir l'app.`,

  markets_title: "📊 *Marchés* — choisissez une catégorie :",
  cat_politics: "🏛 Politique",
  cat_crypto: "₿ Crypto",
  cat_sports: "⚽ Sports",
  cat_science: "🔬 Science",
  cat_entertainment: "🎬 Divertissement",
  cat_economics: "💹 Économie",
  cat_trending: "🔥 Tendances",

  market_detail: (q, yes, no, vol, liq, whales, ai) =>
    `📊 *${q}*

YES : *${yes}¢* · NO : *${no}¢*
Volume : *$${vol}* · Liquidité : *$${liq}*

🐋 *Smart Money :* ${whales} baleines long YES
🤖 *Score IA :* ${ai}% probabilité

Appuyez pour parier :`,

  btn_buy_yes: "✅ Acheter YES",
  btn_buy_no: "❌ Acheter NO",
  btn_whales: "🐋 Baleines",
  btn_ai_analysis: "🤖 Analyse IA",
  btn_full_view: "📊 Vue complète",

  bet_title: (outcome, price) => `*Acheter ${outcome}* à *${price}*\n\nChoisissez le montant ou confirmez dans l'app :`,
  bet_confirm_app: "🔐 Confirmer dans l'App",
  bet_cancel: "« Annuler",
  bet_custom: "Personnalisé",
  bet_placed: (q, side, amount, price, shares) =>
    `✅ *Ordre placé !*\n\nMarché : ${q}\nCôté : *${side}*\nMontant : *$${amount} USDC*\nPrix : *${price}¢*\nParts : *${shares}*\n\nSuivez dans /portfolio`,

  wallet_title: "💰 *Portefeuille*",
  wallet_no_wallet: `💰 *Portefeuille*\n\nVous n'avez pas encore de portefeuille. Il sera créé automatiquement — sans phrase de récupération, non-custodial, sécurisé par Turnkey.\n\nCréation en cours...`,
  wallet_created: (address) => `✅ *Portefeuille créé !*\n\nAdresse : \`${address}\`\nRéseau : Polygon\nDevise : USDC\n\nVos clés sont dans une enclave matérielle — nous n'y avons jamais accès.`,
  wallet_info: (address, balance) => `💰 *Portefeuille*\n\nAdresse : \`${address}\`\nSolde : *$${balance} USDC*\nRéseau : Polygon`,
  btn_deposit: "📥 Déposer",
  btn_withdraw: "📤 Retirer",
  btn_refresh: "🔄 Actualiser",
  btn_history: "📜 Historique",
  wallet_deposit_info: (address) => `📥 *Déposer USDC*\n\nEnvoyez *USDC* sur *Polygon* à :\n\`${address}\`\n\n⚠️ Envoyez uniquement USDC sur le réseau Polygon.`,
  wallet_withdraw_prompt: "📤 *Retirer*\n\nEnvoyez l'adresse de destination (Polygon USDC) :",
  wallet_no_history: "📜 *Historique*\n\nAucune transaction.",
  wallet_create_first: "Créez d'abord un portefeuille avec /wallet",

  radar_title: (status) => `🐋 *Smart Money Radar*\n\nSuivez les portefeuilles d'élite en temps réel.\n\n🔔 *Alertes cascade* — se déclenche quand 3+ top portefeuilles entrent dans la même position en 90 min\n🧺 *Paniers* — groupes par expertise (politique, crypto, sport)\n📊 *Classement* — meilleurs par P&L et win rate\n\nStatut : ${status}`,
  radar_active: "🟢 Actif",
  radar_inactive: "🔴 Inactif",
  btn_top_whales: "🐋 Top Baleines",
  btn_baskets: "🧺 Paniers",
  btn_cascades: "🔔 Alertes Cascade",
  btn_leaderboard: "📊 Classement",
  btn_settings: "⚙️ Paramètres",

  radar_whales_title: "🐋 *Top Baleines (30j)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L : +$${pnl} · WR : ${wr}% · Score : ${score}`,
  radar_whales_footer: "\nAppuyez pour suivre :",
  radar_baskets_title: "🧺 *Paniers de Portefeuilles*\n\nPaniers pré-construits de portefeuilles experts par thème :",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} portefeuilles · Consensus : ${consensus}% · WR moy : ${wr}%`,
  radar_baskets_footer: "\nLe signal se déclenche quand 80%+ du panier est d'accord.",
  radar_cascades_title: "🔔 *Alertes Cascade*\n\nUne cascade se déclenche quand 3+ portefeuilles d'élite entrent indépendamment dans la même position en 90 minutes.",
  radar_cascade_strong: "⚡ *FORT*",
  radar_cascade_medium: "⚡ *MOYEN*",
  radar_cascade_accuracy: "\nHistoriquement 73% plus précis que les signaux d'un seul portefeuille.",
  radar_leaderboard: "📊 *Classement — Historique*\n\n🥇 Fredi9999 — +$1.2M · 2,847 trades · 71% WR\n🥈 GCR_Poly — +$890K · 1,203 trades · 68% WR\n🥉 WhaleAlert — +$654K · 3,102 trades · 64% WR\n4. CryptoSage — +$521K · 982 trades · 72% WR\n5. PredictMax — +$487K · 1,567 trades · 66% WR",
  radar_settings_toggled: (status) => `⚙️ *Paramètres Radar*\n\nNotifications : ${status}\n\nAppuyez à nouveau pour changer.`,
  radar_enabled: "🟢 Activé",
  radar_disabled: "🔴 Désactivé",

  signals_title: "🤖 *Signaux* — choisissez le type :",
  signals_no_active: "🤖 *Signaux Actifs*\n\nAucun signal actif. Les signaux sont générés quand :\n\n🐋 *Cascade* — 3+ portefeuilles d'élite s'alignent\n🤖 *AI Edge* — l'IA trouve une erreur de prix\n📈 *Arbitrage* — écart de prix entre plateformes\n🧺 *Panier* — 80%+ du panier est d'accord\n\nVous serez notifié instantanément.",
  signal_whale: "🐋 Signaux Baleines",
  signal_ai: "🤖 Signaux IA",
  signal_arb: "📈 Arbitrage",
  signal_basket: "🧺 Consensus Panier",
  signal_all: "🔥 Tous Actifs",
  signal_none: (type) => `*${type}*\n\nAucun signal actif de ce type. Vous serez notifié.`,

  arb_title: "📈 *Arbitrage Cross-Market*\n\nScan Polymarket vs Kalshi vs Azuro...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES : *${price1}¢* · ${p2} YES : *${price2}¢*\n   Écart : *${spread}*`,

  portfolio_title: "📁 *Portfolio*",
  portfolio_empty: (balance) => `📁 *Portfolio*\n\n💰 Solde : *$${balance} USDC*\n📊 Positions : *0*\n📈 P&L Total : *$0.00 (0%)*\n🏆 Win Rate : *—*\n\nOuvrez une position depuis /markets ou suivez un signal depuis /signals.`,
  portfolio_need_wallet: "Vous avez besoin d'un portefeuille. Utilisez /wallet pour en créer un.",
  btn_positions: "📊 Positions",
  btn_pnl: "📈 Graphique P&L",
  portfolio_no_data: "📊 Pas encore de données. Commencez à trader pour voir vos statistiques.",

  lang_changed: "✅ Langue changée en Français",
};
