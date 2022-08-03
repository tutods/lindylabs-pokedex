import { keyframes, styled } from 'styles/stitches';

const scale = keyframes({
	'0%': {
		transfomr: 'scale(1)',
		opacity: 1
	},
	'45%': {
		transform: 'scale(0)',
		opacity: 0.5
	},
	'80%': {
		transform: 'scale(1)',
		opacity: 1
	}
});

const Dots = styled('div', {
	variants: {
		size: {
			4: {
				span: {
					size: '$4',
					height: '$4'
				}
			},
			8: {
				span: {
					size: '$8',
					height: '$8'
				}
			},
			10: {
				span: {
					size: '$10'
				}
			},
			15: {
				span: {
					size: '$15'
				}
			},
			16: {
				span: {
					size: '$16'
				}
			},
			20: {
				span: {
					size: '$20'
				}
			},
			50: {
				span: {
					size: '$50'
				}
			},
			80: {
				span: {
					size: '$80'
				}
			},
			100: {
				span: {
					size: '$100'
				}
			}
		},
		color: {
			blue: {
				span: {
					backgroundColor: '$blue'
				}
			},
			blueDarkest: {
				span: {
					backgroundColor: '$blueDarkest'
				}
			},
			dark: {
				span: {
					backgroundColor: '$dark'
				}
			},
			white: {
				span: {
					backgroundColor: '$white'
				}
			}
		}
	},

	defaultVariants: {
		size: 15,
		color: 'dark'
	},

	display: 'inline-flex',
	alignItems: 'center',
	gap: '$2',

	span: {
		display: 'inline-block',

		borderRadius: '100%',

		animationFillMode: 'both',

		'&:nth-of-type(1)': {
			animation: `${scale} 1s calc((1 * 0.12s) - (0.12s * 3)) infinite cubic-bezier(.2,.68,.18,1.08)`
		},

		'&:nth-of-type(2)': {
			animation: `${scale} 1s calc((2 * 0.12s) - (0.12s * 3)) infinite cubic-bezier(.2,.68,.18,1.08)`
		},

		'&:nth-of-type(3)': {
			animation: `${scale} 1s calc((3 * 0.12s) - (0.12s * 3)) infinite cubic-bezier(.2,.68,.18,1.08)`
		}
	}
});

export { Dots };
