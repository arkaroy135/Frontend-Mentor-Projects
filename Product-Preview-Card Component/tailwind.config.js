/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        Fraunces: "Fraunces",
        Montserrat: "Montserrat",
      },
      colors: {
        text: "#5c8369",
        "dark-cyan": "#3c5e52",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
