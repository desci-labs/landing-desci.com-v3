/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {

      colors: {
        dark: {
          1: "#161616",
          2: "#00000006,",
          3: "#0000000f",
          4: "#00000017",
          5: "#0000001f",
          6: "#00000026",
          7: "#00000031",
          8: "#00000044",
          9: "#00000072",
          10: "#0000007c",
          11: "#0000009b",
          12: "#000000df",
        },
        light: {
          1: "#fcfcfc",
          2: "#ffffff09",
          3: "#ffffff12",
          4: "#ffffff1b",
          5: "#ffffff22",
          6: "#ffffff2c",
          7: "#ffffff3b",
          8: "#ffffff55",
          9: "#ffffff64",
          10: "#ffffff72",
          11: "#ffffffaf",
          12: "#ffffffed",
        },

        accent: {
         50: "#EBEDFF",
      100: "#D6DAFF",
      200: "#A8B1FF",
      300: "#808CFF",
      400: "#5263FF",
      500: "#283CFF",
      600: "#0017EB",
      700: "#0012B3",
      800: "#000C75",
      900: "#00063D"
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
