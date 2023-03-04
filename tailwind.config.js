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
      },
      'fontSize': {
        '2.5xl': '28px',
      }
    },
  },
  plugins: [],
}