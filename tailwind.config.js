/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f4ed',
          100: '#f2eddf',
          200: '#e8dfc6',
          300: '#dec9a6',
          400: '#d1b384',
          500: '#c99e6a',
          600: '#bd8452',
          700: '#a36c44',
          800: '#85573d',
          900: '#6a4834',
          950: '#3b271d',
        },
        secondary: {
          50: '#f6f7f5',
          100: '#e0e8e2',
          200: '#c1d1c5',
          300: '#9db4a2',
          400: '#7a947e',
          500: '#5a7a61',
          600: '#3a5a40',
          700: '#325138',
          800: '#2b432f',
          900: '#243927',
          950: '#0f1e12',
        },
        cream: '#F5F1E3',
        sand: '#E0C9A6',
        forest: {
          light: '#5A7A61',
          DEFAULT: '#3A5A40',
          dark: '#243927',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};