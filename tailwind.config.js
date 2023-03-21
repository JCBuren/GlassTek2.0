/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-purple": "#430C5D",
				"light-white": "rgba(255,255,255,0.17)",
				"my-white": "#EBEEF3",
				"my-black": "#383C44",
				"gold": "#C7B226",
			},
		},
	},
	plugins: [],
}
