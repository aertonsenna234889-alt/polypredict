import type { Translations } from "./en.js";

export const tr: Translations = {
  lang_name: "Türkçe",
  flag: "🇹🇷",

  choose_language: "🌍 Dilinizi seçin:",
  welcome: (name) => `Merhaba ${name}! 👋\n\n*PolyPredict* — tahmin piyasalarında avantajınız.\n\n🐋 *Smart Money Radar* — elit cüzdanları takip edin, 3+ balina aynı fikirde olduğunda kaskad uyarıları\n🤖 *AI Analist* — AI olasılığı piyasa fiyatına karşı değerlendirir, yanlış fiyatlamayı bulur\n📈 *Cross-Market Arbitraj* — Polymarket / Kalshi / Azuro arasında fiyat farkları\n💰 *Entegre Cüzdan* — saklama dışı, gazsız, anında\n\nNasıl çalışmak istediğinizi seçin:`,

  menu_markets: "📊 Piyasalar",
  menu_radar: "🐋 Radar",
  menu_signals: "🤖 Sinyaller",
  menu_arb: "📈 Arbitraj",
  menu_wallet: "💰 Cüzdan",
  menu_portfolio: "📁 Portföy",
  menu_open_app: "🚀 Uygulamayı Aç",
  menu_choose: "*PolyPredict* — tahmin piyasalarında avantajınız.\n\nBir bölüm seçin:",
  btn_back: "« Geri",

  help: "*PolyPredict — Tahmin Piyasası İstihbaratı*\n\n📊 /markets — Kategoriye göre piyasalar\n🐋 /radar — Smart Money Radar ve balina takibi\n🤖 /signals — AI sinyalleri ve kaskad uyarıları\n📈 /portfolio — Pozisyonlarınız ve K&Z\n💰 /wallet — Yatırma, çekme, bakiye\n🌐 /lang — Dil değiştir",

  markets_title: "📊 *Piyasalar* — bir kategori seçin:",
  cat_politics: "🏛 Politika",
  cat_crypto: "₿ Kripto",
  cat_sports: "⚽ Spor",
  cat_science: "🔬 Bilim",
  cat_entertainment: "🎬 Eğlence",
  cat_economics: "💹 Ekonomi",
  cat_trending: "🔥 Trend",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nHacim: *$${vol}* · Likidite: *$${liq}*\n\n🐋 *Smart Money:* ${whales} balina YES long\n🤖 *AI Skoru:* ${ai}% olasılık\n\nBahis yapmak için dokunun:`,

  btn_buy_yes: "✅ YES Al", btn_buy_no: "❌ NO Al", btn_whales: "🐋 Balinalar", btn_ai_analysis: "🤖 AI Analiz", btn_full_view: "📊 Tam Görünüm",
  bet_title: (outcome, price) => `*${outcome} Al* fiyat *${price}*\n\nTutar seçin veya uygulamada onaylayın:`,
  bet_confirm_app: "🔐 Uygulamada Onayla", bet_cancel: "« İptal", bet_custom: "Özel",
  bet_placed: (q, side, amount, price, shares) => `✅ *Emir verildi!*\n\nPiyasa: ${q}\nTaraf: *${side}*\nTutar: *$${amount} USDC*\nFiyat: *${price}¢*\nPay: *${shares}*\n\n/portfolio ile takip edin`,

  wallet_title: "💰 *Cüzdan*",
  wallet_no_wallet: "💰 *Cüzdan*\n\nHenüz cüzdanınız yok. Otomatik oluşturulacak — tohum cümlesi yok, saklama dışı, Turnkey ile güvenli.\n\nCüzdan oluşturuluyor...",
  wallet_created: (address) => `✅ *Cüzdan oluşturuldu!*\n\nAdres: \`${address}\`\nAğ: Polygon\nPara: USDC\n\nAnahtarlarınız donanım güvenlik bölgesinde saklanıyor.`,
  wallet_info: (address, balance) => `💰 *Cüzdan*\n\nAdres: \`${address}\`\nBakiye: *$${balance} USDC*\nAğ: Polygon`,
  btn_deposit: "📥 Yatır", btn_withdraw: "📤 Çek", btn_refresh: "🔄 Yenile", btn_history: "📜 Geçmiş",
  wallet_deposit_info: (address) => `📥 *USDC Yatır*\n\n*Polygon* ağında *USDC* gönderin:\n\`${address}\`\n\n⚠️ Sadece Polygon ağında USDC gönderin.`,
  wallet_withdraw_prompt: "📤 *Çekim*\n\nHedef adresi gönderin (Polygon USDC):",
  wallet_no_history: "📜 *İşlem Geçmişi*\n\nHenüz işlem yok.",
  wallet_create_first: "Önce /wallet ile cüzdan oluşturun",

  radar_title: (status) => `🐋 *Smart Money Radar*\n\nElit cüzdanları gerçek zamanlı takip edin.\n\n🔔 *Kaskad Uyarıları* — 3+ üst cüzdan 90 dk içinde aynı pozisyona girdiğinde tetiklenir\n🧺 *Sepetler* — uzmanlığa göre gruplar\n📊 *Sıralama* — K&Z ve kazanma oranına göre\n\nDurum: ${status}`,
  radar_active: "🟢 Aktif", radar_inactive: "🔴 Pasif",
  btn_top_whales: "🐋 Top Balinalar", btn_baskets: "🧺 Sepetler", btn_cascades: "🔔 Kaskad Uyarıları", btn_leaderboard: "📊 Sıralama", btn_settings: "⚙️ Ayarlar",
  radar_whales_title: "🐋 *Top Balinalar (30g)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — K&Z: +$${pnl} · KO: ${wr}% · Skor: ${score}`,
  radar_whales_footer: "\nTakip etmek için dokunun:",
  radar_baskets_title: "🧺 *Cüzdan Sepetleri*\n\nTemaya göre uzman cüzdan sepetleri:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} cüzdan · Konsensüs: ${consensus}% · Ort KO: ${wr}%`,
  radar_baskets_footer: "\nSepetin 80%+ anlaştığında sinyal tetiklenir.",
  radar_cascades_title: "🔔 *Kaskad Uyarıları*\n\n3+ elit cüzdan bağımsız olarak 90 dk içinde aynı pozisyona girdiğinde kaskad tetiklenir.",
  radar_cascade_strong: "⚡ *GÜÇLÜ*", radar_cascade_medium: "⚡ *ORTA*",
  radar_cascade_accuracy: "\nTarihsel olarak tek cüzdan sinyallerinden %73 daha doğru.",
  radar_leaderboard: "📊 *Sıralama — Tüm Zamanlar*\n\n🥇 Fredi9999 — +$1.2M · 2,847 işlem · 71% KO\n🥈 GCR_Poly — +$890K · 1,203 işlem · 68% KO\n🥉 WhaleAlert — +$654K · 3,102 işlem · 64% KO\n4. CryptoSage — +$521K · 982 işlem · 72% KO\n5. PredictMax — +$487K · 1,567 işlem · 66% KO",
  radar_settings_toggled: (status) => `⚙️ *Radar Ayarları*\n\nBildirimler: ${status}\n\nDeğiştirmek için tekrar dokunun.`,
  radar_enabled: "🟢 Açık", radar_disabled: "🔴 Kapalı",

  signals_title: "🤖 *Sinyaller* — tür seçin:",
  signals_no_active: "🤖 *Aktif Sinyaller*\n\nAktif sinyal yok. Sinyaller şu durumlarda üretilir:\n\n🐋 *Kaskad* — 3+ elit cüzdan anlaşır\n🤖 *AI Edge* — AI fiyat hatası bulur\n📈 *Arbitraj* — platformlar arası fiyat farkı\n🧺 *Sepet* — 80%+ sepet anlaşır\n\nAnında bildirim alacaksınız.",
  signal_whale: "🐋 Balina Sinyalleri", signal_ai: "🤖 AI Sinyalleri", signal_arb: "📈 Arbitraj", signal_basket: "🧺 Sepet Konsensüsü", signal_all: "🔥 Tüm Aktif",
  signal_none: (type) => `*${type}*\n\nBu türde aktif sinyal yok. Tetiklendiğinde bildirim alacaksınız.`,

  arb_title: "📈 *Cross-Market Arbitraj*\n\nPolymarket vs Kalshi vs Azuro taranıyor...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Fark: *${spread}*`,

  portfolio_title: "📁 *Portföy*",
  portfolio_empty: (balance) => `📁 *Portföy*\n\n💰 Bakiye: *$${balance} USDC*\n📊 Pozisyonlar: *0*\n📈 Toplam K&Z: *$0.00 (0%)*\n🏆 Kazanma Oranı: *—*\n\n/markets üzerinden pozisyon açın veya /signals sinyallerini takip edin.`,
  portfolio_need_wallet: "Önce cüzdan gerekiyor. /wallet ile oluşturun.",
  btn_positions: "📊 Pozisyonlar", btn_pnl: "📈 K&Z Grafiği",
  portfolio_no_data: "📊 Henüz veri yok. İstatistikleri görmek için işlem yapmaya başlayın.",

  lang_changed: "✅ Dil Türkçe olarak değiştirildi",
};
