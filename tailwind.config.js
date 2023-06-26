/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF0000',
        'light-gray': '#C9C9C9',
        'light-black': "#00000094",
        'blue': '#146C94',
        'yellow': '#FDCD0E',
        'white': "#ffffff"
      },
    },
  },
  plugins: [],
}

