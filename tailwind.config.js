const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-purple': '#c383fb',
        react: '#61dafb',
        nodejs: '#5FA04E',
        js: '#F7DF1E'
      },
      boxShadow: {
        'app-black': '5px 5px 0px #000000',
        'app-picture': '5px 5px 0px #c383fb',
      },
      fontFamily: {
        mono: ['var(--fira-code)', ...fontFamily.mono]
      },
      keyframes: {
        js: {
          '0%': {
            transform: 'translate(0)'
          },
          '25%': {
            transform: 'translate(5rem, -5rem)'
          },
          '75%': {
            transform: 'translate(-5rem, 10rem)'
          },
          '100%': {
            transform: 'translate(0)'
          }
        },
        nodejs: {
          '0%': {
            transform: 'translate(0)'
          },
          '50%': {
            transform: 'translate(-3rem, 7rem)'
          },
          '75%': {
            transform: 'translate(0, 5rem)'
          },
          '100%': {
            transform: 'translate(0)'
          }
        },
        react: {
          '0%': {
            transform: 'translate(0)'
          },
          '50%': {
            transform: 'translate(5rem, 0)'
          },
          '75%': {
            transform: 'translate(3.5rem, -5rem)'
          },
          '100%': {
            transform: 'translate(0)'
          }
        }
      },
      animation: {
        js: 'js 10s ease-in-out infinite',
        nodejs: 'nodejs 7s ease-in-out infinite',
        react: 'react 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
