/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#334155",
        'yellow': '#E1C076',
        'gray-border': '#94A3B8',
        'blue-gray': '#94A3B8',
        'light-gray': '#94A3B8',
        'soft-pink': '#F9F2E4',
        'star': ' #FFB340',
      },
      'fontSize': {
        '2.5xl': '28px',
      },
      'width': {
        '664': '664px'
      }
    },
  },
  plugins: [],
}