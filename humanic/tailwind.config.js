/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
        colors: {
          brandPink: '#F44876', 
        },
        animation: {
          spinSlow: 'spin 10s linear infinite',
        },
        screens: {
          'medium-desktop': {'raw': '(min-width: 1024px) and (max-width: 1250px)'},
        },
    
      },
    },
  plugins: [],
}

