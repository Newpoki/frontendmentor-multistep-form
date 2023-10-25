/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
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
        extend: {},
    },
    plugins: [],
}
