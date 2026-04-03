import type { BotContext } from "../context.js";
import { marketCategoriesKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function markets(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  await ctx.reply(t(lang).markets_title, {
    parse_mode: "Markdown",
    reply_markup: marketCategoriesKeyboard(lang),
  });
}
