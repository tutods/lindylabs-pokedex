import { CSSProps } from 'shared/@types/Stitches';
import { Svg } from 'components/icons/Icon/styles';

type Props = CSSProps & {
	name: string;
	size?: 32 | 24 | 20 | 18 | 16 | 12;
};

const Icon = ({ name, size = 24, css, ...props }: Props) => {
	return (
		<Svg size={size} css={css} {...props}>
			<use href={`#${name}`} />
		</Svg>
	);
};

export default Icon;