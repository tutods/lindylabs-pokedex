import Icon from 'components/icons/Icon';
import { IconContainer } from 'components/icons/PokemonType/styles';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';

type Props = {
	type: PokemonTypeEnum;
};

const PokemonTypeIcon = ({ type }: Props) => (
	<IconContainer type={type}>
		<Icon name={`${type}-type`} />
	</IconContainer>
);

export { PokemonTypeIcon };
