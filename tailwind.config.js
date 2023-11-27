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
          input: '#6d6868',
          data: '#B8AEAE',
          marker:'#8C8C8C'
        },
        red:{
          button: '#FE6262',
          buttonHover: '#D95555',
          notification: '#CC444C',
          notifHover: '#943036',
          error: '#FF0000'
        },
        blue:{
          button: '#8B62FE',
          buttonHover: '#694ABF',
          text: '#371CDF',
          textHover: '#1E1079',
          send: '#2DA7FF',
          sendHover: '#3037E1',
          profile: '#007AFF',
          enrolled: '#4E7ED9'

        },
        white:{
          pure: '#FFFFFF',
          hover: '#ACACAC',
          card: '#F2F6F5',
          cardHover: '#B8B4B4',
          textHover: '#B3B3B3',
          class: '#F7F7F7',
          input: '#F8F8F8',
          statistics: '#FDFCFC'
        },
        green:{
          progress: '#33FF00',
          progressHover: '#3D8A50',
          classNumber: '#6DDE89',
          profile: '#75B578',
          lesson:'#E1FAE9',
          quizzes: '#E1FAF7'
        },
        orange:{
            learning: '#F4B75C',
            time: '#F9FAE1',
        },
        black:{
            hoverBlock: '#2E2A2A',
            hoverBlockText: '#1E2325',
            cardTitle: '#394247',
            hoverBigText: '#404040',
            pure: '#000000'
        },
        pink:{
            marker: '#EED1D7',
            accuracy: '#F18291',
            background: '#E8C2CA',
            button: '#F7D1CD'
        }},
    }
  },
  plugins: [],
}

