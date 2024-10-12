/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6347',  // Set to match the primary button color in App.css
        secondary: '#ff4500',  // Set to match the hover state of the button
        gray: {
          light: '#f8f9fa', // Set to the light background color used in App.css
          DEFAULT: '#ccc',  // A general gray
          dark: '#2f3640',  // Dark text color in App.css
        },
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'], // Align with the font in App.css
      },
      borderRadius: {
        'xl': '12px', // Consistent with the design in App.css
        '2xl': '16px', // Changed for uniformity
      },
    },
  },
  plugins: [],
};
