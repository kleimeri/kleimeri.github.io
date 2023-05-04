/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'klbg':'#1E1E1E',
        'border-kl':'00FFF0'
      },
      fontFamily:{
        'RobotoThin':['RobotoThin'],
        'border-kl':'00FFF0'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
