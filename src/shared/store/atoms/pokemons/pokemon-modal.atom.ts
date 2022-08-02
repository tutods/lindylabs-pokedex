import { Pokemon } from 'shared/@types/Pokemons';
import { atom } from 'recoil';

type PokemonModalAtom = {
	isOpen: boolean;
	pokemon?: Pokemon;
};

const pokemonModalAtom = atom<PokemonModalAtom>({
	key: 'pokemonModal',
	default: {
		isOpen: false,
		pokemon: undefined
	}
});

export { pokemonModalAtom };