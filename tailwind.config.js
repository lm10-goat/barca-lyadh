/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#07080A',
        surface: '#0F1114',
        elevated: '#16181D',
        ink: '#F1EFE9',
        muted: '#93949A',
        faint: '#5B5C62',
        blaugrana: '#1D2C6B',
        electric: '#3355FF',
        crimson: '#B01A38',
        line: 'rgba(241,239,233,0.09)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1360px',
      },
    },
  },
  plugins: [],
}
