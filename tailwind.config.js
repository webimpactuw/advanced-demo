/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#E9DEF8",
          400: "#8455EB",
          600: "#6842BA",
          800: "#4B2F88",
          900: "#280F5D",
        },
      },
    },
  },
  plugins: [],
};
