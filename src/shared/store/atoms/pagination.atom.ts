import { atom } from 'recoil';

const offsetAtom = atom({
	key: 'offset',
	default: 0
});

const haveNextAtom = atom({
	key: 'haveNext',
	default: true
});

export { haveNextAtom, offsetAtom };
