/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF0000",
        "primary-pink": "#FF007A",
        "secondary-pink": "#FF00F5",
        "primary-orange": "#FF5C00",
      },
      padding: {
        "side": "3rem"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-400px * 5))' },
        },
        'blink': {
          '50%': {
            opacity: 0,
          }
        }
      }
    },
  },
  plugins: [],
});