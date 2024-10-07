/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00796b',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        orange: {
          500: '#e65100',
          600: '#ea580c',
        },
        gold: {
          500: "#ffb300",
          600: '#ffd700',
        },
        white: "#f5f5f5",
        navy: {
          500: "#2c3e50",
          600: "#0a1d2f",
          700: "#0a1a2f",
          800: "#0a152f",
          900: "#0a102f",
        }
      },
    },
  },
  plugins: [],
}

