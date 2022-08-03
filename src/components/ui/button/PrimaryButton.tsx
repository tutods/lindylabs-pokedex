import { styled } from 'styles/stitches';

const PrimaryButton = styled('button', {
	px: '$20',
	py: '$14',
	borderRadius: '$6',

	backgroundColor: 'rgba(63, 93, 179, 0.1)',
	color: '$blue',

	fontWeight: '$semiBold',
	fontSize: '$14',
	lineHeight: '$17',

	transition: 'all .3s ease-in',

	'&:hover': {
		backgroundColor: '$blue',
		color: '$white'
	}
});

export { PrimaryButton };
