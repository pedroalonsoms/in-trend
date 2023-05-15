/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        beige: {
          300: "#F5F5EB",
          400: "#F2E9DB",
        },
        brown: {
          600: "#333333",
        },
        rock: {
          200: "#8E8E8E",
        },
        carrot: {
          300: "#F09164",
        },
      },
    },
  },
  plugins: [],
};
