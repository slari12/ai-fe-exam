/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite/**/*.js"],
  darkMode: false, // or'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
