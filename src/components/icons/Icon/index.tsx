import { Svg } from 'components/icons/Icon/styles';
import { CSSProps } from 'shared/@types/Stitches';

type Props = CSSProps & {
	name: string;
	size?: 32 | 24 | 20 | 18 | 16 | 12;
};

const Icon = ({ name, size = 24, css, ...props }: Props) => {
	return (
		<Svg css={css} size={size} {...props}>
			<use href={`#${name}`} />
		</Svg>
	);
};

export default Icon;
