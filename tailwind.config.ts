import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/assets/noise.png')",
      },
      transitionTimingFunction: {
        "out-circle": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      colors: {
        "primary-lavender": "#564B74",
        "primary-cream": "#F8F5EC",
        "secondary-cream": "#EFC19B",
        "secondary-pink": "#FB7AE9",
        "secondary-wisteria": "#C28CFF",
      },
      animation: {
        noise: "noise 1s steps(2) infinite",
        carrousel: "carrousel 30s linear infinite",
      },
      keyframes: {
        carrousel: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        noise: {
          "0%": {
            transform: "translate3d(0, 9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem, -4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem, 0)",
          },
          "40%": {
            transform: "translate3d(-2rem, 7rem, 0)",
          },
          "50%": {
            transform: "translate3d(-9rem, -4rem, 0)",
          },
          "60%": {
            transform: "translate3d(2rem, 6rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem, -8rem, 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem, -5rem, 0)",
          },
          to: {
            transform: "translate3d(-7rem, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
