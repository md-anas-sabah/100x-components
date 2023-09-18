/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-20": "rgba(29, 155, 240, 0.24)",
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#104f7a",
        "blue-wash": "rgba(117,190,239,0.2)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        success: "#00BE74",
        error: "#8B141A",
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000",
        "neutral-twitter-blue-disabled": "#7e7e7e",
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
        48: "48px",
      },
      width: {
        155.5: "155.5px",
        300: "300px",
        334: "334px",
        390: "390px",
        442: "442px",
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
        "10px": "10px",
        100: "100px",
      },
      borderRadius: {
        "4xl": "65px",
        "5.5xl": "30px",
      },
    },
  },
  plugins: [],
};
