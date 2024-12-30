/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-purple": "var(--main-purple)",
        "main-purple-hover": "var(--main-purple-hover)",
        "light-grey": "var(--light-grey)",
        "medium-grey": "var(--medium-grey)",
        "dark-grey": "var(--dark-grey)",
        "very-dark-grey": "var(--very-dark-grey)",
        "light-lines": "var(--light-lines)",
        "dark-lines": "var(--dark-lines)",
        "red": "var(--red)",
        "red-hover": "var(--red-hover)",
      }
    },
  },
  plugins: [],
}

