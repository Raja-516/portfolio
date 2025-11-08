/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#10b981',
        surface: '#0b1220'
      },
      boxShadow: {
        'neon-sm': '0 8px 30px rgba(16,185,129,0.08)',
        'glow': '0 6px 30px rgba(16,185,129,0.16)'
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(180deg, rgba(16,185,129,0.06), rgba(15,23,42,0))'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
