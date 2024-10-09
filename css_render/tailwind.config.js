/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        30: "30px",
      },
      colors: {
        salmon: "salmon",
      },
    },
  },
  plugins: [],
};
