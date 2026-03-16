/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-text": "var(--muted-text)",
        border: "var(--border)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        button: "var(--button)",
        "button-text": "var(--button-text)",
        "button-hover": "var(--button-hover)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
