import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#FF6600", dark: "#CC5200", light: "#FFF1E6" },
        charcoal: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
