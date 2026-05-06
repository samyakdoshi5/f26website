/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        slate: {
          900: 'rgb(var(--color-slate-900) / <alpha-value>)',
          800: 'rgb(var(--color-slate-800) / <alpha-value>)',
          700: 'rgb(var(--color-slate-700) / <alpha-value>)',
          400: 'rgb(var(--color-slate-400) / <alpha-value>)',
          300: 'rgb(var(--color-slate-300) / <alpha-value>)',
          200: 'rgb(var(--color-slate-200) / <alpha-value>)',
        },
        gray: {
          800: 'rgb(var(--color-gray-800) / <alpha-value>)',
          700: 'rgb(var(--color-gray-700) / <alpha-value>)',
          400: 'rgb(var(--color-gray-400) / <alpha-value>)',
          300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        },
        red: {
          600: 'rgb(var(--color-red-600) / <alpha-value>)',
          500: 'rgb(var(--color-red-500) / <alpha-value>)',
        },
        blue: {
          600: 'rgb(var(--color-blue-600) / <alpha-value>)',
          500: 'rgb(var(--color-blue-500) / <alpha-value>)',
          200: 'rgb(var(--color-blue-200) / <alpha-value>)',
        },
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
        'hero-fade': 'var(--gradient-hero-fade)',
        'modal-header-gallery': 'var(--gradient-modal-header-gallery)',
        'modal-header-flagships': 'var(--gradient-modal-header-flagships)',
      }),
      boxShadow: theme => ({
        'tech-gold': 'var(--shadow-tech-gold)',
        'tech-gold-soft': 'var(--shadow-tech-gold-soft)',
        header: 'var(--shadow-header)',
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
