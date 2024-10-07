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
    },
  },
  plugins: [],
}

