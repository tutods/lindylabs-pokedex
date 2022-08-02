import { Pokemon } from 'shared/@types/Pokemons';
import { CardShape, ImageContainer, InfoContainer } from 'components/ui/cards/PokemonsCard/styles';
import { capitalizeString } from 'shared/utils/capitalizeString';
import { PokemonTypeIcon } from 'components/icons/PokemonType';

type Props = {
	pokemon: Pokemon;
	// onClick: () => void
};

const PokemonCard = ({ pokemon }: Props) => {
	const type = pokemon.types[0].type.name;

	return (
		<CardShape type={type}>
			<ImageContainer type={type}>
				<div />
				<img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
			</ImageContainer>

			<InfoContainer>
				<div>
					<p>#{String(pokemon.id).padStart(3, '0')}</p>
					<h3>{capitalizeString(pokemon.name)}</h3>
				</div>

				<PokemonTypeIcon type={type} />
			</InfoContainer>
		</CardShape>
	);
};

export { PokemonCard };