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
          notifHover: '#A6ACAB',
          300: '#7E7472',
          500: '#8A807D',
            600: '#C4C4C4',
            800: '#49555B',
          900: '#5A5453',
            1000: '#8C8C8C',
        },
        red:{
          button: '#FE6262',
          buttonHover: '#D95555',
          notification: '#CC444C',
          notifHover: '#943036',
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
          textHover: '#B3B3B3',
          class: '#F7F7F7'
        },
        green:{
          progress: '#33FF00',
          progressHover: '#3D8A50',
          classNumber: '#6DDE89',
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

