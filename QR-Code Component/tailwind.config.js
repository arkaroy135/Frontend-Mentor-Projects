/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        outfit: "Outfit",
      },
      colors: {
        "light-gray": "#d6e2f0",
        "grayish blue": "#7b879d",
        "dark blue": "#1f3251",
      },
    },
  },
  plugins: [],
};
