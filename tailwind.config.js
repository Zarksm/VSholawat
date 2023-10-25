/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Quisand': ['Quicksand', 'sans-serif'],
      'Sche': ['Scheherazade New', 'serif'],
    },
    
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {

      backgroundImage: {
        'bg-custom': "url('./src/assets/bg2.jpg')",
      },

      colors: {
        'primary': '#222831',
        'secondary': '#393E46',
        'greend':'#183D3D',
        'greenl': '#00ADB5',
        'light' : '#EEEEEE',
        'dark' : '#202124',
        'ldark' : '#202124',
        'lwhite': '#ffffff',

        
        // 'primary': '#35464D',
        // 'secondary': '#C69972',
        // 'greend':'#526464',
        // 'greenl': '#899587',
        // 'dark' : '#202124',
        // 'ldark' : '#202124',
        // 'light' : '#f1f5f9',
        // 'lwhite': '#ffffff',
      },
      // Commonly used font sizes
      fontSize: {
        'xs': '0.75rem',   // Extra Small
        'sm': '0.875rem',  // Small
        'base': '1rem',    // Base
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra Large
      },

      // Common screen sizes
      screens: {
        'sm': '640px',     // Small screens (phones)
        'md': '768px',     // Medium screens (tablets)
        'lg': '1024px',    // Large screens (desktops)
        'xl': '1280px',    // Extra Large screens (large desktops)
      },

      // Common padding values
      padding: {
        '2': '0.5rem',     // 0.5rem padding
        '3': '0.75rem',    // 0.75rem padding
        '4': '1rem',       // 1rem padding
      },

      // Common margin values
      margin: {
        '2': '0.5rem',     // 0.5rem margin
        '3': '0.75rem',    // 0.75rem margin
        '4': '1rem',       // 1rem margin
      },
    },
  },
  plugins: [],
}