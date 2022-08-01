import { atom } from 'recoil';

const currentFilterAtom = atom({
	key: 'filter',
	default: 'all'
});

export { currentFilterAtom };
