/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "coral-red": "#F33F3F",
        "light-silver": "#D9D9D94D",
        gainsboro: "#E1E1E1",
        gray12: "#1F1F1F",
        "dusty-gray": "#9A9A9A",
        "white-opacity": "#FFFFFF1A",
        "gray-opacity": "#D9D9D91A",
        redd: "#A41B1B",
        "white-blur": "#00000099",
      },
    },
  },
  plugins: [],
};
