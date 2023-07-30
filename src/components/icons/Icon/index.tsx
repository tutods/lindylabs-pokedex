import { Svg } from 'components/icons/Icon/styles';
import type { CSSProps } from 'shared/@types/Stitches';

type Props = CSSProps & {
  name: string;
  size?: 32 | 24 | 20 | 18 | 16 | 12;
  onClick?: () => void;
};

const Icon = ({ name, size = 24, onClick, css, ...props }: Props) => {
  return (
    <Svg css={css} onClick={onClick} size={size} {...props}>
      <use href={`#${name}`} />
    </Svg>
  );
};

export default Icon;
