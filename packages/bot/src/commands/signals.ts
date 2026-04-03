import type { BotContext } from "../context.js";
import { signalsKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function signals(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  await ctx.reply(t(lang).signals_no_active, {
    parse_mode: "Markdown",
    reply_markup: signalsKeyboard(lang),
  });
}
