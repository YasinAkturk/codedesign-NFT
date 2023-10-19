/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#5C3EAF',

    },
    fontFamily: {
      bold: ["Ubuntu-Bold"],
      medium: ["Ubuntu-Medium"],
      regular: ["Ubuntu-Regular"],
      inter: ["Inter-Black"],
    },
    extend: {},
  },
  plugins: [],
}