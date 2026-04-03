import type { Context, SessionFlavor } from "grammy";
import type { Lang } from "./i18n/index.js";

export interface SessionData {
  lang?: Lang;
  walletAddress?: string;
  radarEnabled: boolean;
  activeBaskets: string[];
}

export type BotContext = Context & SessionFlavor<SessionData>;
