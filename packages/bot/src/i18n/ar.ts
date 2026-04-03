import type { Translations } from "./en.js";

export const ar: Translations = {
  lang_name: "العربية", flag: "🇸🇦",
  choose_language: "🌍 اختر لغتك:",
  welcome: (name) => `مرحباً ${name}! 👋\n\n*PolyPredict* — ميزتك في أسواق التنبؤ.\n\n🐋 *رادار Smart Money* — تتبع المحافظ النخبوية، تنبيهات متتالية عندما يتفق 3+ حيتان\n🤖 *محلل الذكاء الاصطناعي* — يقيّم الاحتمالية مقابل سعر السوق، يكتشف أخطاء التسعير\n📈 *المراجحة عبر الأسواق* — فجوات الأسعار بين Polymarket / Kalshi / Azuro\n💰 *محفظة مدمجة* — غير حفظية، بدون غاز، فورية\n\nاختر طريقة العمل:`,

  menu_markets: "📊 الأسواق", menu_radar: "🐋 الرادار", menu_signals: "🤖 الإشارات", menu_arb: "📈 المراجحة", menu_wallet: "💰 المحفظة", menu_portfolio: "📁 المحفظة الاستثمارية", menu_open_app: "🚀 فتح التطبيق",
  menu_choose: "*PolyPredict* — ميزتك في أسواق التنبؤ.\n\nاختر قسماً:", btn_back: "« رجوع",

  help: "*PolyPredict — استخبارات أسواق التنبؤ*\n\n📊 /markets — تصفح الأسواق\n🐋 /radar — رادار Smart Money\n🤖 /signals — إشارات الذكاء الاصطناعي\n📈 /portfolio — مراكزك والأرباح\n💰 /wallet — إيداع، سحب، رصيد\n🌐 /lang — تغيير اللغة",

  markets_title: "📊 *الأسواق* — اختر فئة:",
  cat_politics: "🏛 سياسة", cat_crypto: "₿ كريبتو", cat_sports: "⚽ رياضة", cat_science: "🔬 علوم", cat_entertainment: "🎬 ترفيه", cat_economics: "💹 اقتصاد", cat_trending: "🔥 رائج",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nالحجم: *$${vol}* · السيولة: *$${liq}*\n\n🐋 *Smart Money:* ${whales} حوت في YES\n🤖 *نقاط AI:* ${ai}% احتمال\n\nاضغط للمراهنة:`,

  btn_buy_yes: "✅ شراء YES", btn_buy_no: "❌ شراء NO", btn_whales: "🐋 الحيتان", btn_ai_analysis: "🤖 تحليل AI", btn_full_view: "📊 عرض كامل",
  bet_title: (outcome, price) => `*شراء ${outcome}* بسعر *${price}*\n\nاختر المبلغ أو أكد في التطبيق:`,
  bet_confirm_app: "🔐 تأكيد في التطبيق", bet_cancel: "« إلغاء", bet_custom: "مخصص",
  bet_placed: (q, side, amount, price, shares) => `✅ *تم تقديم الطلب!*\n\nالسوق: ${q}\nالجانب: *${side}*\nالمبلغ: *$${amount} USDC*\nالسعر: *${price}¢*\nالحصص: *${shares}*\n\nتتبع في /portfolio`,

  wallet_title: "💰 *المحفظة*",
  wallet_no_wallet: "💰 *المحفظة*\n\nليس لديك محفظة بعد. سيتم إنشاؤها تلقائياً — بدون عبارة استرداد، غير حفظية، محمية بـ Turnkey.\n\nجاري الإنشاء...",
  wallet_created: (address) => `✅ *تم إنشاء المحفظة!*\n\nالعنوان: \`${address}\`\nالشبكة: Polygon\nالعملة: USDC\n\nمفاتيحك محفوظة في وحدة أمان الأجهزة.`,
  wallet_info: (address, balance) => `💰 *المحفظة*\n\nالعنوان: \`${address}\`\nالرصيد: *$${balance} USDC*\nالشبكة: Polygon`,
  btn_deposit: "📥 إيداع", btn_withdraw: "📤 سحب", btn_refresh: "🔄 تحديث", btn_history: "📜 السجل",
  wallet_deposit_info: (address) => `📥 *إيداع USDC*\n\nأرسل *USDC* على شبكة *Polygon* إلى:\n\`${address}\`\n\n⚠️ أرسل فقط USDC على شبكة Polygon.`,
  wallet_withdraw_prompt: "📤 *سحب*\n\nأرسل عنوان الوجهة (Polygon USDC):",
  wallet_no_history: "📜 *سجل المعاملات*\n\nلا توجد معاملات.",
  wallet_create_first: "أنشئ محفظة أولاً عبر /wallet",

  radar_title: (status) => `🐋 *رادار Smart Money*\n\nتتبع المحافظ النخبوية في الوقت الفعلي.\n\n🔔 *تنبيهات متتالية* — تنطلق عندما يدخل 3+ محافظ نفس المركز في 90 دقيقة\n🧺 *سلال* — مجموعات حسب التخصص\n📊 *الترتيب* — الأفضل بالأرباح ومعدل الفوز\n\nالحالة: ${status}`,
  radar_active: "🟢 نشط", radar_inactive: "🔴 غير نشط",
  btn_top_whales: "🐋 أكبر الحيتان", btn_baskets: "🧺 السلال", btn_cascades: "🔔 التنبيهات المتتالية", btn_leaderboard: "📊 الترتيب", btn_settings: "⚙️ الإعدادات",
  radar_whales_title: "🐋 *أكبر الحيتان (30 يوم)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — الربح: +$${pnl} · الفوز: ${wr}% · النقاط: ${score}`,
  radar_whales_footer: "\nاضغط للتتبع:",
  radar_baskets_title: "🧺 *سلال المحافظ*\n\nسلال خبراء مبنية مسبقاً حسب الموضوع:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} محفظة · إجماع: ${consensus}% · معدل فوز: ${wr}%`,
  radar_baskets_footer: "\nتنطلق الإشارة عندما يوافق 80%+ من السلة.",
  radar_cascades_title: "🔔 *التنبيهات المتتالية*\n\nتنطلق عندما يدخل 3+ محافظ نخبوية نفس المركز بشكل مستقل في 90 دقيقة.",
  radar_cascade_strong: "⚡ *قوي*", radar_cascade_medium: "⚡ *متوسط*",
  radar_cascade_accuracy: "\nتاريخياً أدق بنسبة 73% من إشارات المحفظة الواحدة.",
  radar_leaderboard: "📊 *الترتيب — كل الأوقات*\n\n🥇 Fredi9999 — +$1.2M · 2,847 صفقة · 71%\n🥈 GCR_Poly — +$890K · 1,203 صفقة · 68%\n🥉 WhaleAlert — +$654K · 3,102 صفقة · 64%\n4. CryptoSage — +$521K · 982 صفقة · 72%\n5. PredictMax — +$487K · 1,567 صفقة · 66%",
  radar_settings_toggled: (status) => `⚙️ *إعدادات الرادار*\n\nالإشعارات: ${status}\n\nاضغط مرة أخرى للتبديل.`,
  radar_enabled: "🟢 مفعل", radar_disabled: "🔴 معطل",

  signals_title: "🤖 *الإشارات* — اختر النوع:",
  signals_no_active: "🤖 *الإشارات النشطة*\n\nلا إشارات نشطة. تُنشأ عندما:\n\n🐋 *متتالية* — 3+ محافظ نخبوية تتفق\n🤖 *AI Edge* — AI يجد خطأ تسعير\n📈 *مراجحة* — فرق أسعار بين المنصات\n🧺 *سلة* — 80%+ تتفق\n\nسيتم إشعارك فوراً.",
  signal_whale: "🐋 إشارات الحيتان", signal_ai: "🤖 إشارات AI", signal_arb: "📈 المراجحة", signal_basket: "🧺 إجماع السلة", signal_all: "🔥 الكل",
  signal_none: (type) => `*${type}*\n\nلا إشارات نشطة من هذا النوع. سيتم إشعارك.`,

  arb_title: "📈 *المراجحة عبر الأسواق*\n\nمسح Polymarket vs Kalshi vs Azuro...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   الفارق: *${spread}*`,

  portfolio_title: "📁 *المحفظة الاستثمارية*",
  portfolio_empty: (balance) => `📁 *المحفظة الاستثمارية*\n\n💰 الرصيد: *$${balance} USDC*\n📊 المراكز: *0*\n📈 إجمالي P&L: *$0.00 (0%)*\n🏆 معدل الفوز: *—*\n\nافتح مركزاً من /markets أو تابع إشارة من /signals.`,
  portfolio_need_wallet: "تحتاج محفظة أولاً. استخدم /wallet.",
  btn_positions: "📊 المراكز", btn_pnl: "📈 رسم P&L",
  portfolio_no_data: "📊 لا بيانات بعد. ابدأ التداول لرؤية الإحصائيات.",

  lang_changed: "✅ تم تغيير اللغة إلى العربية",
};
