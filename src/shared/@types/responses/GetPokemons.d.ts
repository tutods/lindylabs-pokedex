import { Pokemon } from 'shared/@types/Pokemon';

type PokemonsResponse = {
	count: number;
	next: string;
	previous: string | null;
	results: Pokemon[];
};

type OriginalPokemonsResponse = {
	count: number;
	next: string;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
};

export { PokemonsResponse, OriginalPokemonsResponse };