import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes, styled } from 'styles/stitches';
import Icon from 'components/icons/Icon';

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 }
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: 'rgba(0,0,0,.75)',
	position: 'fixed',
	inset: 0,

	zIndex: 2,

	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
	}
});

const StyledModalContent = styled(DialogPrimitive.Content, {
	position: 'fixed',
	top: '50%',
	left: '50%',

	maxWidth: '$360',
	width: '100%',
	minHeight: '$400',

	displayFlex: 'column',
	alignItems: 'center',

	px: '$8',
	py: '$8',

	borderRadius: '$12',

	transform: 'translate(-50%, -50%)',
	zIndex: 3,

	'h4,h5': {
		textAlign: 'center'
	},

	variants: {
		type: {
			bug: {
				backgroundColor: '$bug',

				'h4,h5': {
					color: '$bug'
				}
			},
			dark: {
				backgroundColor: '$dark',

				'h4,h5': {
					color: '$dark'
				}
			},
			dragon: {
				backgroundColor: '$dragon',

				'h4,h5': {
					color: '$dragon'
				}
			},
			electric: {
				backgroundColor: '$electric',

				'h4,h5': {
					color: '$electric'
				}
			},
			fairy: {
				backgroundColor: '$fairy',

				'h4,h5': {
					color: '$fairy'
				}
			},
			fighting: {
				backgroundColor: '$fighting',

				'h4,h5': {
					color: '$fighting'
				}
			},
			fire: {
				backgroundColor: '$fire',

				'h4,h5': {
					color: '$fire'
				}
			},
			flying: {
				backgroundColor: '$flying',

				'h4,h5': {
					color: '$flying'
				}
			},
			ghost: {
				backgroundColor: '$ghost',

				'h4,h5': {
					color: '$ghost'
				}
			},
			grass: {
				backgroundColor: '$grass',

				'h4,h5': {
					color: '$grass'
				}
			},
			ground: {
				backgroundColor: '$ground',

				'h4,h5': {
					color: '$ground'
				}
			},
			ice: {
				backgroundColor: '$ice',

				'h4,h5': {
					color: '$ice'
				}
			},
			normal: {
				backgroundColor: '$normal',

				'h4,h5': {
					color: '$normal'
				}
			},
			poison: {
				backgroundColor: '$poison',

				'h4,h5': {
					color: '$poison'
				}
			},
			psychic: {
				backgroundColor: '$psychic',

				'h4,h5': {
					color: '$psychic'
				}
			},
			rock: {
				backgroundColor: '$rock',

				'h4,h5': {
					color: '$rock'
				}
			},
			steel: {
				backgroundColor: '$steel',

				'h4,h5': {
					color: '$steel'
				}
			},
			water: {
				backgroundColor: '$water',

				'h4,h5': {
					color: '$water'
				}
			}
		}
	},

	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
	},

	'&:focus': { outline: 'none' }
});

const StyledModalTitle = styled('div', DialogPrimitive.Title, {
	width: '100%',

	displayFlex: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',

	px: '$16',
	pt: '$16',
	pb: '$8',

	color: '$white',

	span: {
		'&:nth-of-type(1)': {
			flex: '1 1 auto',

			displayFlex: 'row',
			alignItems: 'center',
			gap: '$16',

			h3: {
				fontSize: '$24',
				fontWeight: '$bold',
				textTransform: 'capitalize'
			},

			button: {
				border: '0',

				color: '$white',
				cursor: 'pointer',

				'&:focus': {
					outline: 'none'
				},

				svg: {
					width: '$24'
				}
			}
		},

		'&:nth-of-type(2)': {
			fontSize: '$12',
			fontWeight: '$medium'
		}
	}
});

const StyledPokeball = styled(Icon, {
	position: 'absolute',
	right: '$8',
	top: '$8',

	color: '$white',
	opacity: '0.5'
});

const StyledTopModal = styled('div', {
	width: '100%',
	height: '$208'
});

const StyledModalDescription = styled('div', DialogPrimitive.Description, {
	flex: '1  1 auto',

	width: '100%',

	displayFlex: 'column',
	gap: '$16',

	pt: '$70',
	pb: '$40',
	px: '$16',
	borderRadius: '$8',

	backgroundColor: '$shape',
	color: '$text',

	variants: {
		dontHaveImg: {
			true: {
				pt: '$40'
			}
		}
	},

	'&>div': {
		'&:nth-of-type(1)': {
			displayFlex: 'row',
			gap: '$16',
			alignItems: 'center',
			justifyContent: 'center'
		},

		'&:nth-of-type(2)': {
			display: 'grid',
			gridTemplateColumns: 'repeat(2, 1fr)',

			div: {
				position: 'relative',

				displayFlex: 'column',
				alignItems: 'center',
				gap: '$4',

				span: {
					'&:nth-of-type(1)': {
						displayFlex: 'row',
						alignItems: 'center',
						gap: '$8',

						fontSize: '$14',

						svg: {
							width: '$16',
							height: '$16'
						}
					},

					'&:nth-of-type(2)': {
						fontSize: '$12',
						color: '$gray'
					}
				},

				'&:not(&:nth-of-type(2))::after': {
					content: '',
					position: 'absolute',
					right: 0,
					top: 0,

					height: '100%',

					px: '$4',
					borderRadius: '$2',
					borderRight: '1px solid $colors$gray'
				}
			}
		},

		'&:nth-of-type(3)': {}
	}
});

const StyledPokemonImage = styled('div', {
	position: 'absolute',
	top: '$120',
	left: '50%',

	size: '$180',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	transform: 'translateX(-50%)',

	img: {
		width: '100%',
		height: '100%'
	},

	variants: {
		dontHaveImg: {
			true: {
				img: {
					height: 'auto',
					objectFit: 'cover'
				}
			}
		}
	}
});

export {
	StyledModalOverlay,
	StyledModalContent,
	StyledModalTitle,
	StyledPokeball,
	StyledTopModal,
	StyledModalDescription,
	StyledPokemonImage
};