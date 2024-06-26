/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "below-lg": { max: "1029px" },
      },
      colors: {
        "primary-btn-color": "#975DE7",
        "primary-bg-color": "#2B2B2B",
        "secondry-bg-color": "#3B3B3B",
        "dark-bg-color": "#101010",
        "light": "#a2a2a2",
      },
    },
  },

  plugins: [],
};

