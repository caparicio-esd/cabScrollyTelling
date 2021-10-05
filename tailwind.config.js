const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Alegreya\\ Sans', ...defaultTheme.fontFamily.sans],
      serif: ['Alegreya', ...defaultTheme.fontFamily.serif],
    },
  },
}
