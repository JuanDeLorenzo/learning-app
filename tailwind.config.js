/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kumbh Sans', 'sans-serif'],
            },
            fontSize: {
                headline: '32px',
                display: '30px',
                title: '24px',
                body: '20px',
                label: '16px',
                labelXS: '13px',
            },
            fontWeight: {
                headline: '500',
                display: '700',
                title: '600',
                body: '400',
                label: '600',
                labelXS: '500',
            },
            colors: {
                primary: {
                    400: '#FDFCFC',
                    500: '#B8B0B0',
                    600: '#605856',
                },
                secondary: {
                    400: '#EED1D7',
                    500: '#F7D1CD',
                    600: '#E8C2CA',
                },
                greyscale: {
                    200: '#F7F7F7',
                    400: '#D2D2D2',
                    600: '#AEAEAE',
                    800: '#8C8C8C'
                },
                answer: {
                    success: '#63B08B',
                    error: '#FE6262'
                },
                notification: {
                    notification: '#CC444C'
                },
                message: {
                    read: '#33FF00',
                    user: '#2DA7FF'
                },
                typography: {
                    400: '#FFFFFF',
                    500: '#757575',
                    600: '#000000',
                    link: '#371CDF',
                    class: '#6DDE89'
                },
                course: {
                    lesson: '#E1FAE9',
                    quizzes: '#E1FAF7',
                    time: '#F9FAE1'
                },
                statistics: {
                    enrolled: '#4E7ED9',
                    completed: '#75B578',
                    time: '#F4B75C',
                    accuracy: '#F18291'
                },
            },
        }
    },
    plugins: [],
}

