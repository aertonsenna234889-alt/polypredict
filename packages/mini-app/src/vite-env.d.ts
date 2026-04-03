/// <reference types="vite/client" />

interface TelegramWebApp {
  ready(): void;
  expand(): void;
  close(): void;
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
    };
  };
  MainButton: {
    text: string;
    show(): void;
    hide(): void;
    onClick(fn: () => void): void;
  };
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export {};
