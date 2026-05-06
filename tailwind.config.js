/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          900: '#000000',
          800: '#090909',
          accent: '#dc1631',
          glow: '#ff2d50',
          gold: '#dc1631',
        },
        brand: {
          highlight: '#ffffff',
          midLight: '#7a1424',
          midDark: '#3b0f14',
          deep: '#080808',
        }
      },
      backgroundImage: theme => ({
        // diagonal full-site gradient
        'site-gradient': 'linear-gradient(135deg, #000000 0%, #12050a 28%, rgba(220,22,49,0.72) 55%, #000000 100%)',
        // softer section gradient (dark crimson mist)
        'section-gradient': 'linear-gradient(180deg, rgba(220,22,49,0.08) 0%, rgba(255,255,255,0.06) 100%)',
        // card/button accent subtle gradient
        'card-gradient': 'linear-gradient(135deg, rgba(220,22,49,0.16) 0%, rgba(255,255,255,0.05) 60%)',
      }),
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-pan-slow': 'gradient-pan 20s ease infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
