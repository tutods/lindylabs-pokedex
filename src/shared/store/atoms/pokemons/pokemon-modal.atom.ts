import { atom } from 'recoil';

import type { Pokemon } from 'shared/@types/Pokemon';

type PokemonModalAtom = {
  isOpen: boolean;
  pokemon?: Pokemon;
};

const pokemonModalAtom = atom<PokemonModalAtom>({
  key: 'pokemonModal',
  default: {
    isOpen: false,
    pokemon: undefined,
  },
});

export { pokemonModalAtom };
