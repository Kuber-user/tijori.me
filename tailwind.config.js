import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF1FE',
          100: '#C2B8FF',
          500: '#5E78F0',
          600: '#3657EC',
          700: '#2C2358',
          900: '#16122C',
        },
        secondary: {
          orange: '#FD7333',
          cyan: '#30CDE7',
          purple: '#C2B8FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Tahoma', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'marquee-rtl': 'marqueeRtl 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRtl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #5E78F0 0%, #3657EC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2C2358 0%, #16122C 100%)',
      },
    },
  },
  plugins: [
    typography,
    forms,
  ],
}
