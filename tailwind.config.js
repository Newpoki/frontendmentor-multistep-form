/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        screens: {
            desktop: '1440px',
        },
        fontFamily: {
            ubuntu: 'Ubuntu',
        },
        colors: {
            blue50: '#EFF5FF',
            grey200: '#D6D9E6',
            blue800: '#022959',
            grey500: '#9699AA',
            blue300: '#ABBCFF',
            grey300: '#D6D9E6',
            orange500: '#FFAF7E',
            pink500: '#F9818E',
            purple500: '#483EFF',
            red500: '#EE374A',
            blue100: '#BEE2FD',
            grey100: '#F8F9FF',
            white: '#FFF',
            transparent: 'transparent',
        },
        boxShadow: {
            default: '0px 25px 40px -20px rgba(0, 0, 0, 0.10)',
            none: 'none',
        },
        fontSize: {
            'body-l': [
                '16px',
                {
                    lineHeight: '25px',
                    fontWeight: '400',
                },
            ],
        },
        extend: {
            backgroundImage: {
                mobile: "url('/bg-sidebar-mobile.svg')",
                desktop: "url('/bg-sidebar-desktop.svg')",
            },
            borderWidth: {
                1: 1,
            },
            keyframes: {
                'slide-in': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-100dvw)',
                    },

                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                slideIn: 'slide-in 0.5s ease-out forwards',
            },
        },
    },
    plugins: [],
}
