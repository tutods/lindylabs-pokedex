import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pokemonListAtom } from 'shared/store/atoms/pokemons/pokemons.atom';
import { PokemonCard } from 'components/ui/cards/PokemonCard';
import { PokemonListContainer } from './styles';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';

const PokemonList = () => {
	const pokemons = useRecoilValue(pokemonListAtom);
	const setPokemonModal = useSetRecoilState(pokemonModalAtom);

	return (
		<PokemonListContainer>
			{pokemons.map((pokemon) => (
				<PokemonCard
					key={`${pokemon.id}-${pokemon.name.replaceAll(' ', '-')}`}
					pokemon={pokemon}
					onClick={() =>
						setPokemonModal({
							isOpen: true,
							pokemon: pokemon
						})
					}
				/>
			))}
		</PokemonListContainer>
	);
};

export { PokemonList };