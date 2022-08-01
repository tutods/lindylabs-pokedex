import { styled } from 'styles/stitches';

const SearchSection = styled('section', {
	py: '$92',

	'&>div': {
		flex: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		h2: {
			maxWidth: '$265'
		}
	}
});

const SearchGroup = styled('form', {
	minWidth: '$400',
	maxWidth: '$400',
	width: '100%',

	flex: 'row',
	alignItems: 'center',
	gap: '$16',

	px: '$8',
	py: '$8',
	borderRadius: '$100',
	border: '2px solid transparent',

	backgroundColor: '$white',
	transition: 'border-color .3s',

	button: {
		size: '$42',

		borderRadius: '$full',

		backgroundColor: 'rgba(158, 185, 225, .1)',
		transition: 'all .3s ease-in',

		svg: {
			color: '$blue'
		},

		'&:hover': {
			backgroundColor: '$blue',

			svg: {
				color: '$white'
			}
		}
	},

	input: {
		flex: '1 1 auto',

		fontSize: '$16',

		'&::placeholder': {
			color: '$gray'
		}
	},

	'&:has(input:focus)': {
		borderColor: '$blue'
	}
});

const PokemonsSection = styled('section', {
	py: '$72'
});

export { SearchSection, SearchGroup, PokemonsSection };