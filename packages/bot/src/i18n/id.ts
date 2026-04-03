import type { Translations } from "./en.js";

export const id: Translations = {
  lang_name: "Bahasa Indonesia", flag: "🇮🇩",
  choose_language: "🌍 Pilih bahasa Anda:",
  welcome: (name) => `Halo ${name}! 👋\n\n*PolyPredict* — keunggulan Anda di pasar prediksi.\n\n🐋 *Smart Money Radar* — lacak dompet elit, peringatan kaskade saat 3+ paus setuju\n🤖 *Analis AI* — AI menilai probabilitas vs harga pasar, menemukan kesalahan harga\n📈 *Arbitrase cross-market* — selisih harga antara Polymarket / Kalshi / Azuro\n💰 *Dompet bawaan* — non-custodial, tanpa gas, instan\n\nPilih cara kerja:`,

  menu_markets: "📊 Pasar", menu_radar: "🐋 Radar", menu_signals: "🤖 Sinyal", menu_arb: "📈 Arbitrase", menu_wallet: "💰 Dompet", menu_portfolio: "📁 Portofolio", menu_open_app: "🚀 Buka Aplikasi",
  menu_choose: "*PolyPredict* — keunggulan Anda di pasar prediksi.\n\nPilih bagian:", btn_back: "« Kembali",

  help: "*PolyPredict — Intelijen Pasar Prediksi*\n\n📊 /markets — Jelajahi pasar\n🐋 /radar — Smart Money Radar\n🤖 /signals — Sinyal AI\n📈 /portfolio — Posisi & P&L\n💰 /wallet — Setor, tarik, saldo\n🌐 /lang — Ubah bahasa",

  markets_title: "📊 *Pasar* — pilih kategori:",
  cat_politics: "🏛 Politik", cat_crypto: "₿ Kripto", cat_sports: "⚽ Olahraga", cat_science: "🔬 Sains", cat_entertainment: "🎬 Hiburan", cat_economics: "💹 Ekonomi", cat_trending: "🔥 Tren",

  market_detail: (q, yes, no, vol, liq, whales, ai) => `📊 *${q}*\n\nYES: *${yes}¢* · NO: *${no}¢*\nVolume: *$${vol}* · Likuiditas: *$${liq}*\n\n🐋 *Smart Money:* ${whales} paus long YES\n🤖 *Skor AI:* ${ai}% probabilitas\n\nKetuk untuk bertaruh:`,

  btn_buy_yes: "✅ Beli YES", btn_buy_no: "❌ Beli NO", btn_whales: "🐋 Paus", btn_ai_analysis: "🤖 Analisis AI", btn_full_view: "📊 Lihat Lengkap",
  bet_title: (outcome, price) => `*Beli ${outcome}* harga *${price}*\n\nPilih jumlah atau konfirmasi di aplikasi:`,
  bet_confirm_app: "🔐 Konfirmasi di App", bet_cancel: "« Batal", bet_custom: "Kustom",
  bet_placed: (q, side, amount, price, shares) => `✅ *Order ditempatkan!*\n\nPasar: ${q}\nSisi: *${side}*\nJumlah: *$${amount} USDC*\nHarga: *${price}¢*\nSaham: *${shares}*\n\nLacak di /portfolio`,

  wallet_title: "💰 *Dompet*",
  wallet_no_wallet: "💰 *Dompet*\n\nAnda belum punya dompet. Akan dibuat otomatis — tanpa seed phrase, non-custodial, diamankan Turnkey.\n\nMembuat dompet...",
  wallet_created: (address) => `✅ *Dompet dibuat!*\n\nAlamat: \`${address}\`\nJaringan: Polygon\nMata uang: USDC\n\nKunci Anda disimpan di hardware enclave yang aman.`,
  wallet_info: (address, balance) => `💰 *Dompet*\n\nAlamat: \`${address}\`\nSaldo: *$${balance} USDC*\nJaringan: Polygon`,
  btn_deposit: "📥 Setor", btn_withdraw: "📤 Tarik", btn_refresh: "🔄 Perbarui", btn_history: "📜 Riwayat",
  wallet_deposit_info: (address) => `📥 *Setor USDC*\n\nKirim *USDC* di jaringan *Polygon* ke:\n\`${address}\`\n\n⚠️ Hanya kirim USDC di jaringan Polygon.`,
  wallet_withdraw_prompt: "📤 *Tarik*\n\nKirim alamat tujuan (Polygon USDC):",
  wallet_no_history: "📜 *Riwayat Transaksi*\n\nBelum ada transaksi.",
  wallet_create_first: "Buat dompet dulu dengan /wallet",

  radar_title: (status) => `🐋 *Smart Money Radar*\n\nLacak dompet elit secara real-time.\n\n🔔 *Peringatan Kaskade* — saat 3+ dompet top masuk posisi sama dalam 90 menit\n🧺 *Keranjang* — grup berdasarkan keahlian\n📊 *Peringkat* — terbaik berdasarkan P&L & win rate\n\nStatus: ${status}`,
  radar_active: "🟢 Aktif", radar_inactive: "🔴 Tidak Aktif",
  btn_top_whales: "🐋 Top Paus", btn_baskets: "🧺 Keranjang", btn_cascades: "🔔 Kaskade", btn_leaderboard: "📊 Peringkat", btn_settings: "⚙️ Pengaturan",
  radar_whales_title: "🐋 *Top Paus (30h)*",
  radar_whale_line: (i, label, pnl, wr, score) => `${i}. *${label}* — P&L: +$${pnl} · WR: ${wr}% · Skor: ${score}`,
  radar_whales_footer: "\nKetuk untuk melacak:",
  radar_baskets_title: "🧺 *Keranjang Dompet*\n\nKeranjang pakar berdasarkan topik:",
  radar_basket_line: (emoji, name, wallets, consensus, wr) => `${emoji} *${name}* — ${wallets} dompet · Konsensus: ${consensus}% · Rata-rata WR: ${wr}%`,
  radar_baskets_footer: "\nSinyal saat 80%+ keranjang setuju.",
  radar_cascades_title: "🔔 *Peringatan Kaskade*\n\nSaat 3+ dompet elit secara independen masuk posisi sama dalam 90 menit.",
  radar_cascade_strong: "⚡ *KUAT*", radar_cascade_medium: "⚡ *SEDANG*",
  radar_cascade_accuracy: "\nSecara historis 73% lebih akurat dari sinyal dompet tunggal.",
  radar_leaderboard: "📊 *Peringkat — Sepanjang Masa*\n\n🥇 Fredi9999 — +$1.2M · 2,847 trade · 71% WR\n🥈 GCR_Poly — +$890K · 1,203 trade · 68% WR\n🥉 WhaleAlert — +$654K · 3,102 trade · 64% WR\n4. CryptoSage — +$521K · 982 trade · 72% WR\n5. PredictMax — +$487K · 1,567 trade · 66% WR",
  radar_settings_toggled: (status) => `⚙️ *Pengaturan Radar*\n\nNotifikasi: ${status}\n\nKetuk lagi untuk mengubah.`,
  radar_enabled: "🟢 Aktif", radar_disabled: "🔴 Nonaktif",

  signals_title: "🤖 *Sinyal* — pilih jenis:",
  signals_no_active: "🤖 *Sinyal Aktif*\n\nTidak ada sinyal aktif. Sinyal dibuat saat:\n\n🐋 *Kaskade* — 3+ dompet elit setuju\n🤖 *AI Edge* — AI menemukan kesalahan harga\n📈 *Arbitrase* — selisih harga antar platform\n🧺 *Keranjang* — 80%+ setuju\n\nAnda akan diberitahu secara instan.",
  signal_whale: "🐋 Sinyal Paus", signal_ai: "🤖 Sinyal AI", signal_arb: "📈 Arbitrase", signal_basket: "🧺 Konsensus", signal_all: "🔥 Semua Aktif",
  signal_none: (type) => `*${type}*\n\nTidak ada sinyal aktif tipe ini. Anda akan diberitahu.`,

  arb_title: "📈 *Arbitrase Cross-Market*\n\nMemindai Polymarket vs Kalshi vs Azuro...",
  arb_line: (q, p1, price1, p2, price2, spread) => `"${q}"\n   ${p1} YES: *${price1}¢* · ${p2} YES: *${price2}¢*\n   Spread: *${spread}*`,

  portfolio_title: "📁 *Portofolio*",
  portfolio_empty: (balance) => `📁 *Portofolio*\n\n💰 Saldo: *$${balance} USDC*\n📊 Posisi: *0*\n📈 Total P&L: *$0.00 (0%)*\n🏆 Win Rate: *—*\n\nBuka posisi dari /markets atau ikuti sinyal dari /signals.`,
  portfolio_need_wallet: "Butuh dompet dulu. Gunakan /wallet.",
  btn_positions: "📊 Posisi", btn_pnl: "📈 Grafik P&L",
  portfolio_no_data: "📊 Belum ada data. Mulai trading untuk melihat statistik.",

  lang_changed: "✅ Bahasa diubah ke Bahasa Indonesia",
};
