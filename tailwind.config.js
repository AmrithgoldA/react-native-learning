/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#161622",
				secondary: {
					DEFAULT: "#FF9C01", // Fixed typo in the color code
					100: "#FF9001",
					200: "#FF8E01",
				},
				black: {
					DEFAULT: "#000",
					100: "#1E1E2D", // Fixed typo in the color code
					200: "#232533",
				},
				grey: {
					100: "#CDCDE0", // Fixed typo in the color code
				}
			},
			fontFamily: {
				pthin: ["Poppins-Thin", "sans-serif"], // Fixed typo
				pextralight: ["Poppins-ExtraLight", "sans-serif"], // Removed space and fixed typo
				plight: ["Poppins-Light", "sans-serif"],
				pregular: ["Poppins-Regular", "sans-serif"], // Fixed dash
				pmedium: ["Poppins-Medium", "sans-serif"], // Fixed dash
				psemibold: ["Poppins-SemiBold", "sans-serif"], // Fixed dash
				pbold: ["Poppins-Bold", "sans-serif"], // Fixed typo
				pextrabold: ["Poppins-ExtraBold", "sans-serif"], // Fixed dash
				pblack: ["Poppins-Black", "sans-serif"], // Fixed dash
			},
		},
	},
	plugins: [],
}
