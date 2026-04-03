import type { Translations } from "./en.js";

export const es: Translations = {
  lang_name: "Español",
  flag: "🇪🇸",

  choose_language: "🌍 Elige tu idioma:",
  welcome: (name: string) =>
    `¡Hola ${name}! 👋

*PolyPredict* — tu ventaja en mercados de predicción.

🐋 *Smart Money Radar* — rastrea billeteras élite, alertas en cascada cuando 3+ ballenas coinciden
🤖 *Analista AI* — IA evalúa probabilidad vs precio de mercado, encuentra errores de precio
📈 *Arbitraje cross-market* — detecta brechas de precio entre Polymarket / Kalshi / Azuro
💰 *Billetera integrada* — no custodial, sin gas, instantánea

Elige cómo trabajar:`,

  menu_markets: "📊 Mercados",
  menu_radar: "🐋 Radar",
  menu_signals: "🤖 Señales",
  menu_arb: "📈 Arbitraje",
  menu_wallet: "💰 Billetera",
  menu_portfolio: "📁 Portafolio",
  menu_open_app: "🚀 Abrir App",
  menu_choose: "*PolyPredict* — tu ventaja en mercados de predicción.\n\nElige una sección:",
  btn_back: "« Volver",

  help: `*PolyPredict — Inteligencia de Mercados de Predicción*

📊 /markets — Explorar mercados por categoría
🐋 /radar — Smart Money Radar y rastreo de ballenas
🤖 /signals — Señales AI y alertas en cascada
📈 /portfolio — Tus posiciones y P&L
💰 /wallet — Depósito, retiro, saldo
🌐 /lang — Cambiar idioma

Toca el botón de abajo para abrir la app completa.`,

  markets_title: "📊 *Mercados* — elige categoría:",
  cat_politics: "🏛 Política",
  cat_crypto: "₿ Cripto",
  cat_sports: "⚽ Deportes",
  cat_science: "🔬 Ciencia",
  cat_entertainment: "🎬 Entretenimiento",
  cat_economics: "💹 Economía",
  cat_trending: "🔥 Tendencias",

  market_detail: (q: string, yes: string, no: string, vol: string, liq: string, whales: number, ai: number) =>
    `📊 *${q}*

YES: *${yes}¢* · NO: *${no}¢*
Volumen: *$${vol}* · Liquidez: *$${liq}*

🐋 *Smart Money:* ${whales} ballenas en largo YES
🤖 *Puntuación AI:* ${ai}% probabilidad

Toca para apostar:`,

  btn_buy_yes: "✅ Comprar YES",
  btn_buy_no: "❌ Comprar NO",
  btn_whales: "🐋 Ballenas",
  btn_ai_analysis: "🤖 Análisis AI",
  btn_full_view: "📊 Vista completa",

  bet_title: (outcome: string, price: string) =>
    `*Comprar ${outcome}* a *${price}*\n\nElige monto o confirma en la app:`,
  bet_confirm_app: "🔐 Confirmar en App",
  bet_cancel: "« Cancelar",
  bet_custom: "Personalizado",
  bet_placed: (q: string, side: string, amount: string, price: string, shares: string) =>
    `✅ *¡Orden colocada!*

Mercado: ${q}
Lado: *${side}*
Monto: *$${amount} USDC*
Precio: *${price}¢*
Acciones: *${shares}*

Rastrea en /portfolio`,

  wallet_title: "💰 *Billetera*",
  wallet_no_wallet: `💰 *Billetera*

Aún no tienes billetera. Se creará automáticamente — sin frase semilla, no custodial, protegida por Turnkey.

Creando billetera...`,
  wallet_created: (address: string) =>
    `✅ *¡Billetera creada!*

Dirección: \`${address}\`
Red: Polygon
Moneda: USDC

Tus claves están en un enclave de hardware — nunca tenemos acceso.`,
  wallet_info: (address: string, balance: string) =>
    `💰 *Billetera*

Dirección: \`${address}\`
Saldo: *$${balance} USDC*
Red: Polygon`,
  btn_deposit: "📥 Depositar",
  btn_withdraw: "📤 Retirar",
  btn_refresh: "🔄 Actualizar",
  btn_history: "📜 Historial",
  wallet_deposit_info: (address: string) =>
    `📥 *Depositar USDC*

Envía *USDC* en *Polygon* a:
\`${address}\`

⚠️ Solo envía USDC en la red Polygon. Otros tokens o redes pueden causar pérdida de fondos.`,
  wallet_withdraw_prompt: "📤 *Retirar*\n\nEnvía la dirección de destino (Polygon USDC):",
  wallet_no_history: "📜 *Historial de transacciones*\n\nSin transacciones aún.",
  wallet_create_first: "Primero crea una billetera con /wallet",

  radar_title: (status: string) =>
    `🐋 *Smart Money Radar*

Rastrea billeteras élite en tiempo real.

🔔 *Alertas en cascada* — se activa cuando 3+ billeteras top entran en la misma posición en 90 min
🧺 *Canastas* — grupos por experiencia (política, cripto, deportes)
📊 *Ranking* — mejores por P&L y win rate

Estado: ${status}`,
  radar_active: "🟢 Activo",
  radar_inactive: "🔴 Inactivo",
  btn_top_whales: "🐋 Top Ballenas",
  btn_baskets: "🧺 Canastas",
  btn_cascades: "🔔 Alertas Cascada",
  btn_leaderboard: "📊 Ranking",
  btn_settings: "⚙️ Ajustes",

  radar_whales_title: "🐋 *Top Ballenas (30d)*",
  radar_whale_line: (i: number, label: string, pnl: string, wr: number, score: number) =>
    `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Punt: ${score}`,
  radar_whales_footer: "\nToca para rastrear:",

  radar_baskets_title: `🧺 *Canastas de Billeteras*

Canastas pre-construidas de billeteras expertas por tema:`,
  radar_basket_line: (emoji: string, name: string, wallets: number, consensus: number, wr: number) =>
    `${emoji} *${name}* — ${wallets} billeteras · Consenso: ${consensus}% · WR prom: ${wr}%`,
  radar_baskets_footer: "\nLa señal se activa cuando 80%+ de la canasta está de acuerdo.",

  radar_cascades_title: `🔔 *Alertas en Cascada*

Se activa cuando 3+ billeteras élite entran independientemente en la misma posición en 90 minutos.`,
  radar_cascade_strong: "⚡ *FUERTE*",
  radar_cascade_medium: "⚡ *MEDIO*",
  radar_cascade_accuracy: "\nHistóricamente 73% más preciso que señales de una sola billetera.",

  radar_leaderboard: `📊 *Ranking — Histórico*

🥇 Fredi9999 — +$1.2M · 2,847 trades · 71% WR
🥈 GCR_Poly — +$890K · 1,203 trades · 68% WR
🥉 WhaleAlert — +$654K · 3,102 trades · 64% WR
4. CryptoSage — +$521K · 982 trades · 72% WR
5. PredictMax — +$487K · 1,567 trades · 66% WR`,

  radar_settings_toggled: (status: string) => `⚙️ *Ajustes del Radar*\n\nNotificaciones: ${status}\n\nToca de nuevo para cambiar.`,
  radar_enabled: "🟢 Activado",
  radar_disabled: "🔴 Desactivado",

  signals_title: "🤖 *Señales* — elige tipo:",
  signals_no_active: `🤖 *Señales Activas*

Sin señales activas. Se generan cuando:

🐋 *Cascada* — 3+ billeteras élite coinciden
🤖 *AI Edge* — AI encuentra error de precio
📈 *Arbitraje* — brecha de precio entre plataformas
🧺 *Canasta* — 80%+ de la canasta coincide

Recibirás notificación instantánea.`,
  signal_whale: "🐋 Señales Ballena",
  signal_ai: "🤖 Señales AI",
  signal_arb: "📈 Arbitraje",
  signal_basket: "🧺 Consenso Canasta",
  signal_all: "🔥 Todas Activas",
  signal_none: (type: string) => `*${type}*\n\nSin señales activas de este tipo. Te notificaremos cuando aparezcan.`,

  arb_title: `📈 *Arbitraje Cross-Market*

Escaneando Polymarket vs Kalshi vs Azuro...`,
  arb_line: (q: string, p1: string, price1: string, p2: string, price2: string, spread: string) =>
    `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Spread: *${spread}*`,

  portfolio_title: "📁 *Portafolio*",
  portfolio_empty: (balance: string) =>
    `📁 *Portafolio*

💰 Saldo: *$${balance} USDC*
📊 Posiciones: *0*
📈 P&L Total: *$0.00 (0%)*
🏆 Win Rate: *—*

Abre una posición en /markets o sigue una señal de /signals.`,
  portfolio_need_wallet: "Necesitas una billetera primero. Usa /wallet para crear una.",
  btn_positions: "📊 Posiciones",
  btn_pnl: "📈 Gráfico P&L",
  portfolio_no_data: "📊 Sin datos aún. Empieza a operar para ver estadísticas.",

  lang_changed: "✅ Idioma cambiado a Español",
};
