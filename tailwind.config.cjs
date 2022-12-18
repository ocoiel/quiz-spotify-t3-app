/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"SF Pro Display", -apple-system,BlinkMacSystemFont, "Segoe UI"',
      },
      colors: {
        background: "#000212",
      },
    },
  },
  plugins: [],
};
