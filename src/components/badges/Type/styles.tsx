import { styled } from 'styles/stitches';

const StyledBadge = styled('span', {
	position: 'relative',

	minWidth: '$78',

	displayFlex: 'row',
	alignItems: 'center',
	justifyContent: 'center',

	px: '$16',
	py: '$4',

	span: {
		'&:nth-of-type(1)': {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,

			borderRadius: '$4',

			opacity: '0.2',

			zIndex: 0
		},

		'&:nth-of-type(2)': {
			textTransform: 'capitalize',
			fontWeight: '$semiBold',
			fontSize: '$13',
			lineHeight: '$16',

			zIndex: 1
		}
	},

	variants: {
		type: {
			bug: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$bug'
					},

					'&:nth-of-type(2)': {
						color: '$bug'
					}
				}
			},
			dark: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$dark'
					},

					'&:nth-of-type(2)': {
						color: '$dark'
					}
				}
			},
			dragon: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$dragon'
					},

					'&:nth-of-type(2)': {
						color: '$dragon'
					}
				}
			},
			electric: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$electric'
					},

					'&:nth-of-type(2)': {
						color: '$electric'
					}
				}
			},
			fairy: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$fairy'
					},

					'&:nth-of-type(2)': {
						color: '$fairy'
					}
				}
			},
			fighting: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$fighting'
					},

					'&:nth-of-type(2)': {
						color: '$fighting'
					}
				}
			},
			fire: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$fire'
					},

					'&:nth-of-type(2)': {
						color: '$fire'
					}
				}
			},
			flying: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$flying'
					},

					'&:nth-of-type(2)': {
						color: '$flying'
					}
				}
			},
			ghost: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$ghost'
					},

					'&:nth-of-type(2)': {
						color: '$ghost'
					}
				}
			},
			grass: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$grass'
					},

					'&:nth-of-type(2)': {
						color: '$grass'
					}
				}
			},
			ground: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$ground'
					},

					'&:nth-of-type(2)': {
						color: '$ground'
					}
				}
			},
			ice: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$ice'
					},

					'&:nth-of-type(2)': {
						color: '$ice'
					}
				}
			},
			normal: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$normal'
					},

					'&:nth-of-type(2)': {
						color: '$normal'
					}
				}
			},
			poison: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$poison'
					},

					'&:nth-of-type(2)': {
						color: '$poison'
					}
				}
			},
			psychic: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$psychic'
					},

					'&:nth-of-type(2)': {
						color: '$psychic'
					}
				}
			},
			rock: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$rock'
					},

					'&:nth-of-type(2)': {
						color: '$rock'
					}
				}
			},
			steel: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$steel'
					},

					'&:nth-of-type(2)': {
						color: '$steel'
					}
				}
			},
			water: {
				span: {
					'&:nth-of-type(1)': {
						backgroundColor: '$water'
					},

					'&:nth-of-type(2)': {
						color: '$water'
					}
				}
			}
		}
	},

	defaultVariants: {
		type: 'normal'
	}
});

export { StyledBadge };
