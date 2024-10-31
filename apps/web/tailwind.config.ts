import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  presets: [require("@stackai/ui/tailwind.config")],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/design-system/src/**/*.{ts,tsx}",
    "../../packages/design-system/form/**/*.{ts,tsx}",
    "../../packages/design-system/index.{ts,tsx}",
  ],
} satisfies Config;

export default config;
