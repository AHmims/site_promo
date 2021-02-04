const {
  lightBlue
} = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        lightBlue: colors.lightBlue,
        custom: {
          darkBlue: "#24519E",
          lightBlue: "#89D6FA"
        }
      },
      height: {
        250: '250px',
        270: '270px',
        300: '300px',
        350: '350px',
        400: '400px',
        500: '500px',
        600: '600px'
      },
      width: {
        490: '490px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}