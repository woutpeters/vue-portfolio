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
      'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      'serif': ['Vollkorn', ...defaultTheme.fontFamily.serif]
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
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [require('@tailwindcss/forms')],
};