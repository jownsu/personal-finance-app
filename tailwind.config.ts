import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.6rem",
				md: "2.4rem",
			}
		},
		extend: {
			fontFamily: {
				public: ["Public", "sans-serif"],
			},
			fontSize: {
				preset_1: [
					"3.2rem",
					{ lineHeight: "120%", fontWeight: "700", letterSpacing: "0" }
				],
				preset_2: [
					"2rem",
					{ lineHeight: "120%", fontWeight: "700", letterSpacing: "0" }
				],
				preset_3: [
					"1.6rem",
					{ lineHeight: "150%", fontWeight: "700", letterSpacing: "0" }
				],
				preset_4: [
					"1.4rem",
					{ lineHeight: "150%", fontWeight: "400", letterSpacing: "0" }
				],
				preset_4_bold: [
					"1.4rem",
					{ lineHeight: "150%", fontWeight: "700", letterSpacing: "0" }
				],
				preset_5: [
					"1.2rem",
					{ lineHeight: "150%", fontWeight: "400", letterSpacing: "0" }
				],
				preset_5_bold: [
					"1.2rem",
					{ lineHeight: "150%", fontWeight: "700", letterSpacing: "0" }
				]
			},
			colors: {
				beige: {
					500: "#98908B",
					100: "#F8F4F0"
				},
				grey: {
					100: "#F2F2F2",
					300: "#B3B3B3",
					500: "#696868",
					900: "#201F24"
				},
				purple: {
					DEFAULT: "#826CB0",
					100: "#AF81BA"
				},
				green: "#277C78",
				yellow: "#F2CDAC",
				cyan: "#82C9D7",
				navy: "#626070",
				red: "#C94736",
				turquoise: "#597C7C",
				brown: "#93674F",
				magenta: "#934F6F",
				blue: "#3F82B2",
				navy_grey: "#97A0AC",
				army_green: "#7F9161",
				gold: "#CAB361",
				orange: "#BE6C49"
			},
			spacing: {
				1: ".4rem",
				2: ".8rem",
				3: "1.2rem",
				4: "1.6rem",
				5: "2rem",
				6: "2.4rem",
				7: "3.2rem",
				8: "4rem"
			}
		}
	},
	plugins: []
};
export default config;
