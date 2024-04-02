import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-pref": "url('/bg-1.jpg')",
      },
      keyframes: {},
      animation: {
        "animate-appear": "animate-appear 0.8s ease-in",
        "animate-disappear": "animate-appear 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
