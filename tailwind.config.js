/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {colors:{
        primary:{
          100: '#908683',
            200: '#D2D2D2',
          300: '#7E7472',
            400: '#A6ACAB',
          500: '#8A807D',
            600: '#C4C4C4',
          700: '#605856',
          800: '#49555B',
          900: '#5A5453',
            1000: '#8C8C8C'
        },
        red:{
          100: '#FE6262',
          300: '#D95555',
          500: '#CA4D4D',
          700: '#A94141',
            800: '#943036',
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
          300: '#F2F6F5',
            400: '#AEAEAE',
            500: '#FFFFFF'
        },
        green:{
          100: '#33FF00',
            200: '#3D8A50'
        },
        black:{
            100: '#2E2A2A',
            200: '#394247',
            900: '#000000'
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

