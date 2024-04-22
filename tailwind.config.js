/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        playfire: "'Playfair Display', serif",
        quicksand: "'Quicksand', sans-serif",
        sacramento: "'Sacramento', cursive"
      }
    },
  },
  plugins: [],
}

