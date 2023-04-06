/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent": "#F44E77",
        "primary": "#554DDE",
        "neutral": "#F2F6FF",
        "stroke": "#CAD6F1",
        "dark": "#16194F",
      },
    },
  },
  plugins: [],
};
