import type { Translations } from "./en.js";

export const ja: Translations = {
  lang_name: "日本語",
  flag: "🇯🇵",

  choose_language: "🌍 言語を選択してください：",
  welcome: (name) => `こんにちは ${name}！👋\n\n*PolyPredict* — 予測市場での優位性。\n\n🐋 *Smart Money Radar* — エリートウォレットを追跡、3+クジラが一致した時のカスケードアラート\n🤖 *AIアナリスト* — AIが確率vs市場価格を評価、ミスプライシングを発見\n📈 *クロスマーケット裁定* — Polymarket / Kalshi / Azuro間の価格差\n💰 *内蔵ウォレット* — ノンカストディアル、ガスレス、即時\n\n操作方法を選択：`,

  menu_markets: "📊 マーケット", menu_radar: "🐋 レーダー", menu_signals: "🤖 シグナル", menu_arb: "📈 裁定", menu_wallet: "💰 ウォレット", menu_portfolio: "📁 ポートフォリオ", menu_open_app: "🚀 アプリを開く",
  menu_choose: "*PolyPredict* — 予測市場での優位性。\n\nセクションを選択：",
  btn_back: "« 戻る",

  help: "*PolyPredict — 予測市場インテリジェンス*\n\n📊 /markets — カテゴリー別マーケット\n🐋 /radar — Smart Moneyレーダー\n🤖 /signals — AIシグナル\n📈 /portfolio — ポジションとP&L\n💰 /wallet — 入金、出金、残高\n🌐 /lang — 言語変更",

  markets_title: "📊 *マーケット* — カテゴリーを選択：",
  cat_politics: "🏛 政治", cat_crypto: "₿ 暗号通貨", cat_sports: "⚽ スポーツ", cat_science: "🔬 科学", cat_entertainment: "🎬 エンタメ", cat_economics: "💹 経済", cat_trending: "🔥 トレンド",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\n出来高: *$${vol}* · 流動性: *$${liq}*\n\n🐋 *Smart Money:* ${whales}クジラがYESロング\n🤖 *AIスコア:* ${ai}%確率\n\nベットするにはタップ：`,

  btn_buy_yes: "✅ YES購入", btn_buy_no: "❌ NO購入", btn_whales: "🐋 クジラ", btn_ai_analysis: "🤖 AI分析", btn_full_view: "📊 詳細",
  bet_title: (outcome, price) => `*${outcome}を購入* 価格 *${price}*\n\n金額を選択またはアプリで確認：`,
  bet_confirm_app: "🔐 アプリで確認", bet_cancel: "« キャンセル", bet_custom: "カスタム",
  bet_placed: (q, side, amount, price, shares) => `✅ *注文完了！*\n\n市場: ${q}\n側: *${side}*\n金額: *$${amount} USDC*\n価格: *${price}¢*\nシェア: *${shares}*\n\n/portfolio で追跡`,

  wallet_title: "💰 *ウォレット*",
  wallet_no_wallet: "💰 *ウォレット*\n\nまだウォレットがありません。自動作成されます — シードフレーズなし、ノンカストディアル、Turnkeyで保護。\n\nウォレット作成中...",
  wallet_created: (address) => `✅ *ウォレット作成完了！*\n\nアドレス: \`${address}\`\nネットワーク: Polygon\n通貨: USDC\n\n秘密鍵はハードウェアエンクレーブに保管されています。`,
  wallet_info: (address, balance) => `💰 *ウォレット*\n\nアドレス: \`${address}\`\n残高: *$${balance} USDC*\nネットワーク: Polygon`,
  btn_deposit: "📥 入金", btn_withdraw: "📤 出金", btn_refresh: "🔄 更新", btn_history: "📜 履歴",
  wallet_deposit_info: (address) => `📥 *USDC入金*\n\n*Polygon*ネットワークで*USDC*を送信：\n\`${address}\`\n\n⚠️ PolygonネットワークのUSDCのみ送信してください。`,
  wallet_withdraw_prompt: "📤 *出金*\n\n宛先アドレスを送信（Polygon USDC）：",
  wallet_no_history: "📜 *取引履歴*\n\n取引なし。",
  wallet_create_first: "まず /wallet でウォレットを作成してください",

  radar_title: (status) => `🐋 *Smart Moneyレーダー*\n\nエリートウォレットをリアルタイム追跡。\n\n🔔 *カスケードアラート* — 3+トップウォレットが90分以内に同じポジションに入った時\n🧺 *バスケット* — 専門分野別グループ\n📊 *ランキング* — P&L・勝率順\n\nステータス: ${status}`,
  radar_active: "🟢 アクティブ", radar_inactive: "🔴 非アクティブ",
  btn_top_whales: "🐋 トップクジラ", btn_baskets: "🧺 バスケット", btn_cascades: "🔔 カスケード", btn_leaderboard: "📊 ランキング", btn_settings: "⚙️ 設定",
  radar_whales_title: "🐋 *トップクジラ (30日)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · 勝率: ${wr}% · スコア: ${score}`,
  radar_whales_footer: "\n追跡するにはタップ：",
  radar_baskets_title: "🧺 *ウォレットバスケット*\n\nテーマ別エキスパートバスケット：",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets}ウォレット · 合意: ${consensus}% · 平均勝率: ${wr}%`,
  radar_baskets_footer: "\nバスケットの80%+が合意した時にシグナル発火。",
  radar_cascades_title: "🔔 *カスケードアラート*\n\n3+エリートウォレットが90分以内に独立して同じポジションに入った時にカスケード発火。",
  radar_cascade_strong: "⚡ *強い*", radar_cascade_medium: "⚡ *中程度*",
  radar_cascade_accuracy: "\n歴史的に単一ウォレットシグナルより73%正確。",
  radar_leaderboard: "📊 *ランキング — 全期間*\n\n🥇 Fredi9999 — +$1.2M · 2,847取引 · 71% 勝率\n🥈 GCR_Poly — +$890K · 1,203取引 · 68% 勝率\n🥉 WhaleAlert — +$654K · 3,102取引 · 64% 勝率\n4. CryptoSage — +$521K · 982取引 · 72% 勝率\n5. PredictMax — +$487K · 1,567取引 · 66% 勝率",
  radar_settings_toggled: (status) => `⚙️ *レーダー設定*\n\n通知: ${status}\n\n再タップで切替。`,
  radar_enabled: "🟢 オン", radar_disabled: "🔴 オフ",

  signals_title: "🤖 *シグナル* — タイプを選択：",
  signals_no_active: "🤖 *アクティブシグナル*\n\nアクティブなシグナルなし。以下の時に生成：\n\n🐋 *カスケード* — 3+エリートウォレットが一致\n🤖 *AI Edge* — AIがミスプライシング発見\n📈 *裁定* — プラットフォーム間価格差\n🧺 *バスケット* — 80%+バスケットが合意\n\n即時通知されます。",
  signal_whale: "🐋 クジラシグナル", signal_ai: "🤖 AIシグナル", signal_arb: "📈 裁定", signal_basket: "🧺 バスケット合意", signal_all: "🔥 全アクティブ",
  signal_none: (type) => `*${type}*\n\nこのタイプのアクティブシグナルなし。発火時に通知します。`,

  arb_title: "📈 *クロスマーケット裁定*\n\nPolymarket vs Kalshi vs Azuroをスキャン中...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   スプレッド: *${spread}*`,

  portfolio_title: "📁 *ポートフォリオ*",
  portfolio_empty: (balance) => `📁 *ポートフォリオ*\n\n💰 残高: *$${balance} USDC*\n📊 ポジション: *0*\n📈 合計P&L: *$0.00 (0%)*\n🏆 勝率: *—*\n\n/markets からポジションを開くか /signals のシグナルに従ってください。`,
  portfolio_need_wallet: "まずウォレットが必要です。/wallet で作成してください。",
  btn_positions: "📊 ポジション", btn_pnl: "📈 P&Lチャート",
  portfolio_no_data: "📊 データなし。取引を開始して統計を確認。",

  lang_changed: "✅ 言語を日本語に変更しました",
};
