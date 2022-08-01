import { styled } from 'styles/stitches';

const FilterContainer = styled('ul', {
	width: '100%',
	maxWidth: '$93',

	flex: 'column',
	gap: '$40'
});

const FilterItem = styled('li', {
	flex: 'row',
	alignItems: 'center',
	gap: '$20',

	cursor: 'pointer',
	transition: 'color .3s',

	span: {
		'&:nth-of-type(1)': {
			width: '$24',
			height: '$24',

			flex: 'row',
			alignItems: 'center',
			justifyContent: 'center',

			svg: {
				width: '100%'
			}
		},

		'&:nth-of-type(2)': {
			textTransform: 'capitalize',
			fontSize: '$16',
			fontWeight: '$medium'
		}
	},

	variants: {
		active: {
			true: {
				color: '$blue'
			},
			false: {
				color: '$gray'
			}
		}
	},

	'&:hover': {
		color: '$blue'
	}
});

export { FilterContainer, FilterItem };