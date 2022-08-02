import { api } from 'shared/services/api';
import { OriginalPokemonsResponse, Pokemon, PokemonsResponse } from 'shared/@types/Pokemons';

const getPokemonsService = async (offset: number = 0): Promise<PokemonsResponse> => {
	try {
		const { data } = await api.get<OriginalPokemonsResponse>('pokemon', {
			params: {
				limit: 9,
				offset: offset
			}
		});

		const pokemons = data.results.map(async (pokemon) => {
			try {
				const { data: pokemonData } = await api.get<Pokemon>(
					(pokemon as { name: string; url: string }).url
				);

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