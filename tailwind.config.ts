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
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0",
        primary: {
          DEFAULT: "#0F766E",
          hover: "#115E59",
          light: "#F0FDFA",
          muted: "#CCFBF1",
        },
        accent: {
          DEFAULT: "#EA580C",
          hover: "#C2410C",
          light: "#FFF7ED",
        },
        whatsapp: {
          DEFAULT: "#16A34A",
          hover: "#15803D",
          light: "#F0FDF4",
        },
        ink: {
          DEFAULT: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        medical: "0 10px 30px -10px rgba(15, 23, 42, 0.06)",
        "medical-hover": "0 20px 40px -12px rgba(15, 118, 110, 0.14)",
        floating: "0 24px 48px -12px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
