/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          900: 'rgb(var(--color-tech-900) / <alpha-value>)',
          800: 'rgb(var(--color-tech-800) / <alpha-value>)',
          accent: 'rgb(var(--color-tech-accent) / <alpha-value>)',
          glow: 'rgb(var(--color-tech-glow) / <alpha-value>)',
          gold: 'rgb(var(--color-tech-gold) / <alpha-value>)',
        },
        brand: {
          highlight: 'rgb(var(--color-brand-highlight) / <alpha-value>)',
          midLight: 'rgb(var(--color-brand-mid-light) / <alpha-value>)',
          midDark: 'rgb(var(--color-brand-mid-dark) / <alpha-value>)',
          deep: 'rgb(var(--color-brand-deep) / <alpha-value>)',
        }
      },
      backgroundImage: theme => ({
        // diagonal full-site gradient
        'site-gradient': 'var(--gradient-site)',
        // softer section gradient (dark crimson mist)
        'section-gradient': 'var(--gradient-section)',
        // card/button accent subtle gradient
        'card-gradient': 'var(--gradient-card)',
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
