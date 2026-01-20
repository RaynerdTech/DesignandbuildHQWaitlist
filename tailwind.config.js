/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 1. Roboto
        roboto: ['Roboto', 'sans-serif'],
        
        // 2. Abhaya Libre (The family name is "Abhaya Libre", weight is handled via class)
        abhaya: ['"Abhaya Libre"', 'serif'],
        
        // 3. SF Pro (Uses system fallbacks effectively acting as SF Pro on Mac/iOS)
        sf: [
          '"SF Pro"', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}