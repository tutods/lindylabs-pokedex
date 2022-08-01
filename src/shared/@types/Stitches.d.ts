import * as Stitches from '@stitches/react';
import { config } from 'styles/stitches';

export type CSS = Stitches.CSS<typeof config>;

export type CSSProps = { css?: Stitches.CSS<typeof config> };