/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
    'lightpink': '#DF7F8E',
     'darkpink':'#B96D79',
    
  },
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),  rgba(255, 255, 255, 0.2))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      screens: {
        // 'max-xsm': { 'max': '500px' }
      },
    }
  },
  plugins: [],
}



