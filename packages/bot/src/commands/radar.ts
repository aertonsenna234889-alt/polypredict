import type { BotContext } from "../context.js";
import { radarKeyboard } from "../keyboards.js";
import { t } from "../i18n/index.js";

export async function radar(ctx: BotContext) {
  const lang = ctx.session.lang || "en";
  const i = t(lang);
  const status = ctx.session.radarEnabled ? i.radar_active : i.radar_inactive;

  await ctx.reply(i.radar_title(status), {
    parse_mode: "Markdown",
    reply_markup: radarKeyboard(lang),
  });
}
