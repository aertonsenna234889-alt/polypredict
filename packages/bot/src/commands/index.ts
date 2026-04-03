import type { Bot } from "grammy";
import type { BotContext } from "../context.js";
import { t } from "../i18n/index.js";
import { languageKeyboard } from "../keyboards.js";
import { start } from "./start.js";
import { markets } from "./markets.js";
import { wallet } from "./wallet.js";
import { radar } from "./radar.js";
import { signals } from "./signals.js";
import { portfolio } from "./portfolio.js";

export function registerCommands(bot: Bot<BotContext>) {
  bot.command("start", start);
  bot.command("markets", markets);
  bot.command("wallet", wallet);
  bot.command("radar", radar);
  bot.command("signals", signals);
  bot.command("portfolio", portfolio);
  bot.command("help", help);
  bot.command("lang", lang);
}

async function help(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  await ctx.reply(t(lang).help, { parse_mode: "Markdown" });
}

async function lang(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  await ctx.reply(t(lang).choose_language, {
    reply_markup: languageKeyboard(),
  });
}
