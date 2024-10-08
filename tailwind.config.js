/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ['Luckiest Guy', 'cursive'],
        metamorphous: ['Metamorphous', 'serif'],
        creepster: ['Creepster', 'cursive'],
        yatra: ['Yatra One', 'Creepster'],
        alex: ['Alex Brush', 'cursive'],
        monoton: ['Monoton', 'cursive'],
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#f35e5e' },
          '50%': { color: '#9333ea' },
        }
      },
      animation: {
        'color-change': 'colorChange 3s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}

