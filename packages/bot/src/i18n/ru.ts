import type { Translations } from "./en.js";

export const ru: Translations = {
  lang_name: "Русский",
  flag: "🇷🇺",

  choose_language: "🌍 Выберите язык:",
  welcome: (name: string) =>
    `Привет, ${name}! 👋

*PolyPredict* — твоё преимущество на рынках предсказаний.

🐋 *Smart Money Radar* — отслеживай элитные кошельки, каскадные алерты когда 3+ кита заходят в одну позицию
🤖 *AI Аналитик* — ИИ оценивает вероятность vs рыночная цена, находит mispricing
📈 *Кросс-маркет арбитраж* — расхождения цен между Polymarket / Kalshi / Azuro
💰 *Встроенный кошелёк* — некастодиальный, без газа, моментальный

Выбери как работать:`,

  menu_markets: "📊 Рынки",
  menu_radar: "🐋 Радар",
  menu_signals: "🤖 Сигналы",
  menu_arb: "📈 Арбитраж",
  menu_wallet: "💰 Кошелёк",
  menu_portfolio: "📁 Портфель",
  menu_open_app: "🚀 Открыть приложение",
  menu_choose: "*PolyPredict* — твоё преимущество на рынках предсказаний.\n\nВыбери раздел:",
  btn_back: "« Назад",

  help: `*PolyPredict — Аналитика рынков предсказаний*

📊 /markets — Рынки по категориям
🐋 /radar — Smart Money Радар и отслеживание китов
🤖 /signals — AI сигналы и каскадные алерты
📈 /portfolio — Позиции и P&L
💰 /wallet — Депозит, вывод, баланс
🌐 /lang — Сменить язык

Нажми кнопку ниже чтобы открыть приложение.`,

  markets_title: "📊 *Рынки* — выбери категорию:",
  cat_politics: "🏛 Политика",
  cat_crypto: "₿ Крипто",
  cat_sports: "⚽ Спорт",
  cat_science: "🔬 Наука",
  cat_entertainment: "🎬 Развлечения",
  cat_economics: "💹 Экономика",
  cat_trending: "🔥 Трендовые",

  market_detail: (q: string, yes: string, no: string, vol: string, liq: string, whales: number, ai: number) =>
    `📊 *${q}*

YES: *${yes}¢* · NO: *${no}¢*
Объём: *$${vol}* · Ликвидность: *$${liq}*

🐋 *Smart Money:* ${whales} китов в лонге YES
🤖 *AI Оценка:* ${ai}% вероятность

Нажми чтобы сделать ставку:`,

  btn_buy_yes: "✅ Купить YES",
  btn_buy_no: "❌ Купить NO",
  btn_whales: "🐋 Киты",
  btn_ai_analysis: "🤖 AI Анализ",
  btn_full_view: "📊 Подробнее",

  bet_title: (outcome: string, price: string) =>
    `*Купить ${outcome}* по *${price}*\n\nВыбери сумму или подтверди в приложении:`,
  bet_confirm_app: "🔐 Подтвердить в приложении",
  bet_cancel: "« Отмена",
  bet_custom: "Своя сумма",
  bet_placed: (q: string, side: string, amount: string, price: string, shares: string) =>
    `✅ *Ордер размещён!*

Рынок: ${q}
Сторона: *${side}*
Сумма: *$${amount} USDC*
Цена: *${price}¢*
Шеры: *${shares}*

Отслеживай в /portfolio`,

  wallet_title: "💰 *Кошелёк*",
  wallet_no_wallet: `💰 *Кошелёк*

У тебя ещё нет кошелька. Он будет создан автоматически — без seed-фразы, некастодиальный, защищён Turnkey.

Создаю кошелёк...`,
  wallet_created: (address: string) =>
    `✅ *Кошелёк создан!*

Адрес: \`${address}\`
Сеть: Polygon
Валюта: USDC

Ключи хранятся в аппаратном энклейве — у нас нет к ним доступа.`,
  wallet_info: (address: string, balance: string) =>
    `💰 *Кошелёк*

Адрес: \`${address}\`
Баланс: *$${balance} USDC*
Сеть: Polygon`,
  btn_deposit: "📥 Депозит",
  btn_withdraw: "📤 Вывод",
  btn_refresh: "🔄 Обновить",
  btn_history: "📜 История",
  wallet_deposit_info: (address: string) =>
    `📥 *Депозит USDC*

Отправь *USDC* в сети *Polygon* на:
\`${address}\`

⚠️ Отправляй только USDC в сети Polygon. Другие токены или сети могут привести к потере средств.`,
  wallet_withdraw_prompt: "📤 *Вывод*\n\nОтправь адрес получателя (Polygon USDC):",
  wallet_no_history: "📜 *История транзакций*\n\nТранзакций пока нет.",
  wallet_create_first: "Сначала создай кошелёк через /wallet",

  radar_title: (status: string) =>
    `🐋 *Smart Money Радар*

Отслеживай элитные кошельки на рынках предсказаний в реальном времени.

🔔 *Каскадные алерты* — срабатывают когда 3+ топ-кошельков заходят в одну позицию за 90 минут
🧺 *Корзины* — группы кошельков по экспертизе (политика, крипто, спорт)
📊 *Лидерборд* — лучшие по P&L и win rate

Статус: ${status}`,
  radar_active: "🟢 Активен",
  radar_inactive: "🔴 Неактивен",
  btn_top_whales: "🐋 Топ киты",
  btn_baskets: "🧺 Корзины",
  btn_cascades: "🔔 Каскадные алерты",
  btn_leaderboard: "📊 Лидерборд",
  btn_settings: "⚙️ Настройки",

  radar_whales_title: "🐋 *Топ киты (30д)*",
  radar_whale_line: (i: number, label: string, pnl: string, wr: number, score: number) =>
    `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Score: ${score}`,
  radar_whales_footer: "\nНажми чтобы отслеживать:",

  radar_baskets_title: `🧺 *Корзины кошельков*

Готовые корзины экспертных кошельков по темам:`,
  radar_basket_line: (emoji: string, name: string, wallets: number, consensus: number, wr: number) =>
    `${emoji} *${name}* — ${wallets} кошельков · Консенсус: ${consensus}% · Ср. WR: ${wr}%`,
  radar_baskets_footer: "\nСигнал срабатывает когда 80%+ корзины согласны.",

  radar_cascades_title: `🔔 *Каскадные алерты*

Каскад срабатывает когда 3+ элитных кошельков независимо входят в одну позицию за 90 минут.`,
  radar_cascade_strong: "⚡ *СИЛЬНЫЙ*",
  radar_cascade_medium: "⚡ *СРЕДНИЙ*",
  radar_cascade_accuracy: "\nИсторически на 73% точнее сигналов от одного кошелька.",

  radar_leaderboard: `📊 *Лидерборд — За всё время*

🥇 Fredi9999 — +$1.2M · 2,847 сделок · 71% WR
🥈 GCR_Poly — +$890K · 1,203 сделок · 68% WR
🥉 WhaleAlert — +$654K · 3,102 сделок · 64% WR
4. CryptoSage — +$521K · 982 сделок · 72% WR
5. PredictMax — +$487K · 1,567 сделок · 66% WR`,

  radar_settings_toggled: (status: string) => `⚙️ *Настройки радара*\n\nУведомления: ${status}\n\nНажми ещё раз чтобы переключить.`,
  radar_enabled: "🟢 Включено",
  radar_disabled: "🔴 Выключено",

  signals_title: "🤖 *Сигналы* — выбери тип:",
  signals_no_active: `🤖 *Активные сигналы*

Активных сигналов нет. Сигналы генерируются когда:

🐋 *Каскад* — 3+ элитных кошельков согласны
🤖 *AI Edge* — ИИ находит mispricing (вероятность модели vs цена рынка)
📈 *Арбитраж* — разница цен между платформами
🧺 *Корзина* — 80%+ корзины кошельков согласны

Ты получишь уведомление мгновенно.`,
  signal_whale: "🐋 Сигналы китов",
  signal_ai: "🤖 AI Сигналы",
  signal_arb: "📈 Арбитраж",
  signal_basket: "🧺 Консенсус корзин",
  signal_all: "🔥 Все активные",
  signal_none: (type: string) => `*${type}*\n\nНет активных сигналов этого типа. Уведомим когда появятся.`,

  arb_title: `📈 *Кросс-маркет арбитраж*

Сканирую Polymarket vs Kalshi vs Azuro...`,
  arb_line: (q: string, p1: string, price1: string, p2: string, price2: string, spread: string) =>
    `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Спред: *${spread}*`,

  portfolio_title: "📁 *Портфель*",
  portfolio_empty: (balance: string) =>
    `📁 *Портфель*

💰 Баланс: *$${balance} USDC*
📊 Позиции: *0*
📈 Общий P&L: *$0.00 (0%)*
🏆 Win Rate: *—*

Открой позицию через /markets или следуй сигналу из /signals.`,
  portfolio_need_wallet: "Сначала нужен кошелёк. Создай через /wallet.",
  btn_positions: "📊 Позиции",
  btn_pnl: "📈 График P&L",
  portfolio_no_data: "📊 Данных пока нет. Начни торговать чтобы видеть статистику.",

  lang_changed: "✅ Язык изменён на Русский",
};
