import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'5xl': '-15px 10px 0 rgba(0, 0, 0, 1)',
			},
			colors: {
				niagara: {
					'50': '#effaf6',
					'100': '#d8f3e7',
					'200': '#b5e5d3',
					'300': '#84d1b9',
					'400': '#51b69a',
					'500': '#31a387',
					'600': '#1f7c67',
					'700': '#196354',
					'800': '#164f44',
					'900': '#134139',
					'950': '#0a2420',
				},

				humo: '#f8f8f8',
				tuatara: '#3d3c3b',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
