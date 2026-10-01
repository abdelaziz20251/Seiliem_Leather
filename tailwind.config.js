/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          darkest: '#120d09',
          espresso: '#1F150F',
          dark: '#2A1C14',
          cognac: '#6F3819',
          'cognac-rich': '#85421B',
          tan: '#B87333',
          'tan-light': '#C68642',
          amber: '#D97706',
          honey: '#DDA15E',
          sand: '#E9D8A6',
          cream: '#FAF6F0',
          parchment: '#F5EFE6',
          brass: '#C5A059',
          'brass-light': '#DFB76C',
          'brass-dark': '#9A7734',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        display: ['Cairo', 'serif'],
      },
      boxShadow: {
        'leather': '0 10px 30px -10px rgba(31, 21, 15, 0.15)',
        'leather-lg': '0 20px 40px -15px rgba(31, 21, 15, 0.25)',
        'brass-glow': '0 0 25px rgba(197, 160, 89, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      }
    },
  },
  plugins: [],
}
