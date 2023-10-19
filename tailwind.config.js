/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#5C3EAF',
    },
    fontFamily: {
      bold: ["Ubuntu-Bold"],
      medium: ["Ubuntu-Medium"],
      regular: ["Ubuntu-Regular"],
    },
    extend: {},
  },
  plugins: [],
}