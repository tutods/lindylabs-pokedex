import { Container } from 'components/ui/Container';
import { styled } from 'styles/stitches';

const SearchSection = styled('section', {
	py: '$92',

	'&>div': {
		displayFlex: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		h2: {
			maxWidth: '$265'
		}
	}
});

const PokemonsSection = styled('section', {
	pb: '$72'
});

const CustomContainer = styled(Container, {
	position: 'relative',

	displayGrid: '$sizes$100 1fr',
	gap: '$202'
});

const ContentContainer = styled('div', {
	width: '100%',
	displayFlex: 'column'
});

const GenericBottomContainer = styled('div', {
	displayFlex: 'row',
	alignItems: 'center',
	justifyContent: 'center',

	py: '$32'
});

export {
	ContentContainer,
	CustomContainer,
	GenericBottomContainer,
	PokemonsSection,
	SearchSection
};
