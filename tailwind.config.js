/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'first-font' : ['"Kanit"', 'light 300']
      }
    },
  },
  plugins: [],
}