import { RefObject } from 'react';

import Icon from 'components/icons/Icon';
import { PokedexBadge } from 'components/ui/badges/Pokedex';

import { HeroContainer, Section, StyledExploreBtn } from './styles';

type Props = {
	scrollTo: RefObject<HTMLDivElement>;
};

const HeroSection = ({ scrollTo }: Props) => {
	return (
		<Section>
			<HeroContainer>
				<PokedexBadge />
				<h1>Who is that Pokémon?</h1>
				<p>The perfect guide for those who want to hunt Pokémons around the world</p>

				<StyledExploreBtn onClick={() => scrollTo?.current?.scrollIntoView()}>
					<span>explore</span>
					<span>
						<Icon css={{ color: '$white' }} name={'arrow-down'} />
					</span>
				</StyledExploreBtn>
			</HeroContainer>
		</Section>
	);
};

export { HeroSection };
