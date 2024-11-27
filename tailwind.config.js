/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914", 
        secondary: "#1A1A1A",
      },
      animation: {
        lineMove: 'lineMove 2s ease-in-out infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      boxShadow: {
        glow: "0 0 15px rgba(229, 9, 20, 0.7)", 
      },
      container: {
        center: true,
        padding: "3rem",
      },
      transitionDuration: {
        DEFAULT: '300ms',  
      },
    },
  },
  plugins: [],
}

