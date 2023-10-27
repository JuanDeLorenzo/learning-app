/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {colors:{
        primary:{
          100: '#908683',
          300: '#7E7472',
          500: '#8A807D',
          700: '#605856',
          800: '#49555B',
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
          200: '#2DA7FF',
          300: '#694ABF',
          500: '#371CDF',
          700: '#22118B',
          800: '#3037E1',
          900: '#1E1079',
        },
        white:{
          100: '#ACACAC',
          200: '#F7F7F7',
        }},
    },
    fontSize:{
      'small' : '12px',
      'medium' : '14px',
      'large' : '16px',
    }
  },
  plugins: [],
}

