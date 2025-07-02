/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <-- all React files
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#FF4F8B",
        brandBlue: "#3C6FFF",
      },
    },
  },
  plugins: [],
};
