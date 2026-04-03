import type { Translations } from "./en.js";

export const uk: Translations = {
  lang_name: "Українська", flag: "🇺🇦",
  choose_language: "🌍 Оберіть мову:",
  welcome: (name) => `Привіт, ${name}! 👋\n\n*PolyPredict* — твоя перевага на ринках передбачень.\n\n🐋 *Smart Money Radar* — відстежуй елітні гаманці, каскадні алерти коли 3+ кити погоджуються\n🤖 *AI Аналітик* — ШІ оцінює ймовірність vs ринкову ціну, знаходить mispricing\n📈 *Крос-маркет арбітраж* — розбіжності цін між Polymarket / Kalshi / Azuro\n💰 *Вбудований гаманець* — некастодіальний, без газу, миттєвий\n\nОбери як працювати:`,

  menu_markets: "📊 Ринки", menu_radar: "🐋 Радар", menu_signals: "🤖 Сигнали", menu_arb: "📈 Арбітраж", menu_wallet: "💰 Гаманець", menu_portfolio: "📁 Портфель", menu_open_app: "🚀 Відкрити додаток",
  menu_choose: "*PolyPredict* — твоя перевага на ринках передбачень.\n\nОбери розділ:", btn_back: "« Назад",

  help: "*PolyPredict — Аналітика ринків передбачень*\n\n📊 /markets — Ринки за категоріями\n🐋 /radar — Smart Money Радар\n🤖 /signals — AI сигнали\n📈 /portfolio — Позиції та P&L\n💰 /wallet — Депозит, вивід, баланс\n🌐 /lang — Змінити мову",

  markets_title: "📊 *Ринки* — обери категорію:",
  cat_politics: "🏛 Політика", cat_crypto: "₿ Крипто", cat_sports: "⚽ Спорт", cat_science: "🔬 Наука", cat_entertainment: "🎬 Розваги", cat_economics: "💹 Економіка", cat_trending: "🔥 Трендові",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nОб'єм: *$${vol}* · Ліквідність: *$${liq}*\n\n🐋 *Smart Money:* ${whales} китів у лонзі YES\n🤖 *AI Оцінка:* ${ai}% ймовірність\n\nНатисни щоб зробити ставку:`,

  btn_buy_yes: "✅ Купити YES", btn_buy_no: "❌ Купити NO", btn_whales: "🐋 Кити", btn_ai_analysis: "🤖 AI Аналіз", btn_full_view: "📊 Детальніше",
  bet_title: (outcome, price) => `*Купити ${outcome}* за *${price}*\n\nОбери суму або підтверди в додатку:`,
  bet_confirm_app: "🔐 Підтвердити в додатку", bet_cancel: "« Скасувати", bet_custom: "Своя сума",
  bet_placed: (q, side, amount, price, shares) => `✅ *Ордер розміщено!*\n\nРинок: ${q}\nСторона: *${side}*\nСума: *$${amount} USDC*\nЦіна: *${price}¢*\nШери: *${shares}*\n\nВідстежуй в /portfolio`,

  wallet_title: "💰 *Гаманець*",
  wallet_no_wallet: "💰 *Гаманець*\n\nУ тебе ще немає гаманця. Він буде створений автоматично — без seed-фрази, некастодіальний, захищений Turnkey.\n\nСтворюю гаманець...",
  wallet_created: (address) => `✅ *Гаманець створено!*\n\nАдреса: \`${address}\`\nМережа: Polygon\nВалюта: USDC\n\nКлючі зберігаються в апаратному енклейві — ми ніколи не маємо до них доступу.`,
  wallet_info: (address, balance) => `💰 *Гаманець*\n\nАдреса: \`${address}\`\nБаланс: *$${balance} USDC*\nМережа: Polygon`,
  btn_deposit: "📥 Депозит", btn_withdraw: "📤 Вивід", btn_refresh: "🔄 Оновити", btn_history: "📜 Історія",
  wallet_deposit_info: (address) => `📥 *Депозит USDC*\n\nВідправ *USDC* в мережі *Polygon* на:\n\`${address}\`\n\n⚠️ Відправляй тільки USDC в мережі Polygon.`,
  wallet_withdraw_prompt: "📤 *Вивід*\n\nВідправ адресу отримувача (Polygon USDC):",
  wallet_no_history: "📜 *Історія транзакцій*\n\nТранзакцій поки немає.",
  wallet_create_first: "Спочатку створи гаманець через /wallet",

  radar_title: (status) => `🐋 *Smart Money Радар*\n\nВідстежуй елітні гаманці в реальному часі.\n\n🔔 *Каскадні алерти* — спрацьовують коли 3+ топ-гаманців входять в одну позицію за 90 хвилин\n🧺 *Кошики* — групи гаманців за експертизою\n📊 *Лідерборд* — найкращі за P&L та win rate\n\nСтатус: ${status}`,
  radar_active: "🟢 Активний", radar_inactive: "🔴 Неактивний",
  btn_top_whales: "🐋 Топ кити", btn_baskets: "🧺 Кошики", btn_cascades: "🔔 Каскадні алерти", btn_leaderboard: "📊 Лідерборд", btn_settings: "⚙️ Налаштування",
  radar_whales_title: "🐋 *Топ кити (30д)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Score: ${score}`,
  radar_whales_footer: "\nНатисни щоб відстежувати:",
  radar_baskets_title: "🧺 *Кошики гаманців*\n\nГотові кошики експертних гаманців за темами:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} гаманців · Консенсус: ${consensus}% · Сер. WR: ${wr}%`,
  radar_baskets_footer: "\nСигнал спрацьовує коли 80%+ кошика згодні.",
  radar_cascades_title: "🔔 *Каскадні алерти*\n\nКаскад спрацьовує коли 3+ елітних гаманців незалежно входять в одну позицію за 90 хвилин.",
  radar_cascade_strong: "⚡ *СИЛЬНИЙ*", radar_cascade_medium: "⚡ *СЕРЕДНІЙ*",
  radar_cascade_accuracy: "\nІсторично на 73% точніше сигналів від одного гаманця.",
  radar_leaderboard: "📊 *Лідерборд — За весь час*\n\n🥇 Fredi9999 — +$1.2M · 2,847 угод · 71% WR\n🥈 GCR_Poly — +$890K · 1,203 угод · 68% WR\n🥉 WhaleAlert — +$654K · 3,102 угод · 64% WR\n4. CryptoSage — +$521K · 982 угод · 72% WR\n5. PredictMax — +$487K · 1,567 угод · 66% WR",
  radar_settings_toggled: (status) => `⚙️ *Налаштування радара*\n\nСповіщення: ${status}\n\nНатисни ще раз щоб переключити.`,
  radar_enabled: "🟢 Увімкнено", radar_disabled: "🔴 Вимкнено",

  signals_title: "🤖 *Сигнали* — обери тип:",
  signals_no_active: "🤖 *Активні сигнали*\n\nАктивних сигналів немає. Сигнали генеруються коли:\n\n🐋 *Каскад* — 3+ елітних гаманців згодні\n🤖 *AI Edge* — ШІ знаходить mispricing\n📈 *Арбітраж* — різниця цін між платформами\n🧺 *Кошик* — 80%+ кошика згодні\n\nТи отримаєш сповіщення миттєво.",
  signal_whale: "🐋 Сигнали китів", signal_ai: "🤖 AI Сигнали", signal_arb: "📈 Арбітраж", signal_basket: "🧺 Консенсус кошиків", signal_all: "🔥 Всі активні",
  signal_none: (type) => `*${type}*\n\nНемає активних сигналів цього типу. Сповістимо коли з'являться.`,

  arb_title: "📈 *Крос-маркет арбітраж*\n\nСканую Polymarket vs Kalshi vs Azuro...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Спред: *${spread}*`,

  portfolio_title: "📁 *Портфель*",
  portfolio_empty: (balance) => `📁 *Портфель*\n\n💰 Баланс: *$${balance} USDC*\n📊 Позиції: *0*\n📈 Загальний P&L: *$0.00 (0%)*\n🏆 Win Rate: *—*\n\nВідкрий позицію через /markets або слідуй сигналу з /signals.`,
  portfolio_need_wallet: "Спочатку потрібен гаманець. Створи через /wallet.",
  btn_positions: "📊 Позиції", btn_pnl: "📈 Графік P&L",
  portfolio_no_data: "📊 Даних поки немає. Почни торгувати щоб бачити статистику.",

  lang_changed: "✅ Мову змінено на Українську",
};
