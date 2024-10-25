/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        midBlue: '#1E90FF',
        darkBlue: '#156FDB',
        deepBlue: '#20222D',
        midPurple: '#9C81FE',
        darkPurple: '#8685FF',
        midGreen: '#008000',
        darkGreen: '#006100',
        midRed: '#FF0000',
        darkRed: '#CF0000',
        midGrey: '#939393',
        darkGrey: '#393939',
        almostWhite: '#f0f0f0',
        onyxBlack: '#0f0f0f'
      },
      height: {
        '18': '4.5rem'
      },
      width: {
        '18': '4.rem'
      }
    },
  },
  plugins: [],
}