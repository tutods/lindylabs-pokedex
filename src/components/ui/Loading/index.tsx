import { CSSProps } from 'shared/@types/Stitches';

import { Dots } from './styles';

type Props = CSSProps & {
	size?: 8 | 4 | 10 | 15 | 16 | 20 | 50 | 80 | 100;
	color?: 'blue' | 'blueDarkest' | 'dark' | 'white';
};

const Loading = ({ css, size, color, ...props }: Props) => {
	return (
		<Dots {...props} color={color} css={css} size={size}>
			<span />
			<span />
			<span />
		</Dots>
	);
};

export { Loading };
