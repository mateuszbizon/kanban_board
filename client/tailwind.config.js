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
      },
      fontSize: {
        'xs': ['0.75rem', {
          fontWeight: '700',
          lineHeight: "0.9375rem"
        }],
        '2xs': ['0.8125rem', {
          fontWeight: '500',
          lineHeight: "1.4375rem"
        }],
        '2sm': ['0.9375rem', {
          fontWeight: '700',
          lineHeight: "1.1875rem"
        }],
        'lg': ['1.125rem', {
          fontWeight: '700',
          lineHeight: "1.4375rem"
        }],
        '2xl': ['1.5rem', {
          fontWeight: '700',
          lineHeight: "1.875rem"
        }],
      }
    },
  },
  plugins: [],
}

