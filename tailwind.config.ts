import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "primary": "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "secondary": "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "accent": "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        "popover": "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
