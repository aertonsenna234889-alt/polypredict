import type { BotContext } from "../context.js";
import { languageKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function start(ctx: BotContext) {
  // If no language set yet, show language picker first
  if (!ctx.session.lang) {
    await ctx.reply("🌍 *Welcome to PolyPredict!*\n\nChoose your language / Выберите язык / 选择语言 / Elige tu idioma:", {
      parse_mode: "Markdown",
      reply_markup: languageKeyboard(),
    });
    return;
  }

  // Language already set — show main welcome
  const { mainMenuKeyboard } = await import("../keyboards.js");
  const lang = ctx.session.lang;
  const name = ctx.from?.first_name || "trader";

  await ctx.reply(t(lang).welcome(name), {
    parse_mode: "Markdown",
    reply_markup: mainMenuKeyboard(lang),
  });
}
