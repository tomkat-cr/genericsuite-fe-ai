/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: {
    relative: true,
    files: [
      "./node_modules/genericsuite/src/lib/**/*.{html,js,jsx}",
      "./src/lib/components/**/*.{html,js,jsx}",
      "./src/index.{tsx,jsx,cjs}",
      './public/index.html',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
  ],
}