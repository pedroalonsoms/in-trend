/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "240px",
      },
      colors: {
        beige: {
          300: "#F5F5EB",
          400: "#F2E9DB",
        },
        brown: {
          600: "#333333",
        },
        rock: {
          100: "#D6D6D6",
          200: "#8E8E8E",
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
        "3/4": 0.75,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: ["lg:text-white"],
};
