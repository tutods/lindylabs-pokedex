import { styled } from 'styles/stitches';

const Button = styled('button', {
	px: '$20',
	py: '$14',
	borderRadius: '$6',

	fontWeight: '$semiBold',
	fontSize: '$14',
	lineHeight: '$17',

	transition: 'all .3s ease-in',

	variants: {
		variant: {
			primary: {
				backgroundColor: 'rgba(63, 93, 179, 0.1)',
				color: '$blue',

				'&:hover': {
					backgroundColor: '$blue',
					color: '$white'
				}
			}
		}
	}
});

export { Button };
