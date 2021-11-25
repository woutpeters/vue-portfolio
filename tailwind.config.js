const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.vue','./src/**/*.js','./src/**/*.jsx','./src/**/*.html','./src/**/*.md',], 
    options: {
      safelist: [/^carousel/],
    }
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',
        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [require('@tailwindcss/forms')],
};