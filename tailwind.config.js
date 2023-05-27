/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./aos/dist/aos.css"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "32px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#1e293b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        text: "text 5s ease infinite",
        border: "animate 2s linear both infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        animate: {
          "0%": {
            "background-position-x": "0px",
          },
          "100%": {
            "background-position-x": "400px",
          },
        },
      },
    },
  },
  plugins: [],
};
