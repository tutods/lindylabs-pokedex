import { calculateRem } from 'shared/utils/calculateRem';

const lineHeights = {
	8: '0.5rem',
	12: '0.75rem',
	14: '0.875rem',
	16: '1rem',
	17: calculateRem(17),
	18: '1.1125rem',
	20: '1.25rem',
	22: '1.375rem',
	24: '1.50rem',
	28: '1.75rem',
	32: '2rem',
	34: '2.125rem',
	36: '2.25rem',
	39: '2.4375rem',
	56: '3.5rem',
	72: '4.5rem',
	78: '4.875rem',
	80: '5rem',
	96: '6rem'
};

export { lineHeights };