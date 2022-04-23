module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#292E3D",
      blue: "#2947a9",
      blue2: "#1a2d6b",
      white: "#ffffff",
      gray: "#fafbfe",
      orange: "#ff7b1c",
      orange1: "#f9995d",
      gray1: "#3d445c",
      gray2: "#858ead",
      gray3: "#e0e3eb",
      transparent: "#00000000"
    },
    extend: {
      fontFamily: {
        'dm': ['DM sans', 'sans-serif'],
        'work': ['Work sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
