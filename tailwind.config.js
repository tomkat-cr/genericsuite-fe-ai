/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: {
    relative: true,
    files: [
      "./node_modules/genericsuite/src/lib/**/*.{html,js,jsx}",
      "./src/lib/components/**/*.{html,js,jsx,ts,tsx}",
      "./src/lib/constants/**/*.{html,js,jsx,ts,tsx}",
      "./src/lib/helpers/**/*.{html,js,jsx,ts,tsx}",
      "./src/**/*.{html,js,jsx,ts,tsx}",
      './public/index.html',
      './index.html',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
  ],
}