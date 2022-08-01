import { createStitches } from '@stitches/react';
import { colors } from './partials/colors';
import { space } from './partials/space';
import { radii } from './partials/radii';
import { lineHeights } from './partials/lineHeight';
import { sizes } from './partials/sizes';
import { media } from './partials/media';
import { font } from './partials/font';
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