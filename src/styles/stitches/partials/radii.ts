import { calculateRem } from 'shared/utils/calculateRem';

const radii = {
	full: '100%',
	2: calculateRem(2),
	4: calculateRem(4),
	6: calculateRem(6),
	8: calculateRem(8),
	12: calculateRem(12),
	16: '1rem',
	100: calculateRem(100),
	244: calculateRem(244)
};

export { radii };
