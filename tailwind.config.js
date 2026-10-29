/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zap: {
          pink: '#FF32B8',
          aqua: '#38E5D0',
          lime: '#C5FF3D',
          orange: '#FF873D',
          violet: '#8957FF',
          navy: '#17152B',
          white: '#FFFFFF',
          mist: '#F4F2FB',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        bob: 'bob 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
