/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    
    extend: {
      colors:{
        base:{
          "roxo": "#9d00b9",
          "rosa": "#e30096",
          "laranja": "#ff8815",
        },
      },
    },
  },
  plugins: [],
}
