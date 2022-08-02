import { styled } from 'styles/stitches';

const CounterContainer = styled('span', {
	displayInlineFlex: 'row',
	alignItems: 'center',
	gap: '$6',

	fontWeight: '$semiBold',
	fontSize: '$18',

	svg: {
		size: '$32'
	},

	small: {
		fontWeight: '$light'
	}
});

export { CounterContainer };