import type { BotContext } from "../context.js";
import { walletKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function wallet(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  const i = t(lang);
  const address = ctx.session.walletAddress;

  if (!address) {
    await ctx.reply(i.wallet_no_wallet, { parse_mode: "Markdown" });

    const mockAddress = "0x" + "a".repeat(40);
    ctx.session.walletAddress = mockAddress;

    await ctx.reply(i.wallet_created(mockAddress), {
      parse_mode: "Markdown",
      reply_markup: walletKeyboard(lang),
    });
    return;
  }

  const balance = "0.00";
  await ctx.reply(i.wallet_info(address, balance), {
    parse_mode: "Markdown",
    reply_markup: walletKeyboard(lang),
  });
}
