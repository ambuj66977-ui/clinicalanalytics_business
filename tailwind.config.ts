import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f6f1e8",
        ink: "#1f2223",
        muted: "#5c6468",
        line: "#e5dccd",
        gold: "#b88746",
        sand: "#f3ece1",
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Palatino", "serif"],
      },
      boxShadow: {
        card: "0 16px 40px rgba(67, 52, 33, 0.08)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(184, 135, 70, 0.16), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
