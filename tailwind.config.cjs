const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        "big-caslon": ["Big Caslon", "serif"],

        sans: ["Avenir", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        beige: {
          300: "#F5F5EB",
          400: "#F2E9DB",
        },
        brown: {
          600: "#333333",
          800: "#4F3939",
        },
        rock: {
          100: "#D6D6D6",
          200: "#8E8E8E",
          700: "#474747",
        },
        carrot: {
          200: "#EFCEBB",
          400: "#EA8E56",
          600: "#F97236",
        },
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "35s slide infinite linear",
      },
      fontSize: {
        "12xl": "12rem",
        "14xl": "14rem",
      },
      lineHeight: {
        13: "3.5rem",
        "3/5": 0.6,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: ["lg:text-white"],
};
