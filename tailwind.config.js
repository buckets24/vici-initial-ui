module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        linkOrange: "#F0AE4B",
        gray: {
          light: "rgba(0, 0, 0, 0.45);",
          regular: "#82869A",
          default: "#373C56",
          placeholder: "rgb(130, 134, 154)",
        },
        button: "#06AED5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
