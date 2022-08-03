import { Pokemon } from 'shared/@types/Pokemon';
import { CardShape, ImageContainer, InfoContainer } from 'components/ui/cards/PokemonCard/styles';
import { capitalizeString } from 'shared/utils/capitalizeString';
import { PokemonTypeIcon } from 'components/icons/PokemonType';
import Icon from 'components/icons/Icon';

type Props = {
	pokemon: Pokemon;
	onClick: () => void;
};

const PokemonCard = ({ pokemon, onClick }: Props) => {
	const type = pokemon.types[0].type.name;

	const pokemonImage =
		pokemon.sprites.other.dream_world.front_default ||
		pokemon.sprites.other.home.front_default ||
		pokemon.sprites.other['official-artwork'].front_default;

	return (
		<CardShape type={type} onClick={onClick}>
			<ImageContainer type={type}>
				<div />
				<img
					src={pokemonImage}
					alt={pokemon.name}
					onError={() => <Icon name={'pokeball'} />}
				/>
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