import type { Translations } from "./en.js";

export const hi: Translations = {
  lang_name: "हिन्दी", flag: "🇮🇳",
  choose_language: "🌍 अपनी भाषा चुनें:",
  welcome: (name) => `नमस्ते ${name}! 👋\n\n*PolyPredict* — प्रिडिक्शन मार्केट में आपकी बढ़त।\n\n🐋 *Smart Money Radar* — एलीट वॉलेट ट्रैक करें, 3+ व्हेल सहमत होने पर कैस्केड अलर्ट\n🤖 *AI विश्लेषक* — AI प्रायिकता vs मार्केट प्राइस का मूल्यांकन करता है\n📈 *क्रॉस-मार्केट आर्बिट्राज* — Polymarket / Kalshi / Azuro के बीच प्राइस गैप\n💰 *बिल्ट-इन वॉलेट* — नॉन-कस्टोडियल, गैसलेस, तुरंत\n\nकैसे काम करना चाहते हैं चुनें:`,

  menu_markets: "📊 बाज़ार", menu_radar: "🐋 रडार", menu_signals: "🤖 सिग्नल", menu_arb: "📈 आर्बिट्राज", menu_wallet: "💰 वॉलेट", menu_portfolio: "📁 पोर्टफोलियो", menu_open_app: "🚀 ऐप खोलें",
  menu_choose: "*PolyPredict* — प्रिडिक्शन मार्केट में आपकी बढ़त।\n\nसेक्शन चुनें:", btn_back: "« वापस",

  help: "*PolyPredict — प्रिडिक्शन मार्केट इंटेलिजेंस*\n\n📊 /markets — श्रेणी के अनुसार बाज़ार\n🐋 /radar — Smart Money रडार\n🤖 /signals — AI सिग्नल\n📈 /portfolio — पोज़ीशन और P&L\n💰 /wallet — जमा, निकासी, बैलेंस\n🌐 /lang — भाषा बदलें",

  markets_title: "📊 *बाज़ार* — श्रेणी चुनें:",
  cat_politics: "🏛 राजनीति", cat_crypto: "₿ क्रिप्टो", cat_sports: "⚽ खेल", cat_science: "🔬 विज्ञान", cat_entertainment: "🎬 मनोरंजन", cat_economics: "💹 अर्थव्यवस्था", cat_trending: "🔥 ट्रेंडिंग",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nवॉल्यूम: *$${vol}* · लिक्विडिटी: *$${liq}*\n\n🐋 *Smart Money:* ${whales} व्हेल YES लॉन्ग\n🤖 *AI स्कोर:* ${ai}% प्रायिकता\n\nबेट लगाने के लिए टैप करें:`,

  btn_buy_yes: "✅ YES खरीदें", btn_buy_no: "❌ NO खरीदें", btn_whales: "🐋 व्हेल", btn_ai_analysis: "🤖 AI विश्लेषण", btn_full_view: "📊 पूरा देखें",
  bet_title: (outcome, price) => `*${outcome} खरीदें* कीमत *${price}*\n\nराशि चुनें या ऐप में पुष्टि करें:`,
  bet_confirm_app: "🔐 ऐप में पुष्टि", bet_cancel: "« रद्द", bet_custom: "कस्टम",
  bet_placed: (q, side, amount, price, shares) => `✅ *ऑर्डर दिया गया!*\n\nमार्केट: ${q}\nसाइड: *${side}*\nराशि: *$${amount} USDC*\nकीमत: *${price}¢*\nशेयर: *${shares}*\n\n/portfolio में ट्रैक करें`,

  wallet_title: "💰 *वॉलेट*",
  wallet_no_wallet: "💰 *वॉलेट*\n\nआपके पास अभी वॉलेट नहीं है। स्वचालित रूप से बनाया जाएगा — कोई सीड फ्रेज़ नहीं, नॉन-कस्टोडियल, Turnkey द्वारा सुरक्षित।\n\nवॉलेट बना रहे हैं...",
  wallet_created: (address) => `✅ *वॉलेट बन गया!*\n\nपता: \`${address}\`\nनेटवर्क: Polygon\nमुद्रा: USDC\n\nआपकी कुंजियाँ हार्डवेयर एन्क्लेव में सुरक्षित हैं।`,
  wallet_info: (address, balance) => `💰 *वॉलेट*\n\nपता: \`${address}\`\nबैलेंस: *$${balance} USDC*\nनेटवर्क: Polygon`,
  btn_deposit: "📥 जमा", btn_withdraw: "📤 निकासी", btn_refresh: "🔄 रिफ्रेश", btn_history: "📜 इतिहास",
  wallet_deposit_info: (address) => `📥 *USDC जमा*\n\n*Polygon* नेटवर्क पर *USDC* भेजें:\n\`${address}\`\n\n⚠️ केवल Polygon नेटवर्क पर USDC भेजें।`,
  wallet_withdraw_prompt: "📤 *निकासी*\n\nगंतव्य पता भेजें (Polygon USDC):",
  wallet_no_history: "📜 *लेनदेन इतिहास*\n\nकोई लेनदेन नहीं।",
  wallet_create_first: "पहले /wallet से वॉलेट बनाएं",

  radar_title: (status) => `🐋 *Smart Money रडार*\n\nएलीट वॉलेट रियल-टाइम ट्रैक करें।\n\n🔔 *कैस्केड अलर्ट* — 3+ टॉप वॉलेट 90 मिनट में एक ही पोज़ीशन में आने पर\n🧺 *बास्केट* — विशेषज्ञता के अनुसार समूह\n📊 *लीडरबोर्ड* — P&L और विन रेट\n\nस्थिति: ${status}`,
  radar_active: "🟢 सक्रिय", radar_inactive: "🔴 निष्क्रिय",
  btn_top_whales: "🐋 टॉप व्हेल", btn_baskets: "🧺 बास्केट", btn_cascades: "🔔 कैस्केड", btn_leaderboard: "📊 लीडरबोर्ड", btn_settings: "⚙️ सेटिंग्स",
  radar_whales_title: "🐋 *टॉप व्हेल (30 दिन)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · स्कोर: ${score}`,
  radar_whales_footer: "\nट्रैक करने के लिए टैप:",
  radar_baskets_title: "🧺 *वॉलेट बास्केट*\n\nविषय के अनुसार विशेषज्ञ बास्केट:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} वॉलेट · सहमति: ${consensus}% · औसत WR: ${wr}%`,
  radar_baskets_footer: "\nबास्केट के 80%+ सहमत होने पर सिग्नल।",
  radar_cascades_title: "🔔 *कैस्केड अलर्ट*\n\n3+ एलीट वॉलेट 90 मिनट में स्वतंत्र रूप से एक ही पोज़ीशन में आने पर।",
  radar_cascade_strong: "⚡ *मजबूत*", radar_cascade_medium: "⚡ *मध्यम*",
  radar_cascade_accuracy: "\nऐतिहासिक रूप से एकल वॉलेट सिग्नल से 73% अधिक सटीक।",
  radar_leaderboard: "📊 *लीडरबोर्ड — ऑल टाइम*\n\n🥇 Fredi9999 — +$1.2M · 2,847 ट्रेड · 71% WR\n🥈 GCR_Poly — +$890K · 1,203 ट्रेड · 68% WR\n🥉 WhaleAlert — +$654K · 3,102 ट्रेड · 64% WR\n4. CryptoSage — +$521K · 982 ट्रेड · 72% WR\n5. PredictMax — +$487K · 1,567 ट्रेड · 66% WR",
  radar_settings_toggled: (status) => `⚙️ *रडार सेटिंग्स*\n\nसूचनाएं: ${status}\n\nबदलने के लिए फिर टैप करें।`,
  radar_enabled: "🟢 चालू", radar_disabled: "🔴 बंद",

  signals_title: "🤖 *सिग्नल* — प्रकार चुनें:",
  signals_no_active: "🤖 *सक्रिय सिग्नल*\n\nकोई सक्रिय सिग्नल नहीं। ये तब बनते हैं:\n\n🐋 *कैस्केड* — 3+ एलीट वॉलेट सहमत\n🤖 *AI Edge* — AI प्राइसिंग एरर ढूंढे\n📈 *आर्बिट्राज* — प्लेटफॉर्म के बीच प्राइस गैप\n🧺 *बास्केट* — 80%+ सहमत\n\nतुरंत सूचित किया जाएगा।",
  signal_whale: "🐋 व्हेल सिग्नल", signal_ai: "🤖 AI सिग्नल", signal_arb: "📈 आर्बिट्राज", signal_basket: "🧺 बास्केट सहमति", signal_all: "🔥 सभी सक्रिय",
  signal_none: (type) => `*${type}*\n\nइस प्रकार का कोई सक्रिय सिग्नल नहीं। सूचित किया जाएगा।`,

  arb_title: "📈 *क्रॉस-मार्केट आर्बिट्राज*\n\nPolymarket vs Kalshi vs Azuro स्कैन हो रहा है...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   स्प्रेड: *${spread}*`,

  portfolio_title: "📁 *पोर्टफोलियो*",
  portfolio_empty: (balance) => `📁 *पोर्टफोलियो*\n\n💰 बैलेंस: *$${balance} USDC*\n📊 पोज़ीशन: *0*\n📈 कुल P&L: *$0.00 (0%)*\n🏆 विन रेट: *—*\n\n/markets से पोज़ीशन खोलें या /signals के सिग्नल फॉलो करें।`,
  portfolio_need_wallet: "पहले वॉलेट चाहिए। /wallet से बनाएं।",
  btn_positions: "📊 पोज़ीशन", btn_pnl: "📈 P&L चार्ट",
  portfolio_no_data: "📊 अभी डेटा नहीं। ट्रेडिंग शुरू करें।",

  lang_changed: "✅ भाषा हिन्दी में बदली गई",
};
