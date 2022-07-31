import { globalCss } from 'styles/stitches';

const globalStyles = globalCss({
	'@import': [
		'url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap")'
	],
	'*': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0
	},

	body: {
		backgroundColor: '$background',
		margin: 0,
		fontFamily: '$body',
		fontWeight: '$regular',
		fontSize: '$16',
		lineHeight: '$24',
		minHeight: '100vh'
	},

	svg: { verticalAlign: 'middle' }
});

export default globalStyles;