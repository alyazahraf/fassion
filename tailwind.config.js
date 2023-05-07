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
        'blue-gray': '#93989F',
        'light-gray': '#D3D5DA',
        // 'soft-yellow': '#E1C076',
        'soft-pink': '#F9F2E4',
        'star': ' #FFB340',
      },
      'fontSize': {
        '2.5xl': '28px',
      },
      'width': {
        '664': '664px'
      },
      'height': {
        '25': '25rem'
      }
    },
  },
  plugins: [],
}