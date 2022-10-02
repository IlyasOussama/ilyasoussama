/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  primary: {
    200: "rgb(var(--tw-clr-primary-200) / <alpha-value>)",
    300: "rgb(var(--tw-clr-primary-300) / <alpha-value>)",
    400: "rgb(var(--tw-clr-primary-400) / <alpha-value>)",
    500: "rgb(var(--tw-clr-primary-500) / <alpha-value>)",
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#222222",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0, transform: "traslateY(-100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
