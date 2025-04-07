// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4361EE",
        "primary-purple": "#7209B7",
        "primary-pink": "#F72585",
        "accent-teal": "#4CC9F0",
        "accent-lavender": "#B5179E",
        "background-light": "#F8F9FA",
        "background-dark": "#212529",
      },
    },
  },
  plugins: [],
};
