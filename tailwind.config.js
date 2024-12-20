/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}", // Covers all files in src folder
],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "serif"]
      },
    },
  },
  plugins: [],
};