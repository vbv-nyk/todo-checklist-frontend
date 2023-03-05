/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '1fr 2fr 2fr',
        'todoLayout': '1fr 1fr'
      },
      gridTemplateColumns: {
        'todoLayout': '40% auto'
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}