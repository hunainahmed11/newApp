/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
    
  ],
  theme: {
    extend: {
      colors:{"dark-purple":"#081A51",
      'light-white':'rgba(225,255,255,0.18)',
      "purple":"#111727",
      "grey":"#273149"
      
      },
      // backgroundImage:{
      //   'hero-pattern':"url('../assets/topbannr.png')"
      // }
    },
  },
  plugins: [],
}
