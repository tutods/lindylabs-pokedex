import { calculateRem } from 'shared/utils/calculateRem';

const sizes = {
	1: calculateRem(1),
	2: '0.125rem',
	4: '0.25rem',
	6: '0.375rem',
	8: '0.5rem',
	10: '0.625rem',
	12: '0.75rem',
	13: calculateRem(13),
	14: '0.875rem',
	15: '.9375rem',
	16: '1rem',
	18: '1.125rem',
	19: '1.11875rem',
	20: '1.25rem',
	24: '1.50rem',
	26: '1.625rem',
	28: calculateRem(28),
	32: '2rem',
	36: '2.25rem',
	37: '2.3125rem',
	40: '2.5rem',
	42: '2.625rem',
	48: '3rem',
	56: '3.5rem',
	58: '3.625rem',
	60: '3.75rem',
	64: '4rem',
	74: '4.625rem',
	76: '4.75rem',
	78: '4.875rem',
	80: '5rem',
	92: '5.75rem',
	93: '5.8125rem',
	100: '6.25rem',
	130: '8.125rem',
	160: '10rem',
	165: calculateRem(165),
	170: calculateRem(170),
	180: calculateRem(180),
	200: calculateRem(200),
	220: '13.75rem',
	226: '14.125rem',
	265: '16.5625rem',
	353: '22.063rem',
	384: '24rem',
	400: '25rem',
	455: '28.4375rem',
	500: '31.25rem',
	514: '32.125rem',
	720: '45rem',
	1120: '70rem',
	1246: '77.875rem',
	1400: '87.5rem'
};

export { sizes };