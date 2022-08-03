import { api } from 'shared/services/api/index';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';
import { Pokemon } from 'shared/@types/Pokemon';
import {
	OriginalPomemonsByTypeResponse,
	PokemonsByTypeResponse
} from 'shared/@types/responses/PokemonsByType';

const getPokemonsByType = async (type: PokemonTypeEnum): Promise<PokemonsByTypeResponse> => {
	try {
		const { data } = await api.get<OriginalPomemonsByTypeResponse>(`type/${type}`);

		const pokemons = data.pokemon.map(async (pokemon) => {
			try {
				const { data: pokemonData } = await api.get<Pokemon>(pokemon.pokemon.url);

				return pokemonData;
			} catch (error: any) {
				throw new Error(error.message);
			}
		});

		return {
			name: data.name,
			results: await Promise.all(pokemons)
		};
	} catch (error) {
		console.log(error);
		throw new Error('Error retrieving pokemons!');
	}
};

export { getPokemonsByType };