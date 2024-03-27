/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio/templates/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

