/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        lightGray: '#404040',
        primary: '#202020',
        secColor: '#FC8019',
      },
      backgroundColor: {
        mainColor: '#202020',
        secondaryColor: '#FC8019',
      },
      colors: {
        secColor: '#FC8019',
      },
    },
  },
  plugins: [],
};
