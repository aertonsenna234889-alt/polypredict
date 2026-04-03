import type { Translations } from "./en.js";

export const zh: Translations = {
  lang_name: "中文",
  flag: "🇨🇳",

  choose_language: "🌍 选择语言:",
  welcome: (name: string) =>
    `你好 ${name}！👋

*PolyPredict* — 你在预测市场的优势。

🐋 *Smart Money 雷达* — 追踪精英钱包，3+鲸鱼同时进场时触发级联警报
🤖 *AI 分析师* — AI评估概率 vs 市场价格，发现错误定价
📈 *跨市场套利* — Polymarket / Kalshi / Azuro 之间的价差
💰 *内置钱包* — 非托管、无Gas、即时

选择你的操作方式：`,

  menu_markets: "📊 市场",
  menu_radar: "🐋 雷达",
  menu_signals: "🤖 信号",
  menu_arb: "📈 套利",
  menu_wallet: "💰 钱包",
  menu_portfolio: "📁 投资组合",
  menu_open_app: "🚀 打开应用",
  menu_choose: "*PolyPredict* — 你在预测市场的优势。\n\n选择板块：",
  btn_back: "« 返回",

  help: `*PolyPredict — 预测市场情报*

📊 /markets — 按类别浏览市场
🐋 /radar — Smart Money 雷达和鲸鱼追踪
🤖 /signals — AI信号和级联警报
📈 /portfolio — 你的持仓和盈亏
💰 /wallet — 充值、提现、余额
🌐 /lang — 更改语言

点击下方按钮打开完整应用。`,

  markets_title: "📊 *市场* — 选择类别：",
  cat_politics: "🏛 政治",
  cat_crypto: "₿ 加密货币",
  cat_sports: "⚽ 体育",
  cat_science: "🔬 科学",
  cat_entertainment: "🎬 娱乐",
  cat_economics: "💹 经济",
  cat_trending: "🔥 热门",

  market_detail: (q: string, yes: string, no: string, vol: string, liq: string, whales: number, ai: number) =>
    `📊 *${q}*

YES: *${yes}¢* · NO: *${no}¢*
成交量: *$${vol}* · 流动性: *$${liq}*

🐋 *Smart Money:* ${whales} 只鲸鱼做多YES
🤖 *AI评分:* ${ai}% 概率

点击下方下注：`,

  btn_buy_yes: "✅ 买入 YES",
  btn_buy_no: "❌ 买入 NO",
  btn_whales: "🐋 鲸鱼",
  btn_ai_analysis: "🤖 AI分析",
  btn_full_view: "📊 详情",

  bet_title: (outcome: string, price: string) =>
    `*买入 ${outcome}* 价格 *${price}*\n\n选择金额或在应用中确认：`,
  bet_confirm_app: "🔐 在应用中确认",
  bet_cancel: "« 取消",
  bet_custom: "自定义",
  bet_placed: (q: string, side: string, amount: string, price: string, shares: string) =>
    `✅ *订单已提交！*

市场: ${q}
方向: *${side}*
金额: *$${amount} USDC*
价格: *${price}¢*
份额: *${shares}*

在 /portfolio 中追踪`,

  wallet_title: "💰 *钱包*",
  wallet_no_wallet: `💰 *钱包*

你还没有钱包。将自动创建 — 无助记词、非托管、由Turnkey保护。

正在创建钱包...`,
  wallet_created: (address: string) =>
    `✅ *钱包已创建！*

地址: \`${address}\`
网络: Polygon
货币: USDC

密钥存储在硬件安全飞地中 — 我们无法访问。`,
  wallet_info: (address: string, balance: string) =>
    `💰 *钱包*

地址: \`${address}\`
余额: *$${balance} USDC*
网络: Polygon`,
  btn_deposit: "📥 充值",
  btn_withdraw: "📤 提现",
  btn_refresh: "🔄 刷新",
  btn_history: "📜 历史",
  wallet_deposit_info: (address: string) =>
    `📥 *充值 USDC*

在 *Polygon* 网络上发送 *USDC* 到:
\`${address}\`

⚠️ 仅发送Polygon网络的USDC。其他代币或网络可能导致资金丢失。`,
  wallet_withdraw_prompt: "📤 *提现*\n\n发送目标地址（Polygon USDC）：",
  wallet_no_history: "📜 *交易历史*\n\n暂无交易。",
  wallet_create_first: "请先通过 /wallet 创建钱包",

  radar_title: (status: string) =>
    `🐋 *Smart Money 雷达*

实时追踪预测市场精英钱包。

🔔 *级联警报* — 3+顶级钱包在90分钟内进入同一仓位时触发
🧺 *篮子* — 按专长分组的钱包（政治、加密、体育）
📊 *排行榜* — 按盈亏和胜率排名

状态: ${status}`,
  radar_active: "🟢 活跃",
  radar_inactive: "🔴 未激活",
  btn_top_whales: "🐋 顶级鲸鱼",
  btn_baskets: "🧺 篮子",
  btn_cascades: "🔔 级联警报",
  btn_leaderboard: "📊 排行榜",
  btn_settings: "⚙️ 设置",

  radar_whales_title: "🐋 *顶级鲸鱼 (30天)*",
  radar_whale_line: (i: number, label: string, pnl: string, wr: number, score: number) =>
    `${i}. *${label}* — 盈亏: +$${pnl} · 胜率: ${wr}% · 评分: ${score}`,
  radar_whales_footer: "\n点击追踪：",

  radar_baskets_title: `🧺 *钱包篮子*

按主题预建的专家钱包篮子：`,
  radar_basket_line: (emoji: string, name: string, wallets: number, consensus: number, wr: number) =>
    `${emoji} *${name}* — ${wallets}个钱包 · 共识: ${consensus}% · 平均胜率: ${wr}%`,
  radar_baskets_footer: "\n当80%+的篮子成员达成共识时触发信号。",

  radar_cascades_title: `🔔 *级联警报*

当3+精英钱包在90分钟内独立进入同一仓位时触发级联。`,
  radar_cascade_strong: "⚡ *强烈*",
  radar_cascade_medium: "⚡ *中等*",
  radar_cascade_accuracy: "\n历史上比单钱包信号准确率高73%。",

  radar_leaderboard: `📊 *排行榜 — 历史总计*

🥇 Fredi9999 — +$1.2M · 2,847笔 · 71% 胜率
🥈 GCR_Poly — +$890K · 1,203笔 · 68% 胜率
🥉 WhaleAlert — +$654K · 3,102笔 · 64% 胜率
4. CryptoSage — +$521K · 982笔 · 72% 胜率
5. PredictMax — +$487K · 1,567笔 · 66% 胜率`,

  radar_settings_toggled: (status: string) => `⚙️ *雷达设置*\n\n通知: ${status}\n\n再次点击切换。`,
  radar_enabled: "🟢 已开启",
  radar_disabled: "🔴 已关闭",

  signals_title: "🤖 *信号* — 选择类型：",
  signals_no_active: `🤖 *活跃信号*

目前没有活跃信号。以下情况会生成信号：

🐋 *级联* — 3+精英钱包达成一致
🤖 *AI Edge* — AI发现错误定价
📈 *套利* — 平台间价差
🧺 *篮子* — 80%+钱包篮子达成共识

触发时你会立即收到通知。`,
  signal_whale: "🐋 鲸鱼信号",
  signal_ai: "🤖 AI信号",
  signal_arb: "📈 套利",
  signal_basket: "🧺 篮子共识",
  signal_all: "🔥 所有活跃",
  signal_none: (type: string) => `*${type}*\n\n此类型暂无活跃信号。触发时会通知你。`,

  arb_title: `📈 *跨市场套利*

扫描 Polymarket vs Kalshi vs Azuro...`,
  arb_line: (q: string, p1: string, price1: string, p2: string, price2: string, spread: string) =>
    `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   价差: *${spread}*`,

  portfolio_title: "📁 *投资组合*",
  portfolio_empty: (balance: string) =>
    `📁 *投资组合*

💰 余额: *$${balance} USDC*
📊 持仓: *0*
📈 总盈亏: *$0.00 (0%)*
🏆 胜率: *—*

从 /markets 开仓或关注 /signals 的信号开始交易。`,
  portfolio_need_wallet: "需要先创建钱包。使用 /wallet 创建。",
  btn_positions: "📊 持仓",
  btn_pnl: "📈 盈亏图表",
  portfolio_no_data: "📊 暂无数据。开始交易后查看统计。",

  lang_changed: "✅ 语言已更改为中文",
};
