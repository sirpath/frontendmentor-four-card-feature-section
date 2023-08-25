/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        
      },
      colors: {
        primary: "hsl(234, 12%, 34%)",
        secondary: "hsl(229, 6%, 66%)",
        rear: "hsl(0, 0%, 98%)",
        boxred: "hsl(0, 78%, 62%)",
        boxcyan: "hsl(180, 62%, 55%)",
        boxorange: "hsl(34, 97%, 64%)",
        boxblue: "hsl(212, 86%, 64%)",
      }
    },
  },
  plugins: [],
}

