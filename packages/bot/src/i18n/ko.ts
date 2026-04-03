import type { Translations } from "./en.js";

export const ko: Translations = {
  lang_name: "한국어", flag: "🇰🇷",
  choose_language: "🌍 언어를 선택하세요:",
  welcome: (name) => `안녕하세요 ${name}! 👋\n\n*PolyPredict* — 예측 시장에서의 우위.\n\n🐋 *Smart Money Radar* — 엘리트 지갑 추적, 3+ 고래가 동의할 때 캐스케이드 알림\n🤖 *AI 분석가* — AI가 확률 vs 시장 가격 평가, 잘못된 가격 발견\n📈 *크로스마켓 차익거래* — Polymarket / Kalshi / Azuro 간 가격 차이\n💰 *내장 지갑* — 비수탁, 가스 없음, 즉시\n\n작업 방식 선택:`,

  menu_markets: "📊 시장", menu_radar: "🐋 레이더", menu_signals: "🤖 신호", menu_arb: "📈 차익거래", menu_wallet: "💰 지갑", menu_portfolio: "📁 포트폴리오", menu_open_app: "🚀 앱 열기",
  menu_choose: "*PolyPredict* — 예측 시장에서의 우위.\n\n섹션 선택:", btn_back: "« 뒤로",

  help: "*PolyPredict — 예측 시장 인텔리전스*\n\n📊 /markets — 카테고리별 시장\n🐋 /radar — Smart Money 레이더\n🤖 /signals — AI 신호\n📈 /portfolio — 포지션 & P&L\n💰 /wallet — 입금, 출금, 잔액\n🌐 /lang — 언어 변경",

  markets_title: "📊 *시장* — 카테고리 선택:",
  cat_politics: "🏛 정치", cat_crypto: "₿ 암호화폐", cat_sports: "⚽ 스포츠", cat_science: "🔬 과학", cat_entertainment: "🎬 엔터테인먼트", cat_economics: "💹 경제", cat_trending: "🔥 트렌드",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\n거래량: *$${vol}* · 유동성: *$${liq}*\n\n🐋 *Smart Money:* ${whales} 고래 YES 롱\n🤖 *AI 점수:* ${ai}% 확률\n\n베팅하려면 탭:`,

  btn_buy_yes: "✅ YES 매수", btn_buy_no: "❌ NO 매수", btn_whales: "🐋 고래", btn_ai_analysis: "🤖 AI 분석", btn_full_view: "📊 상세보기",
  bet_title: (outcome, price) => `*${outcome} 매수* 가격 *${price}*\n\n금액 선택 또는 앱에서 확인:`,
  bet_confirm_app: "🔐 앱에서 확인", bet_cancel: "« 취소", bet_custom: "직접입력",
  bet_placed: (q, side, amount, price, shares) => `✅ *주문 완료!*\n\n시장: ${q}\n방향: *${side}*\n금액: *$${amount} USDC*\n가격: *${price}¢*\n셰어: *${shares}*\n\n/portfolio 에서 추적`,

  wallet_title: "💰 *지갑*",
  wallet_no_wallet: "💰 *지갑*\n\n아직 지갑이 없습니다. 자동 생성됩니다 — 시드 문구 없음, 비수탁, Turnkey로 보호.\n\n지갑 생성 중...",
  wallet_created: (address) => `✅ *지갑 생성 완료!*\n\n주소: \`${address}\`\n네트워크: Polygon\n통화: USDC\n\n키는 하드웨어 엔클레이브에 보관됩니다.`,
  wallet_info: (address, balance) => `💰 *지갑*\n\n주소: \`${address}\`\n잔액: *$${balance} USDC*\n네트워크: Polygon`,
  btn_deposit: "📥 입금", btn_withdraw: "📤 출금", btn_refresh: "🔄 새로고침", btn_history: "📜 내역",
  wallet_deposit_info: (address) => `📥 *USDC 입금*\n\n*Polygon* 네트워크로 *USDC* 전송:\n\`${address}\`\n\n⚠️ Polygon 네트워크의 USDC만 전송하세요.`,
  wallet_withdraw_prompt: "📤 *출금*\n\n목적지 주소 전송 (Polygon USDC):",
  wallet_no_history: "📜 *거래 내역*\n\n거래 없음.",
  wallet_create_first: "먼저 /wallet 로 지갑을 만드세요",

  radar_title: (status) => `🐋 *Smart Money 레이더*\n\n엘리트 지갑 실시간 추적.\n\n🔔 *캐스케이드 알림* — 3+ 톱 지갑이 90분 내 같은 포지션 진입\n🧺 *바스켓* — 전문 분야별 그룹\n📊 *순위* — P&L & 승률 기준\n\n상태: ${status}`,
  radar_active: "🟢 활성", radar_inactive: "🔴 비활성",
  btn_top_whales: "🐋 톱 고래", btn_baskets: "🧺 바스켓", btn_cascades: "🔔 캐스케이드", btn_leaderboard: "📊 순위", btn_settings: "⚙️ 설정",
  radar_whales_title: "🐋 *톱 고래 (30일)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · 승률: ${wr}% · 점수: ${score}`,
  radar_whales_footer: "\n추적하려면 탭:",
  radar_baskets_title: "🧺 *지갑 바스켓*\n\n주제별 전문가 바스켓:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets}지갑 · 합의: ${consensus}% · 평균 승률: ${wr}%`,
  radar_baskets_footer: "\n바스켓의 80%+ 동의 시 신호 발생.",
  radar_cascades_title: "🔔 *캐스케이드 알림*\n\n3+ 엘리트 지갑이 90분 내 독립적으로 같은 포지션 진입 시 발생.",
  radar_cascade_strong: "⚡ *강함*", radar_cascade_medium: "⚡ *보통*",
  radar_cascade_accuracy: "\n역사적으로 단일 지갑 신호보다 73% 더 정확.",
  radar_leaderboard: "📊 *순위 — 전체*\n\n🥇 Fredi9999 — +$1.2M · 2,847거래 · 71% 승률\n🥈 GCR_Poly — +$890K · 1,203거래 · 68% 승률\n🥉 WhaleAlert — +$654K · 3,102거래 · 64% 승률\n4. CryptoSage — +$521K · 982거래 · 72% 승률\n5. PredictMax — +$487K · 1,567거래 · 66% 승률",
  radar_settings_toggled: (status) => `⚙️ *레이더 설정*\n\n알림: ${status}\n\n다시 탭하여 전환.`,
  radar_enabled: "🟢 켜짐", radar_disabled: "🔴 꺼짐",

  signals_title: "🤖 *신호* — 유형 선택:",
  signals_no_active: "🤖 *활성 신호*\n\n활성 신호 없음. 다음 경우 생성:\n\n🐋 *캐스케이드* — 3+ 엘리트 지갑 동의\n🤖 *AI Edge* — AI가 가격 오류 발견\n📈 *차익거래* — 플랫폼 간 가격 차이\n🧺 *바스켓* — 80%+ 동의\n\n즉시 알림됩니다.",
  signal_whale: "🐋 고래 신호", signal_ai: "🤖 AI 신호", signal_arb: "📈 차익거래", signal_basket: "🧺 바스켓 합의", signal_all: "🔥 전체 활성",
  signal_none: (type) => `*${type}*\n\n이 유형의 활성 신호 없음. 발생 시 알림.`,

  arb_title: "📈 *크로스마켓 차익거래*\n\nPolymarket vs Kalshi vs Azuro 스캔 중...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   스프레드: *${spread}*`,

  portfolio_title: "📁 *포트폴리오*",
  portfolio_empty: (balance) => `📁 *포트폴리오*\n\n💰 잔액: *$${balance} USDC*\n📊 포지션: *0*\n📈 총 P&L: *$0.00 (0%)*\n🏆 승률: *—*\n\n/markets 에서 포지션 오픈 또는 /signals 신호 팔로우.`,
  portfolio_need_wallet: "먼저 지갑이 필요합니다. /wallet 로 만드세요.",
  btn_positions: "📊 포지션", btn_pnl: "📈 P&L 차트",
  portfolio_no_data: "📊 데이터 없음. 거래 시작 후 통계 확인.",

  lang_changed: "✅ 언어가 한국어로 변경되었습니다",
};
