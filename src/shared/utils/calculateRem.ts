const BASE_SIZE = 16;

const calculateRem = (value: string | number): string => {
	const formattedValue =
		typeof value === 'string' && value.includes('px') ? value.replace('px', '') : value;

	return `${Number(formattedValue) / BASE_SIZE}rem`;
};

export { calculateRem };
