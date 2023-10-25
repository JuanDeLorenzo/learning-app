/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary:{
        100: '#908683',
        300: '#7E7472',
        500: '#8A807D',
        700: '#605856',
        900: '#5A5453',
      },
      red:{
        100: '#FE6262',
        300: '#D95555',
        500: '#CA4D4D',
        700: '#A94141',
        900: '#9F3C3C',
      },
      blue:{
        100: '#8B62FE',
        300: '#694ABF',
        500: '#371CDF',
        700: '#22118B',
        900: '#1E1079',
      },
      darkWhite:{
        100: '#ACACAC',
      }
    },
    fontSize:{
      'small' : '12px',
      'medium' : '14px',
      'large' : '16px',
    }
  },
  plugins: [],
}

