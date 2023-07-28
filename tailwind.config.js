/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      mainColor: "#6A5AE0",
      hoverMainColor: "#5343C9",
      baseColor: "#F3FBFF",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
