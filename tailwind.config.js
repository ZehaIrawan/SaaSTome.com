module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      grayskull: '#F3F6F9',
      primary: '#4070F4',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
