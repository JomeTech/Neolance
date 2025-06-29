/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neolance': {
          dark: '#060724',
          'dark-blue': '#0A0A2A',
          'dark-purple': '#14122F',
          purple: '#4B2EB3',
          blue: '#2B5EF6',
          cyan: '#00E6F6',
          pink: '#FF2D95',
          gray: '#A1A1AA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 230, 246, 0.3), 0 0 10px rgba(0, 230, 246, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 230, 246, 0.5), 0 0 20px rgba(0, 230, 246, 0.3)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/src/assets/grid-pattern.svg")'
      }
    }
  },
  plugins: [],
};