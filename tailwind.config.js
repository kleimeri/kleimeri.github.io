/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        'klbg':'#1E1E1E',
        'border-kl':'00FFF0'
      },
      fontFamily:{
        'RobotoThin':['RobotoThin'],
        'border-kl':'00FFF0'
      },
    },
  },
  plugins: [],
}
