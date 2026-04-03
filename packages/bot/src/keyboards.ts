import { InlineKeyboard } from "grammy";
import { langList, t, type Lang } from "./i18n/index.js";

const MINI_APP_URL = process.env.MINI_APP_URL || "https://polypredict.vercel.app";

// ── Language Selection ──

export function languageKeyboard() {
  const kb = new InlineKeyboard();
  langList.forEach((l, i) => {
    kb.text(`${l.flag} ${l.name}`, `lang:${l.code}`);
    if (i % 2 === 1) kb.row();
  });
  return kb;
}

// ── Main Menu ──

export function mainMenuKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.menu_markets, "markets")
    .text(i.menu_radar, "radar")
    .row()
    .text(i.menu_signals, "signals")
    .text(i.menu_arb, "arb")
    .row()
    .text(i.menu_wallet, "wallet")
    .text(i.menu_portfolio, "portfolio")
    .row()
    .webApp(i.menu_open_app, MINI_APP_URL)
    .row()
    .text("🌐 Language", "choose_lang");
}

// ── Markets ──

export function marketCategoriesKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.cat_politics, "cat:politics")
    .text(i.cat_crypto, "cat:crypto")
    .row()
    .text(i.cat_sports, "cat:sports")
    .text(i.cat_science, "cat:science")
    .row()
    .text(i.cat_entertainment, "cat:entertainment")
    .text(i.cat_economics, "cat:economics")
    .row()
    .text(i.cat_trending, "cat:trending")
    .row()
    .text(i.btn_back, "home");
}

export function marketDetailKeyboard(lang: Lang, marketId: string) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.btn_buy_yes, `bet:${marketId}:yes`)
    .text(i.btn_buy_no, `bet:${marketId}:no`)
    .row()
    .text(i.btn_whales, `whales:${marketId}`)
    .text(i.btn_ai_analysis, `ai:${marketId}`)
    .row()
    .webApp(i.btn_full_view, `${MINI_APP_URL}/market/${marketId}`)
    .row()
    .text(i.btn_back, "markets");
}

// ── Wallet ──

export function walletKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.btn_deposit, "w:deposit")
    .text(i.btn_withdraw, "w:withdraw")
    .row()
    .text(i.btn_refresh, "wallet")
    .text(i.btn_history, "w:history")
    .row()
    .text(i.btn_back, "home");
}

// ── Radar ──

export function radarKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.btn_top_whales, "r:whales")
    .text(i.btn_baskets, "r:baskets")
    .row()
    .text(i.btn_cascades, "r:cascades")
    .text(i.btn_leaderboard, "r:leaderboard")
    .row()
    .text(i.btn_settings, "r:settings")
    .row()
    .text(i.btn_back, "home");
}

// ── Signals ──

export function signalsKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.signal_whale, "s:whale")
    .text(i.signal_ai, "s:ai")
    .row()
    .text(i.signal_arb, "s:arb")
    .text(i.signal_basket, "s:basket")
    .row()
    .text(i.signal_all, "s:all")
    .row()
    .text(i.btn_back, "home");
}

// ── Bet Confirmation ──

export function betConfirmKeyboard(lang: Lang, marketId: string, outcome: string) {
  const i = t(lang);
  return new InlineKeyboard()
    .text("$5", `exec:${marketId}:${outcome}:5`)
    .text("$10", `exec:${marketId}:${outcome}:10`)
    .text("$25", `exec:${marketId}:${outcome}:25`)
    .row()
    .text("$50", `exec:${marketId}:${outcome}:50`)
    .text("$100", `exec:${marketId}:${outcome}:100`)
    .text(i.bet_custom, `exec:${marketId}:${outcome}:custom`)
    .row()
    .webApp(i.bet_confirm_app, `${MINI_APP_URL}/bet/${marketId}/${outcome}`)
    .row()
    .text(i.bet_cancel, `market:${marketId}`);
}

// ── Portfolio ──

export function portfolioKeyboard(lang: Lang) {
  const i = t(lang);
  return new InlineKeyboard()
    .text(i.btn_positions, "p:positions")
    .text(i.btn_history, "p:history")
    .row()
    .text(i.btn_pnl, "p:pnl")
    .text(i.btn_refresh, "portfolio")
    .row()
    .webApp("📊 Dashboard", `${MINI_APP_URL}/portfolio`)
    .row()
    .text(i.btn_back, "home");
}
