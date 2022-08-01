import Icon from 'components/icons/Icon';
import { IconContainer, BadgeBackground } from './styles';

const PokedexBadge = () => {
	return (
		<BadgeBackground>
			<IconContainer>🎒</IconContainer>
			pokedex
		</BadgeBackground>
	);
};

export { PokedexBadge };
