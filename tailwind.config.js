/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {colors:{
        primary:{
          button: '#605856',
          hoverButton: '#908683',
          edit: '#767680',
          hoverBlock: '#AEAEAE',
          blockText: '#757575',
          anotherText: '#D2D2D2',
          categoryHover: '#C3CBC9',
          300: '#7E7472',
            400: '#A6ACAB',
          500: '#8A807D',
            600: '#C4C4C4',
            800: '#49555B',
          900: '#5A5453',
            1000: '#8C8C8C',
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
          button: '#8B62FE',
          buttonHover: '#694ABF',
          text: '#371CDF',
          textHover: '#1E1079',
          send: '#2DA7FF',
          sendHover: '#3037E1',
          profile: '#007AFF'

        },
        white:{
          pure: '#FFFFFF',
          hover: '#ACACAC',
          card: '#F2F6F5',
          cardHover: '#B8B4B4',
          textHover: '#B3B3B3'
        },
        green:{
          progress: '#33FF00',
          progressHover: '#3D8A50',
            300:'#E1FAE9',
            400: '#E1FAF7'
        },
        orange:{
            100: '#F9FAE1',
        },
        black:{
            hoverBlock: '#2E2A2A',
            hoverBlockText: '#1E2325',
            cardTitle: '#394247',
            hoverBigText: '#404040',
            pure: '#000000'
        },
        pink:{
            200: '#EED1D7',
            background: '#E8C2CA'
        }},
    }
  },
  plugins: [],
}

