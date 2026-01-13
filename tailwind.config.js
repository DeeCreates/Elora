/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Baby Pink Palette (Soft & Dusty)
        primary: {
          50: '#FFF9F9',  // Very light wash
          100: '#F9F3F1', // Background color from your image
          200: '#FCE7F3',
          300: '#F9A8D4',
          400: '#E9A691', // Dusty Rose (from the UI buttons)
          500: '#D4A391', // Main Accent Pink
          600: '#B57E6D',
          DEFAULT: '#D4A391',
        },
        // Elegant Gold Accents
        gold: {
          light: '#F3E5D8',
          DEFAULT: '#D4AF37', // Classic Gold
          dark: '#A67C00',
          muted: '#C5A491',  // The "Little Gold" brownish-gold in the design
        },
        white: '#FFFFFF',
        black: '#1A1A1A', // Softer black for luxury feel
      },
      fontFamily: {
        // High-end beauty uses a mix of Serif for titles and Sans for body
        'serif': ['"Playfair Display"', 'serif'], 
        'sans': ['"Poppins"', 'sans-serif'],
        'cursive': ['"Great Vibes"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}