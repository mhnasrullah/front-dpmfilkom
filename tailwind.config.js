/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./section/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            poppins: ['Poppins, sans-serif'],
        },
    },
    colors:{
        'black' : '#101010',
        'yellow' : '#C25E00',
        'red' : '#5A0000',
        'gold' : '#A1743D',
        's-white' : '#EDE9E3',
        'white' : '#f5f5f5',
        'trans' : 'transparent'
    }
  },
  plugins: [],
}
