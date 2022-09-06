/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/templates/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			display: ["Anton", "sans-serif"],
			body: ["Work Sans", "sans-serif"],
		},
		extend: {
			colors: {
				red: "#ED2523",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
