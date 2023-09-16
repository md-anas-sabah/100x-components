/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-20": "rgba(29, 155, 240, 0.24)",
        "neutral-50": "#f9f9f9",
        "neutral-1000": "#000000",
      },
      boxShadow: {
        custom: "0px 8px 16px 0px rgba(0, 0, 0, 0.25);",
      },
      backdropBlur: {
        custom: "23.668209075927734px",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        "px-regular": ["Inter", "sans-serif"],
        chirp: ["Chirp", "sans-serif"],
      },
      fontSize: {
        2.5: "26px",
      },
      width: {
        155.5: "155.5px",
        390: "390px",
        300: "300px",
      },
      height: {
        px: "1px",
        50: "50px",
        150: "150px",
      },
      padding: {
        236.5: "236.5px",
        178.436: "178.436px",
      },
      gap: {
        100: "100px",
      },
      borderRadius: {
        "4xl": "65px",
      },
    },
  },
  plugins: [],
};
