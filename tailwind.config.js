/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        theme: "#1c1a5d",
        primary: "#ffffff",
        secondary: "#FFF6EC",
        accent: "#dad9e5",
        "dark-blue": "#363479",
        "medium-blue": "#6065b3",
        text: "#333D29",
        button: "#40dee8",
        winner: "#FFD700",
        second: "#C0C0C0",
        third: "#CD7F32",
        easy: "#6FCF97",
        medium: "#F2C94C",
        hard: "#EB5757",
      },
      height: {
        "primary-button": "56px",
      },
      borderColor: {
        theme: "#1c1a5d",
      },
      fontFamily: {
        "ubuntu-regular": ["ubuntu-regular", "sans-serif"],
        "ubuntu-medium": ["ubuntu-medium", "sans-serif"],
        "ubuntu-light": ["ubuntu-light", "sans-serif"],
        "ubuntu-bold": ["ubuntu-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
