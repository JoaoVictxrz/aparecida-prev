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
        "image-pref": "url('/bg-1.jpg')",
      },

      keyframes: {
        "animate-appear": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: " translateY(0)",
          },
        },
        "animate-disappear": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "animate-appear": "animate-appear 0.8s ease-in",
        "animate-disappear": "animate-appear 0.8s ease-out",
      },
      darkMoode: {
        dark: "dark",
      },
    },
  },
  plugins: [],
};
export default config;
