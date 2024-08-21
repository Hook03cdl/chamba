import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				niagara: '#31a387',
				humo: '#f8f8f8',
				tuatara: '#3d3c3b',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
