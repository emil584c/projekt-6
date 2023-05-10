/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-primary': '#f7f2ed',
        'brown-primary': '#411f1e',
        'green-primary': '#2e5342',
        'border-black': '#222222'
      },
      maxWidth: {
        'content-width': '1166px',
      }
    },
  },
  plugins: [],
}