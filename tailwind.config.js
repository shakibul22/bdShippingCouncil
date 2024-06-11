/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        quattrocento: ["Quattrocento Sans",],
      },

      rotate: {
        "-135": "-135deg",
        45: "45deg",
      },
      letterSpacing: {
        1: "0.1em", // Adjust this value as needed
      },
      screens: {
        "2xl": "1380px",
        "3xl": "1600px",
      },

      colors: {
        primaryColor: "#0a4a77",
        footerbg: "#0c3352",
        secondaryColor: "#dc963c",
        softWhite: "#e9f5ff",
        btn: "#0081e9",
        textPrimary: "#12141D",
        tabbg: "#E7EAEC",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
