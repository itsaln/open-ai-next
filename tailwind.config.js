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
			black: colors.black,
			gray: colors.gray,
			red: colors.red,
			transparent: colors.transparent
		},
		extend: {
			fontSize: {},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		},
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
				},

				'.btn-black': {
					display: 'inline-block',
					width: 'max-content',
					minWidth: 170,
					height: 47,
					backgroundColor: theme('colors.black'),
					borderWidth: 1,
					borderColor: theme('colors.black'),
					borderStyle: 'solid',
					borderRadius: 0,
					fontSize: 14,
					fontWeight: 700,
					lineHeight: 0.8,
					letterSpacing: 2,
					color: theme('colors.white'),
					textTransform: 'uppercase',
					padding: '18px 32px',
					transition: 'opacity .2s ease',
					'&:hover': {
						opacity: 0.7
					}
				},
				'.btn-white': {
					display: 'inline-block',
					width: 'max-content',
					minWidth: 170,
					height: 47,
					backgroundColor: theme('colors.white'),
					borderWidth: 1,
					borderColor: theme('colors.white'),
					borderStyle: 'solid',
					borderRadius: 0,
					fontSize: 14,
					fontWeight: 700,
					lineHeight: 0.8,
					letterSpacing: 2,
					color: theme('colors.black'),
					textTransform: 'uppercase',
					padding: '18px 32px',
					transition: 'opacity .2s ease',
					'&:hover': {
						opacity: 0.7
					}
				}
			})
			addUtilities({
				// '.transition-colors': {
				// 	transitionProperty:
				// 		'color, background-color, border-color, text-decoration-color, fill, stroke',
				// 	transitionTimingFunction: 'ease',
				// 	transitionDuration: '.5s'
				// },
				// '.transition-opacity': {
				// 	transition: 'opacity .5s ease'
				// },
				// '.transition-all': {
				// 	transition: 'all .3s ease'
				// },
				// '.pointer-events-all': {
				// 	pointerEvents: 'all'
				// }
			})
		})
	]
}
