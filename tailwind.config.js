/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#fdf7f0",
        brandPrimary: "#6b4f4f",
        brandAccent: "#d9a441"
      }
    }
  },
  plugins: []
};
