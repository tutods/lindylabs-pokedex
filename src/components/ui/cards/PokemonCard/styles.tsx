import { styled } from 'styles/stitches';

const CardShape = styled('a', {
	displayFlex: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '$20',

	px: '$28',
	py: '$28',
	borderRadius: '$12',
	border: '$sizes$2 solid transparent',

	backgroundColor: '$shape',

	transition: 'border-color .3s ease-in',
	cursor: 'pointer',

	variants: {
		type: {
			bug: {
				'&:hover': {
					borderColor: '$bug'
				}
			},
			dark: {
				'&:hover': {
					borderColor: '$dark'
				}
			},
			dragon: {
				'&:hover': {
					borderColor: '$dragon'
				}
			},
			electric: {
				'&:hover': {
					borderColor: '$electric'
				}
			},
			fairy: {
				'&:hover': {
					borderColor: '$fairy'
				}
			},
			fighting: {
				'&:hover': {
					borderColor: '$fighting'
				}
			},
			fire: {
				'&:hover': {
					borderColor: '$fire'
				}
			},
			flying: {
				'&:hover': {
					borderColor: '$flying'
				}
			},
			ghost: {
				'&:hover': {
					borderColor: '$ghost'
				}
			},
			grass: {
				'&:hover': {
					borderColor: '$grass'
				}
			},
			ground: {
				'&:hover': {
					borderColor: '$ground'
				}
			},
			ice: {
				'&:hover': {
					borderColor: '$ice'
				}
			},
			normal: {
				'&:hover': {
					borderColor: '$normal'
				}
			},
			poison: {
				'&:hover': {
					borderColor: '$poison'
				}
			},
			psychic: {
				'&:hover': {
					borderColor: '$psychic'
				}
			},
			rock: {
				'&:hover': {
					borderColor: '$rock'
				}
			},
			steel: {
				'&:hover': {
					borderColor: '$steel'
				}
			},
			water: {
				'&:hover': {
					borderColor: '$water'
				}
			}
		}
	}
});

const ImageContainer = styled('div', {
	position: 'relative',

	size: '$200',

	displayFlex: 'row',
	alignItems: 'center',
	justifyContent: 'center',

	div: {
		position: 'absolute',
		top: '50%',
		left: '50%',

		size: '$180',

		borderRadius: '$full',

		opacity: '0.2',
		transform: 'translate(-50%,-50%)',
		zIndex: 0
	},

	img: {
		width: '100%',
		height: '100%',

		objectFit: 'fill',
		zIndex: 1
	},

	variants: {
		type: {
			bug: {
				div: {
					backgroundColor: '$bug'
				}
			},
			dark: {
				div: {
					backgroundColor: '$dark'
				}
			},
			dragon: {
				div: {
					backgroundColor: '$dragon'
				}
			},
			electric: {
				div: {
					backgroundColor: '$electric'
				}
			},
			fairy: {
				div: {
					backgroundColor: '$fairy'
				}
			},
			fighting: {
				div: {
					backgroundColor: '$fighting'
				}
			},
			fire: {
				div: {
					backgroundColor: '$fire'
				}
			},
			flying: {
				div: {
					backgroundColor: '$flying'
				}
			},
			ghost: {
				div: {
					backgroundColor: '$ghost'
				}
			},
			grass: {
				div: {
					backgroundColor: '$grass'
				}
			},
			ground: {
				div: {
					backgroundColor: '$ground'
				}
			},
			ice: {
				div: {
					backgroundColor: '$ice'
				}
			},
			normal: {
				div: {
					backgroundColor: '$normal'
				}
			},
			poison: {
				div: {
					backgroundColor: '$poison'
				}
			},
			psychic: {
				div: {
					backgroundColor: '$psychic'
				}
			},
			rock: {
				div: {
					backgroundColor: '$rock'
				}
			},
			steel: {
				div: {
					backgroundColor: '$steel'
				}
			},
			water: {
				div: {
					backgroundColor: '$water'
				}
			}
		}
	},

	defaultVariants: {
		type: 'normal'
	}
});

const InfoContainer = styled('div', {
	width: '100%',

	displayFlex: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '$16',

	div: {
		p: {
			color: '$grayDarkest',
			fontWeight: '$medium',
			fontSize: '$13'
		},

		h3: {
			textTransform: 'capitalize'
		}
	}
});

export { CardShape, ImageContainer, InfoContainer };