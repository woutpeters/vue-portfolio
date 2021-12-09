const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
    extend: {
      colors: {
        teal: colors.teal,
        indigo: colors.indigo,
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
      }
    },
    fontFamily: {
      'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      'serif': ['Vollkorn', ...defaultTheme.fontFamily.serif]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};