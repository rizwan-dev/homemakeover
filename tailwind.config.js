module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2A40', // Deep Navy
          light: '#2C3E55',
          dark: '#111B2A',
        },
        secondary: {
          DEFAULT: '#F5E6D3', // Warm Beige
          light: '#FAF2E8',
          dark: '#E6D2B9',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E6C95B',
          dark: '#B8901C',
        },
        neutral: {
          DEFAULT: '#E0E0E0', // Soft Gray
          dark: '#BDBDBD',
        },
        text: {
          DEFAULT: '#2C2C2C', // Charcoal
          light: '#4D4D4D',
        },
        background: {
          DEFAULT: '#FFFFFF', // Clean white background
          subtle: '#FAFAFA',
        },
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
