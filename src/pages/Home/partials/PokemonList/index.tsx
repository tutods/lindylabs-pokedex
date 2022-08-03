import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PokemonCard } from 'components/ui/cards/PokemonCard';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';
import { pokemonListAtom } from 'shared/store/atoms/pokemons/pokemons.atom';

import { PokemonListContainer } from './styles';

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
							pokemon
						})
					}
				/>
			))}
		</PokemonListContainer>
	);
};

export { PokemonList };
