/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

