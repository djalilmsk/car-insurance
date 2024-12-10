/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#459ADD",       // Blue
          "secondary": "#EDF7FF",     // light Blue
          "primary-text": "#000000",  // Black
          "secondary-text": "#E8E8E8",// grey
          "base-color": "#E8E8E8",    // light gray
        },
      },
    ],
  },
};