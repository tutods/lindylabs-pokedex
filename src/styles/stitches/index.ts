import { createStitches } from '@stitches/react';

import { colors } from './partials/colors';
import { font } from './partials/font';
import { lineHeights } from './partials/lineHeight';
import { media } from './partials/media';
import { radii } from './partials/radii';
import { sizes } from './partials/sizes';
import { space } from './partials/space';
import { utils } from './partials/utils';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
	createStitches({
		theme: {
			colors,
			sizes,
			space,
			...font,
			lineHeights,
			radii
		},
		media,
		utils
	});
