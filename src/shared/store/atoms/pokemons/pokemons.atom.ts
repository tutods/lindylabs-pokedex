import { atom } from 'recoil';
import { Pokemon } from 'shared/@types/Pokemon';

const pokemonListAtom = atom<Pokemon[]>({
	key: 'pokemonList',
	default: []
});

const totalOfPokemonsAtom = atom<number>({
	key: 'totalOfPokemons',
	default: 0
});

export { pokemonListAtom, totalOfPokemonsAtom };