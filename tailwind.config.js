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
        'longbox-width': '762px'
      },
      spacing: {
        'mobilebox-width': '330px',
        'mobilebox-height': '363px',
        'mobilelongbox-height': '482px',
        'box-width': '363px'
      }
    },
  },
  plugins: [],
}