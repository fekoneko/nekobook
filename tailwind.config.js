const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extends: {},
  },
  plugins: [
    createThemes({
      dark: {
        'bg-primary': '#2d2c31',
        'bg-accent': '#3d3c41',
        'text-primary': '#959595',
        'text-accent': '#cccccc',
        'text-inactive': '#666666',
      },
    }),
  ],
};
