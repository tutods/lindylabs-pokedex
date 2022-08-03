import { atom } from 'recoil';
import { PokemonTypeEnum } from 'shared/enum/PokemonType.enum';

const currentFilterAtom = atom<'all' | PokemonTypeEnum>({
	key: 'filter',
	default: 'all'
});

export { currentFilterAtom };