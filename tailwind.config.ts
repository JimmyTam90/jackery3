import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#FF6600", dark: "#CC5200", light: "#FFF1E6" },
        charcoal: "#1A1A1A",
        ink: "#111317",
        panel: "#1A1D24",
        line: "#2A2E38",
      },
    },
  },
  plugins: [],
};
export default config;
