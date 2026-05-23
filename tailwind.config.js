/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0806',
          900: '#100D09',
          800: '#1A1510',
          700: '#241D16',
          600: '#332B20',
        },
        gold: {
          50:  '#FDF8EE',
          100: '#FAF0D3',
          200: '#F4DFA0',
          300: '#EBCA66',
          400: '#DEB042',
          500: '#C89B3C',
          600: '#A87E2E',
          700: '#7E5E20',
          800: '#543E14',
          900: '#2A1F0A',
        },
        cream: {
          50:  '#FDFAF5',
          100: '#F8F3E8',
          200: '#EDE5D0',
          300: '#DDD0B4',
          400: '#C4B08A',
          500: '#A89060',
        },
        coral: {
          400: '#E07A5F',
          500: '#C96A50',
        },
        indigo: {
          400: '#8B6FCC',
          500: '#7558B8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      scale: {
        '108': '1.08',
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease forwards',
        'fade-in':  'fadeIn 0.5s ease forwards',
        'float':    'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
