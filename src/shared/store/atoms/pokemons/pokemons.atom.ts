import { atom } from 'recoil';
import { Pokemon } from 'shared/@types/Pokemons';

const pokemonListAtom = atom<Pokemon[]>({
	key: 'pokemonList',
	default: []
});

export { pokemonListAtom };