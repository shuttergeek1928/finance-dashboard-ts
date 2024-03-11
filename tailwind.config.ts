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
    },
    customGradients: {
      landingPageGradient: {
        "gradient-b-1": "bg-gradient-to-b from-[#ffeac8]/50 to-[#c3fff9]/50",
        "gradient-t-1": "bg-gradient-to-t from-[#ffeac8]/50 to-[#c3fff9]/50",
      },
    },
  },
  plugins: [],
};
export default config;
