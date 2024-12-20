/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: { max: "475px" },
        xs1:{ max: "600px" },
        xs2:{ max: "350px" },
        teamsm:{max:"950px", min:"750px"},
        sm: { max: "750px", min: "475px" },
        md: { max: "1100px", min: "750px" },
        lg: { min: "1100px", max: "1300px" },
        xlg: { min: "1300px" },
      },
      fontFamily: {
        "inter": ["Inter", "serif"],
        "gilroy-semiBold": ["Gilroy-SemiBold", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        "gilroy-extraBold": ["Gilroy-Extrabold", "sans-serif"],
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "playfair": ["Playfair Display", "serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".75rem",
        md: "1rem",
        l: "1.6rem",
        "2xl": "2.25rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.75rem",
        "6xl": "4.5rem",
        sp: "1.25vw",
      },
      borderWidth: {
        tiny: "1px",
      },
    },
  },
  plugins: [],
};