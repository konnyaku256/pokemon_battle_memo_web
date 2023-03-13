module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pk-battle-memo-main": "#E40B20",
        "pk-battle-memo-white": "#FFFFFF",
        "pk-battle-memo-whitegray": "#F3F4F6",
        "pk-battle-memo-gray": "#A4A4A4",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
