import { InlineKeyboard, type Bot } from "grammy";
import type { BotContext } from "../context.js";
import { t, langList, type Lang } from "../i18n/index.js";
import {
  mainMenuKeyboard,
  marketCategoriesKeyboard,
  marketDetailKeyboard,
  walletKeyboard,
  radarKeyboard,
  signalsKeyboard,
  portfolioKeyboard,
  betConfirmKeyboard,
  languageKeyboard,
} from "../keyboards.js";

function L(ctx: BotContext): Lang {
  return ctx.session.lang || "en";
}

export function registerCallbacks(bot: Bot<BotContext>) {
  // ── Language Selection ──

  bot.callbackQuery(/^lang:(.+)$/, async (ctx) => {
    const code = ctx.match[1] as Lang;
    ctx.session.lang = code;
    const i = t(code);
    const name = ctx.from?.first_name || "trader";

    await ctx.answerCallbackQuery(i.lang_changed);
    await ctx.editMessageText(i.welcome(name), {
      parse_mode: "Markdown",
      reply_markup: mainMenuKeyboard(code),
    });
  });

  bot.callbackQuery("choose_lang", async (ctx) => {
    await ctx.editMessageText(
      "🌍 *Choose your language / Выберите язык / 选择语言 / Elige tu idioma:*",
      { parse_mode: "Markdown", reply_markup: languageKeyboard() }
    );
    await ctx.answerCallbackQuery();
  });

  // ── Navigation ──

  bot.callbackQuery("home", async (ctx) => {
    const i = t(L(ctx));
    await ctx.editMessageText(i.menu_choose, {
      parse_mode: "Markdown",
      reply_markup: mainMenuKeyboard(L(ctx)),
    });
    await ctx.answerCallbackQuery();
  });

  // ── Markets ──

  bot.callbackQuery("markets", async (ctx) => {
    const i = t(L(ctx));
    await ctx.editMessageText(i.markets_title, {
      parse_mode: "Markdown",
      reply_markup: marketCategoriesKeyboard(L(ctx)),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery(/^cat:(.+)$/, async (ctx) => {
    const category = ctx.match[1];
    const lang = L(ctx);
    const i = t(lang);
    const emoji: Record<string, string> = {
      politics: "🏛", crypto: "₿", sports: "⚽",
      science: "🔬", entertainment: "🎬", economics: "💹", trending: "🔥",
    };

    const mockMarkets = [
      { id: "m1", question: "Will BTC be above $70k on May 1?", yes: 0.62, volume: "1.2M" },
      { id: "m2", question: "Will ETH reach $3k in April?", yes: 0.28, volume: "890K" },
      { id: "m3", question: "Fed rate cut in June 2026?", yes: 0.45, volume: "2.1M" },
    ];

    const lines = mockMarkets.map(
      (m, idx) =>
        `${idx + 1}. ${m.question}\n   YES: *${(m.yes * 100).toFixed(0)}¢* · Vol: $${m.volume}`
    );

    const keyboard = new InlineKeyboard();
    mockMarkets.forEach((m, idx) => keyboard.text(`${idx + 1}`, `market:${m.id}`));
    keyboard.row().text(i.btn_back, "markets");

    await ctx.editMessageText(
      `${emoji[category] || "📊"} *${category.charAt(0).toUpperCase() + category.slice(1)}*\n\n${lines.join("\n\n")}`,
      { parse_mode: "Markdown", reply_markup: keyboard }
    );
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery(/^market:(.+)$/, async (ctx) => {
    const marketId = ctx.match[1];
    const lang = L(ctx);
    const i = t(lang);

    await ctx.editMessageText(
      i.market_detail("Will BTC be above $70k on May 1?", "62", "38", "1.2M", "340K", 4, 68),
      { parse_mode: "Markdown", reply_markup: marketDetailKeyboard(lang, marketId) }
    );
    await ctx.answerCallbackQuery();
  });

  // ── Betting ──

  bot.callbackQuery(/^bet:(.+):(.+)$/, async (ctx) => {
    const [marketId, outcome] = [ctx.match[1], ctx.match[2]];
    const lang = L(ctx);
    const i = t(lang);
    const outcomeLabel = outcome === "yes" ? "YES ✅" : "NO ❌";
    const price = outcome === "yes" ? "62¢" : "38¢";

    await ctx.editMessageText(i.bet_title(outcomeLabel, price), {
      parse_mode: "Markdown",
      reply_markup: betConfirmKeyboard(lang, marketId, outcome),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery(/^exec:(.+):(.+):(.+)$/, async (ctx) => {
    const [marketId, outcome, amount] = [ctx.match[1], ctx.match[2], ctx.match[3]];
    const lang = L(ctx);
    const i = t(lang);

    if (amount === "custom") {
      await ctx.editMessageText("Send the amount in USDC (e.g. `15`):", {
        parse_mode: "Markdown",
      });
      await ctx.answerCallbackQuery();
      return;
    }

    const price = outcome === "yes" ? "62" : "38";
    const shares = (parseFloat(amount) / (outcome === "yes" ? 0.62 : 0.38)).toFixed(1);

    await ctx.editMessageText(
      i.bet_placed("Will BTC be above $70k on May 1?", outcome.toUpperCase(), amount, price, shares),
      { parse_mode: "Markdown", reply_markup: mainMenuKeyboard(lang) }
    );
    await ctx.answerCallbackQuery("✅");
  });

  // ── Wallet ──

  bot.callbackQuery("wallet", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    const address = ctx.session.walletAddress || "Not created";
    const balance = "0.00";

    await ctx.editMessageText(i.wallet_info(address, balance), {
      parse_mode: "Markdown",
      reply_markup: walletKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("w:deposit", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    const address = ctx.session.walletAddress;
    if (!address) {
      await ctx.answerCallbackQuery(i.wallet_create_first);
      return;
    }
    await ctx.editMessageText(i.wallet_deposit_info(address), {
      parse_mode: "Markdown",
      reply_markup: walletKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("w:withdraw", async (ctx) => {
    const i = t(L(ctx));
    await ctx.editMessageText(i.wallet_withdraw_prompt, { parse_mode: "Markdown" });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("w:history", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    await ctx.editMessageText(i.wallet_no_history, {
      parse_mode: "Markdown",
      reply_markup: walletKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  // ── Radar ──

  bot.callbackQuery("radar", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    const status = ctx.session.radarEnabled ? i.radar_active : i.radar_inactive;
    await ctx.editMessageText(i.radar_title(status), {
      parse_mode: "Markdown",
      reply_markup: radarKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("r:whales", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    const whales = [
      { label: "Fredi9999", pnl: "142K", wr: 74, score: 92 },
      { label: "PolyWhale", pnl: "89K", wr: 68, score: 87 },
      { label: "CryptoOracle", pnl: "67K", wr: 71, score: 85 },
      { label: "PredictKing", pnl: "54K", wr: 65, score: 81 },
      { label: "AlphaTrader", pnl: "43K", wr: 62, score: 78 },
    ];

    const lines = whales.map((w, idx) => i.radar_whale_line(idx + 1, w.label, w.pnl, w.wr, w.score));

    await ctx.editMessageText(
      `${i.radar_whales_title}\n\n${lines.join("\n")}${i.radar_whales_footer}`,
      { parse_mode: "Markdown", reply_markup: radarKeyboard(lang) }
    );
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("r:baskets", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    const baskets = [
      { emoji: "🏛", name: "Politics", wallets: 12, consensus: 85, wr: 71 },
      { emoji: "₿", name: "Crypto", wallets: 8, consensus: 78, wr: 68 },
      { emoji: "⚽", name: "Sports", wallets: 15, consensus: 82, wr: 64 },
      { emoji: "💹", name: "Economics", wallets: 6, consensus: 90, wr: 73 },
    ];

    const lines = baskets.map((b) => i.radar_basket_line(b.emoji, b.name, b.wallets, b.consensus, b.wr));

    await ctx.editMessageText(
      `${i.radar_baskets_title}\n\n${lines.join("\n")}${i.radar_baskets_footer}`,
      { parse_mode: "Markdown", reply_markup: radarKeyboard(lang) }
    );
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("r:cascades", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);

    await ctx.editMessageText(
      `${i.radar_cascades_title}

*Recent:*

${i.radar_cascade_strong} — "Fed rate cut June?" → YES
   4 whales · avg 44¢ · $82K total · 2h ago

${i.radar_cascade_medium} — "BTC above $70k May 1?" → YES
   3 whales · avg 59¢ · $45K total · 5h ago
${i.radar_cascade_accuracy}`,
      { parse_mode: "Markdown", reply_markup: radarKeyboard(lang) }
    );
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("r:leaderboard", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    await ctx.editMessageText(i.radar_leaderboard, {
      parse_mode: "Markdown",
      reply_markup: radarKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("r:settings", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    ctx.session.radarEnabled = !ctx.session.radarEnabled;
    const status = ctx.session.radarEnabled ? i.radar_enabled : i.radar_disabled;
    await ctx.answerCallbackQuery(status);
    await ctx.editMessageText(i.radar_settings_toggled(status), {
      parse_mode: "Markdown",
      reply_markup: radarKeyboard(lang),
    });
  });

  // ── Signals ──

  bot.callbackQuery("signals", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    await ctx.editMessageText(i.signals_title, {
      parse_mode: "Markdown",
      reply_markup: signalsKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery(/^s:(.+)$/, async (ctx) => {
    const type = ctx.match[1];
    const lang = L(ctx);
    const i = t(lang);
    const labels: Record<string, string> = {
      whale: i.signal_whale,
      ai: i.signal_ai,
      arb: i.signal_arb,
      basket: i.signal_basket,
      all: i.signal_all,
    };

    await ctx.editMessageText(i.signal_none(labels[type] || "Signals"), {
      parse_mode: "Markdown",
      reply_markup: signalsKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  // ── Arbitrage ──

  bot.callbackQuery("arb", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);

    const arbs = [
      i.arb_line("Trump wins 2026 midterm?", "Polymarket", "52", "Kalshi", "48", "4¢ (7.7%)"),
      i.arb_line("BTC > $80k by July?", "Polymarket", "31", "Kalshi", "27", "4¢ (12.9%)"),
      i.arb_line("Next Fed chair?", "Polymarket", "72", "Kalshi", "68", "4¢ (5.6%)"),
    ];

    await ctx.editMessageText(
      `${i.arb_title}\n\n${arbs.map((a, idx) => `${idx + 1}. ${a}`).join("\n\n")}`,
      { parse_mode: "Markdown", reply_markup: mainMenuKeyboard(lang) }
    );
    await ctx.answerCallbackQuery();
  });

  // ── Portfolio ──

  bot.callbackQuery("portfolio", async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    await ctx.editMessageText(i.portfolio_empty("0.00"), {
      parse_mode: "Markdown",
      reply_markup: portfolioKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery(/^p:(.+)$/, async (ctx) => {
    const lang = L(ctx);
    const i = t(lang);
    await ctx.editMessageText(i.portfolio_no_data, {
      parse_mode: "Markdown",
      reply_markup: portfolioKeyboard(lang),
    });
    await ctx.answerCallbackQuery();
  });
}
