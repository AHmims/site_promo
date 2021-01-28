const {
  lightBlue
} = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        lightBlue: colors.lightBlue
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}