module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
