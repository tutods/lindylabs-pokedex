import { Pokemon } from 'shared/@types/Pokemon';
import { api } from 'shared/services/api/index';

const searchPokemonService = async (
	searchValue: string | number,
	pokemons: Pokemon[]
): Promise<Pokemon> => {
	const pokemonExists = pokemons.find(
		(pokemon) =>
			pokemon.id === Number(searchValue) || pokemon.name.includes(String(searchValue))
	);

	/**
	 * If the pokemon with id x or with name x
	 * is present on pokemons list,
	 * return that pokemon instead do a new request
	 */
	if (pokemonExists) {
		return pokemonExists;
	}

	try {
		const { data } = await api.get<Pokemon>(`pokemon/${searchValue}`);

		return data;
	} catch (error: any) {
		throw new Error(error.message ?? 'Error retrieving pokemons!');
	}
};

export { searchPokemonService };
