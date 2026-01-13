import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gen Z Vibrant Palette
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        fuchsia: {
          DEFAULT: '#D946EF',
          light: '#E879F9',
          dark: '#C026D3',
          50: '#FDF4FF',
          100: '#FAE8FF',
          200: '#F5D0FE',
          300: '#F0ABFC',
          400: '#E879F9',
          500: '#D946EF',
          600: '#C026D3',
          700: '#A21CAF',
          800: '#86198F',
          900: '#701A75',
        },
        coral: {
          DEFAULT: '#FB7185',
          light: '#FDA4AF',
          dark: '#F43F5E',
        },
        // Neon Accents
        neon: {
          pink: '#FF6B9D',
          purple: '#9D4EDD',
          blue: '#00D9FF',
        },
        // Updated Base Colors with purple tint
        ink: {
          DEFAULT: '#1E1B4B',
          secondary: '#4C4687',
        },
        muted: '#9CA3AF',
        background: '#FAFAFF',
        surface: '#FFFFFF',
        border: '#E5E7EB',
        // Legacy accent for compatibility
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          light: '#EDE9FE',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25' }],
      },
      maxWidth: {
        content: '1120px',
        prose: '720px',
      },
      borderRadius: {
        card: '18px',
        button: '9999px', // Full rounded for Gen Z aesthetic
      },
      backdropBlur: {
        glass: '16px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(139, 92, 246, 0.1)',
        'card-hover': '0 8px 40px rgba(139, 92, 246, 0.2)',
        button: '0 4px 15px rgba(139, 92, 246, 0.4)',
        'button-hover': '0 8px 25px rgba(217, 70, 239, 0.5)',
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-md': '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(217, 70, 239, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(217, 70, 239, 0.4)',
        'neon-pink': '0 0 20px rgba(255, 107, 157, 0.6)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.6)',
        glass: '0 8px 32px rgba(139, 92, 246, 0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 50%, #FB7185 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)',
        'gradient-violet-fuchsia': 'linear-gradient(90deg, #8B5CF6 0%, #D946EF 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 70%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(30px, 10px) scale(1.05)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(217, 70, 239, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(217, 70, 239, 0.5)' },
        },
        'bounce-hover': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        blob: 'blob 10s ease-in-out infinite',
        'blob-slow': 'blob 15s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'bounce-hover': 'bounce-hover 0.5s ease-in-out',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        wiggle: 'wiggle 0.5s ease-in-out',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
