import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';
import { IconContainer } from 'components/icons/PokemonType/styles';
import Icon from 'components/icons/Icon';

type Props = {
	type: PokemonTypeEnum;
};

const PokemonTypeIcon = ({ type }: Props) => (
	<IconContainer type={type}>
		<Icon name={`${type}-type`} />
	</IconContainer>
);

export { PokemonTypeIcon };