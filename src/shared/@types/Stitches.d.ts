import type * as Stitches from '@stitches/react';

import type { config } from 'styles/stitches';

export type CSS = Stitches.CSS<typeof config>;

export type CSSProps = { css?: Stitches.CSS<typeof config> };
