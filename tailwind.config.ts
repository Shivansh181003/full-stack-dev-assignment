import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        "poppins-200": ["var(--font-poppins-200)"],
        "poppins-400": ["var(--font-poppins-400)"],
      },
      colors: {
        primary: "#00B2FF",
        fill: "#192734",
        background: "#071829",
        // secondary: "#000000",
        // dark: "#000000",
        // light: "#ffffff",
      },
    },
  },
  plugins: [removeScrollBar],
};
export default config;

function removeScrollBar ({ addComponents }: any) {
  addComponents({
    ".no-scrollbar": {
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  });
}