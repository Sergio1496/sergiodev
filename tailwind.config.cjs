/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
        josefinMedium: ['"Josefin-medium"', ...defaultTheme.fontFamily.sans],
        josefinRegular: ['"Josefin-regular"', ...defaultTheme.fontFamily.sans],
        josefinBold: ['"Josefin-bold"', ...defaultTheme.fontFamily.sans],
        josefinSemiBold: [
          '"Josefin-semibold"',
          ...defaultTheme.fontFamily.sans,
        ],
        mulishRegular: ['"Mulish-regular"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("taos/plugin")],
};
