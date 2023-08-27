module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#334155",
        "smooth-white": "rgba(255, 255, 255, 0.90)",
        gray: "#A0AEC0",
        "smooth-gray": "rgba(160, 174, 192, 0.50)",
        porcelain: "#EDF2F7",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      keyframes: {
        "main-fade-out": {
          "0%": { transform: "translate(-50%, -75%)", opacity: 0 },
          "100%": { transform: "translate(-50%, -50%)", opacity: 1 },
        },
      },
      animation: {
        "main-fade-out": "main-fade-out 1.15s ease-in-out forwards",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "880px",
        xl: "880px",
        "2xl": "880px",
      },
    },
  },
  plugins: [],
};
