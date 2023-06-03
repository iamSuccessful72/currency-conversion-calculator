/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          DEFAULT: '#0092FF',
          50: '#B8E0FF',
          100: '#A3D8FF',
          200: '#7AC6FF',
          300: '#52B5FF',
          400: '#29A3FF',
          500: '#0092FF',
          600: '#0072C7',
          700: '#00528F',
          800: '#003257',
          900: '#00121F',
          950: '#000103'
        },
        'river-bed': {
          DEFAULT: '#404756',
          50: '#9AA2B4',
          100: '#8E97AB',
          200: '#77829A',
          300: '#636E85',
          400: '#515A6D',
          500: '#404756',
          600: '#282C36',
          700: '#101216',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
      },
      fontFamily: {
        "kanit": "'Kanit', sans-serif",
        "oswald": "'Oswald', sans-serif"
      }
    },
  },
  plugins: [],
}

