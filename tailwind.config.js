module.exports = {
  darkMode: "class", // or 'media' or 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        "royal-red": "#E63946",
        "good-gray": "#96A6B8",
        hueso: "#FAF9F9",
        "bad-black": "#2A2938",
        "dark-red": "#BB4E4D",
        "dark-blue": "#080140e0",
        "deep-blue": "#01041e",
      },
      fontFamily: {
        primary: "'Cinzel Decorative', serif",
        secondary: "'Zilla Slab', serif",
        normal: "'Poppins', sans-serif",
      },

    },
  },
};
