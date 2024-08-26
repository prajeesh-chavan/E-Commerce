/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": '#0b0b0b',
        "secondary": '#f6f6f6',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',               /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
};
