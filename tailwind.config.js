/** @type {import('tailwindcss').Config} */
// @ts-ignore
const colors = require("tailwindcss/colors");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      primary: "#17ca5e",
      primaryhover: "#aff6cb",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
