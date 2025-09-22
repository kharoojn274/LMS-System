// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-small": ["26px", "36px"],
        "course-details-heading-large": ["36px", "44px"],
        "home-heading-small": ["28px", "34px"],
        "home-heading-large": ["48px", "56px"],
        "default-text": ["15px", "21px"],
      },
      maxWidth: {
        "course-card": "242px",
      },
    },
  },
  plugins: [],
};
