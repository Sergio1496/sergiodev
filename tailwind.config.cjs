/** @type {import('tailwindcss').Config} */

module.exports = {
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],

  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    transform: (content) => content.replace(/taos:/g, ""),
  },
  theme: {
    darkMode: ["class", '[data-theme="dark"]'],
    extend: {
      fontFamily: {
        josefin: ['"Josefin"', "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("taos/plugin")],
};
