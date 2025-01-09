/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //? aplicar los estilos en estos directirios con estas extensiones => 
      "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      //? color definidis con primary,secondary,tertiary

      colors:{
        primary: '#49129C',
        secondary: {
          DEFAULT:'#B40086',
          100:'#C51297',
          200:'#831266',
        },
        tertiary: '#EF2967',
      },

      //? tipografias y sus referencias al momento de utilizar NW
      fontFamily:{
        'work-black':['WorkSans-Black','sans-serif'],
        'work-medium':['WorkSans-Medium','sans-serif'],
        'work-light':['WorkSans-Light','sans-serif'],
      }
    },
  },
  plugins: [],
}

