/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-gray': '#1d1d1f',
        'apple-light-gray': '#f5f5f7',
        'apple-text-gray': '#86868b'
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      fontSize: {
        '56': '56px',
        '48': '48px',
        '40': '40px',
        '32': '32px',
        '28': '28px',
        '24': '24px',
        '21': '21px',
        '19': '19px',
        '17': '17px'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}