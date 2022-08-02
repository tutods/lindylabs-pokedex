import { globalCss } from 'styles/stitches';

const globalStyles = globalCss({
	'@import': [
		'url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap")'
	],

	html: {
		scrollBehavior: 'smooth',
		fontSize: '16px'
	},

	'*': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,

		fontFamily: '$body'
	},

	body: {
		minHeight: '100vh',

		margin: 0,

		backgroundColor: '$background',
		color: '$text',

		fontFamily: '$body',
		fontWeight: '$regular',
		fontSize: '$16',
		lineHeight: '$24'
	},

	button: {
		border: 0,

		backgroundColor: 'transparent',
		boxShadow: 'none',
		cursor: 'pointer',

		'&:disabled': {
			cursor: 'not-allowed'
		}
	},

	a: {
		textDecoration: 'none'
	},

	input: {
		border: 'none',

		backgroundColor: 'transparent',
		outline: 'none'
	},

	ul: {
		listStyle: 'none'
	},

	svg: { verticalAlign: 'middle' },

	h1: {
		fontWeight: '$bold',
		fontSize: '$64',
		lineHeight: '$78',
		letterSpacing: '-0.01em'
	},

	h2: {
		fontWeight: '$bold',
		fontSize: '$32',
		lineHeight: '$39',
		letterSpacing: '-0.01em'
	},

	h3: {},

	h4: {},

	h5: {},

	h6: {}
});

export default globalStyles;