/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallerDesktop: { max: "1344px" },
        landscapeTablet: { max: "1200px" },
        talbets: { max: "944px" },
        smallerTablets: { max: "704px" },
        phones: { max: "544px" },
      },
      colors: {
        darkOrange: "#cf711f",
        brownOrange: "#45260a",
        primaryOrange: "#e67e22",
        tintOrange: "#eb984e",
        tintSecondaryOrange: "#fae5d3",
        tintFirstSection: "#fdf2e9",
      },
      fontFamily: {
        bakeryFont: ["Inter"],
      },
    },
  },
  plugins: [],
};
