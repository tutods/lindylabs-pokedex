import Icon from 'components/icons/Icon';
import { FormEvent, useState } from 'react';
import { searchPokemonService } from 'shared/services/api/pokemons/searchPokemon.service';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';
import { SearchGroup } from './styles';
import { pokemonListAtom } from 'shared/store/atoms/pokemons/pokemons.atom';

const PokemonSearch = () => {
	const [search, setSearch] = useState('');

	const setPokemonModal = useSetRecoilState(pokemonModalAtom);
	const pokemons = useRecoilValue(pokemonListAtom);

	/**
	 * Is possible change my approach to return a list of results,
	 * but I consider this mehtod only return one result
	 */
	const handleSearch = async (evt: FormEvent) => {
		evt.preventDefault();

		if (search.length === 0) {
			return;
		}
		try {
			const data = await searchPokemonService(search, pokemons);

			setPokemonModal({
				isOpen: true,
				pokemon: data
			});
		} catch (error) {
			alert("Sorry, but we can't found any pokémon with this id/name!");
		}

		setSearch('');
	};

	return (
		<SearchGroup onSubmit={handleSearch} method="post">
			<button type={'submit'}>
				<Icon size={16} name={'search'} />
			</button>
			<input
				type="text"
				name="search"
				placeholder={'Search name or code'}
				value={search}
				onChange={(evt) => setSearch(evt.target.value)}
			/>
		</SearchGroup>
	);
};

export { PokemonSearch };