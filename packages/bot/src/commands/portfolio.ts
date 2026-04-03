import type { BotContext } from "../context.js";
import { portfolioKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function portfolio(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  const i = t(lang);

  if (!ctx.session.walletAddress) {
    await ctx.reply(i.portfolio_need_wallet);
    return;
  }

  await ctx.reply(i.portfolio_empty("0.00"), {
    parse_mode: "Markdown",
    reply_markup: portfolioKeyboard(lang),
  });
}
