/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false, // Keep existing CSS reset, don't conflict
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10b981',
          dark: '#059669',
          glow: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.25)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        dim: {
          DEFAULT: 'var(--color-text-muted)',
          footer: 'var(--color-footer-dim)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        page: '1120px',
      },
      animation: {
        'glow-pulse': 'ctaPulse 3s ease-in-out infinite',
        'hero-glow': 'heroGlow 8s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'spin-fast': 'spin 0.6s linear infinite',
        shake: 'shake 0.4s ease-in-out',
      },
      keyframes: {
        ctaPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16,185,129,0.25), 0 0 60px rgba(16,185,129,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(16,185,129,0.4), 0 0 80px rgba(16,185,129,0.15)' },
        },
        heroGlow: {
          '0%': { opacity: '0.7', transform: 'scale(1) translateY(0)' },
          '50%': { opacity: '1', transform: 'scale(1.03) translateY(-8px)' },
          '100%': { opacity: '0.8', transform: 'scale(0.98) translateY(4px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-4px)' },
          '40%, 80%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [],
};
