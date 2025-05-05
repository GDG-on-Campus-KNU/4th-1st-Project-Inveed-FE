/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './constants/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        pointgreen: '#05BE71',
        background: '#FAFAFA',
        blue: '#0088FF',
        red: '#FE324E',
        label: '#8E8E93',
        title: '#626262',
        badgebackground: '#F2F4F6',
        white: '#FFFFFF',
        black: '#000000',
        graybackground: '#DDDEDF',
      },
    },
  },
  plugins: [],
};
