import type { FormEvent } from 'react';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Icon from 'components/icons/Icon';
import { SearchGroup } from 'components/Search/styles';
import { searchPokemonService } from 'shared/services/api/pokemons/searchPokemon.service';
import { pokemonModalAtom } from 'shared/store/atoms/pokemons/pokemon-modal.atom';
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
        pokemon: data,
      });
    } catch (error) {
      alert("Sorry, but we can't found any pokémon with this id/name!");
    }

    setSearch('');
  };

  return (
    <SearchGroup method="post" onSubmit={handleSearch}>
      <button type="submit">
        <Icon name="search" size={16} />
      </button>
      <input
        name="search"
        onChange={evt => setSearch(evt.target.value)}
        placeholder="Search name or code"
        type="text"
        value={search}
      />
    </SearchGroup>
  );
};

export { PokemonSearch };
