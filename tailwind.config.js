/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f76d07",
        orangeDark: "#f45106",
        orangeLight: "#fa8907",
        cream: "#f7f5f2",
        gray: "#3F3F46"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};