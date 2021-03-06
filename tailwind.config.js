const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'homepage': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/images/homepage-image.png')",
      }
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
}
