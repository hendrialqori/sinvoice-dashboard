/** @type {import('tailwindcss').Config} */

module.exports = {
  mode : "jit",
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "cream": "#e0ddd1"
      }
    },
  },
  plugins: [],
};
