import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1F2B",
        cream: "#F7F4EE",
        moss: "#4A7C59",
        mossdark: "#33573F",
        clay: "#C24C3B",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
