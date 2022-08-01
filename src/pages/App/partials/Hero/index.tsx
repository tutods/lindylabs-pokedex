import { PokedexBadge } from 'components/ui/badges/Pokedex';
import { HeroContainer, Section, StyledExploreBtn } from './styles';
import Icon from 'components/icons/Icon';

const HeroSection = () => {
	return (
		<Section>
			<HeroContainer>
				<PokedexBadge />
				<h1>Who is that Pokémon?</h1>
				<p>The perfect guide for those who want to hunt Pokémons around the world</p>

				<StyledExploreBtn href="#pokemons">
					<span>explore</span>
					<span>
						<Icon css={{ color: '$white' }} name="arrow-down" />
					</span>
				</StyledExploreBtn>
			</HeroContainer>
			re
			{/* <img src={redPokeball} alt={'Pokeball'} /> */}
		</Section>
	);
};

export { HeroSection };