const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black
		},
		extend: {},
		keyframes: {},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				// 'sm': '100%',
				// 'md': '100%',
				lg: '990px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.truncate-1': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '1',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-2': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-3': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '3',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-4': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '4',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				}
			})
			addUtilities({})
		})
	]
}
