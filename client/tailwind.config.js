/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#9487E8",
        background: "#F7F7F7",
        card: "#FFFFFF",
        secondary: "#363636",
        on: "09AD91",
        off: "F55454",
      },
      textColor: { white: "#F8F8FC", black: "#050505" },
      fontFamily: {
        sans: ["Fredoka", "sans-serif"],
      },
      borderColor: { main: "#9487E8" },
    },
  },
  plugins: [require("preline/plugin")],
};
