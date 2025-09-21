/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        card: '#1a1a1a',
        accent: '#d4af37',
        success: '#d4af37',
        muted: '#cccccc',
        // Extended luxury palette
        'luxury-gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'cosmic-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#d4af37',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px #d4af37',
        cosmic: '0 0 20px rgba(255,255,255,0.2)',
        'luxury': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(212, 175, 55, 0.08)',
        'luxury-lg': '0 16px 48px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(212, 175, 55, 0.12)',
        'cosmic-glow': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
        'cosmic-glow-lg': '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'cosmic-shift': 'cosmic-shift 6s ease-in-out infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
        'portal-shimmer': 'portal-shimmer 4s ease-in-out infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'luxury-shimmer': 'luxury-shimmer 3s ease-in-out infinite',
        'cosmic-drift': 'cosmic-drift 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        'cosmic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 100%' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'border-rotate': {
          '0%': { 
            background: 'linear-gradient(45deg, #1a1a1a, #1a1a1a) padding-box, linear-gradient(45deg, #d4af37, #d4af37, #d4af37) border-box'
          },
          '100%': { 
            background: 'linear-gradient(45deg, #1a1a1a, #1a1a1a) padding-box, linear-gradient(45deg, #d4af37, #d4af37, #d4af37) border-box'
          },
        },
        'cosmic-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'portal-shimmer': {
          '0%, 100%': { opacity: '0.1', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.3', transform: 'translateX(100%)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px) rotate(180deg)' },
          '75%': { transform: 'translateY(-15px) translateX(5px) rotate(270deg)' },
        },
        'luxury-shimmer': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(100%) skewX(-12deg)' },
        },
        'cosmic-drift': {
          '0%': { transform: 'translateX(-100vw) translateY(0px)' },
          '100%': { transform: 'translateX(100vw) translateY(-100px)' },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(74, 158, 255, 0.05) 100%)',
        'cosmic-gradient': 'linear-gradient(45deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #eab308 50%, #d4af37 100%)',
        'cosmic-radial': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        'luxury': '12px',
        'cosmic': '20px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'luxury': '0.75rem',
        'cosmic': '1rem',
      },
    },
  },
  plugins: [],
}

