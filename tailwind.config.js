/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'contact': "url('/assets/png/contactbackground.png')",
      },
      colors: {
        buttonColor: "#28C24E",
        primary: "#0E0E0E",
        secondary: "#09005B",
        sectionBg:"#F2FBF4",
        bulletColor: "#868686",
        neutral: "#868686",

        // neutral: {
        //   500: "#5E5E5E",
        //   600: "#363636",
        //   700: "#0E0E0E",
        // },
      },
    },
  },
  plugins: [],
};
