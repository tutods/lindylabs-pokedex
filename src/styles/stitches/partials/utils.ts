import { PropertyValue } from '@stitches/react';

const utils = {
	py: (value: PropertyValue<'padding'>) => ({
		paddingTop: value,
		paddingBottom: value
	}),
	px: (value: PropertyValue<'padding'>) => ({
		paddingLeft: value,
		paddingRight: value
	}),
	my: (value: PropertyValue<'margin'>) => ({
		marginTop: value,
		marginBottom: value
	}),
	mx: (value: PropertyValue<'margin'>) => ({
		marginLeft: value,
		marginRight: value
	}),
	mb: (value: PropertyValue<'marginBottom'>) => ({
		marginBottom: value
	}),
	mt: (value: PropertyValue<'marginTop'>) => ({
		marginTop: value
	}),
	size: (value: PropertyValue<'width'>) => ({
		width: value,
		height: value
	}),
	inlineFlex: (direction: 'row' | 'column') => ({
		display: 'inline-flex',
		flexDirection: direction
	}),
	flex: (direction: 'row' | 'column') => ({
		display: 'flex',
		flexDirection: direction
	})
};

export { utils };
