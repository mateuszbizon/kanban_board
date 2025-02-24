/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"main-purple": "var(--main-purple)",
				"main-purple-hover": "var(--main-purple-hover)",
				background: "var(--background)",
				"medium-grey": "var(--medium-grey)",
				"dark-grey": "var(--dark-grey)",
				lines: "var(--lines)",
				red: "var(--red)",
				"red-hover": "var(--red-hover)",
			},
			fontSize: {
				xs: [
					"0.75rem",
					{
						fontWeight: "700",
						lineHeight: "0.9375rem",
					},
				],
				"2xs": [
					"0.8125rem",
					{
						fontWeight: "500",
						lineHeight: "1.4375rem",
					},
				],
				"2sm": [
					"0.9375rem",
					{
						fontWeight: "700",
						lineHeight: "1.1875rem",
					},
				],
				lg: [
					"1.125rem",
					{
						fontWeight: "700",
						lineHeight: "1.4375rem",
					},
				],
				"2xl": [
					"1.5rem",
					{
						fontWeight: "700",
						lineHeight: "1.875rem",
					},
				],
			},
			height: {
				topbar: "5rem",
			},
			width: {
				column: "17.5rem",
			},
			padding: {
				main: "1rem",
			},
			boxShadow: {
				main: "0px 4px 6px 0px rgba(54, 78, 126, 0.115)",
			},
		},
	},
	plugins: [],
};
