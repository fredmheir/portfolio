/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#8D7B68",
          secondary: "#C8B6A6",
          tertiary: "#F1DEC9",
          quaternary: "#A4907C",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "linear-gradient(to top, #753d05 0%, #f0f5f1 75%)",
        },
      },
    },
    plugins: [],
  };