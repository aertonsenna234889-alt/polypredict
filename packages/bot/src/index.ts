import "dotenv/config";
import { Bot, session } from "grammy";
import { registerCommands } from "./commands/index.js";
import { registerCallbacks } from "./callbacks/index.js";
import type { BotContext } from "./context.js";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is required");

const bot = new Bot<BotContext>(token);

// Session for per-user state
bot.use(
  session({
    initial: (): BotContext["session"] => ({
      walletAddress: undefined,
      radarEnabled: false,
      activeBaskets: [],
    }),
  })
);

// Register all command handlers
registerCommands(bot);

// Register callback query handlers (inline keyboard buttons)
registerCallbacks(bot);

// Error handling
bot.catch((err) => {
  console.error("Bot error:", err);
});

// Start
bot.start({
  onStart: (info) => {
    console.log(`🤖 PolyPredict bot started as @${info.username}`);
  },
});
