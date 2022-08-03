import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';

import { StyledBadge } from './styles';

type Props = {
	type: PokemonTypeEnum;
};

const PokemonTypeBadge = ({ type }: Props) => {
	return (
		<StyledBadge type={type}>
			<span />
			<span>{type}</span>
		</StyledBadge>
	);
};

export { PokemonTypeBadge };
