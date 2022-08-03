import { Pokemon } from 'shared/@types/Pokemon';
import { OriginalPokemonsResponse, PokemonsResponse } from 'shared/@types/responses/GetPokemons';
import { api } from 'shared/services/api/index';

const getPokemonsService = async (offset: number): Promise<PokemonsResponse> => {
	try {
		const { data } = await api.get<OriginalPokemonsResponse>('pokemon', {
			params: {
				limit: 9,
				offset
			}
		});

		const pokemons = data.results.map(async (pokemon) => {
			try {
				const { data: pokemonData } = await api.get<Pokemon>(pokemon.url);

				return pokemonData;
			} catch (error: any) {
				throw new Error(error.message);
			}
		});

		return {
			...data,
			results: await Promise.all(pokemons)
		};
	} catch (error) {
		console.log(error);
		throw new Error('Error retrieving pokemons!');
	}
};

export { getPokemonsService };
