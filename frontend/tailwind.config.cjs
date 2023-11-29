/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Cormorant Garamond", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        companyBanner: "url('./src/assets/banner-company.webp')",
      },
      colors: {
        "primary-100": "#ebc9bd",
        "primary-400": "#c8a497",
        "primary-600": "#ab8476",
        footer: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
