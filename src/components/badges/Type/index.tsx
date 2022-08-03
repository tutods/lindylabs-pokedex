import { StyledBadge } from 'components/badges/Type/styles';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';

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
