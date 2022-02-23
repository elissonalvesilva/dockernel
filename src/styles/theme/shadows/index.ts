import { alpha } from '@mui/material/styles';

import { smoke } from '../colors';
import { pxToRem } from './../../utils';

/**
 * This is an override of MUI shadows array.
 * By default MUI has 25 elevation levels based on this shadows array.
 * We are changing the color of the shadow and converting to `rem` so it can
 * be responsive
 *
 * @see https://material-ui.com/system/shadows/
 */

const shadow = (x = 0, y = 0, blur = 0, spread = 0, color: any) =>
  `${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${color}`;

export default [
  'none',
  `
    ${shadow(0, 2, 1, -1, alpha(smoke['300'], 0.02))},
    ${shadow(0, 1, 1, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 3, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 3, 1, -2, alpha(smoke['300'], 0.02))},
    ${shadow(0, 2, 2, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 5, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 3, 3, -2, alpha(smoke['300'], 0.02))},
    ${shadow(0, 3, 4, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 8, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 2, 4, -1, alpha(smoke['300'], 0.02))},
    ${shadow(0, 4, 5, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 10, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 3, 5, -1, alpha(smoke['300'], 0.02))},
    ${shadow(0, 5, 8, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 14, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 3, 5, -1, alpha(smoke['300'], 0.02))},
    ${shadow(0, 6, 10, 0, alpha(smoke['500'], 0.03))},
    ${shadow(0, 1, 18, 0, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 4, 5, -2, alpha(smoke['300'], 0.02))},
    ${shadow(0, 7, 10, 1, alpha(smoke['500'], 0.03))},
    ${shadow(0, 2, 16, 1, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 5, 5, -3, alpha(smoke['300'], 0.02))},
    ${shadow(0, 8, 10, 1, alpha(smoke['500'], 0.03))},
    ${shadow(0, 3, 14, 2, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 5, 6, -3, alpha(smoke['300'], 0.02))},
    ${shadow(0, 9, 12, 1, alpha(smoke['500'], 0.03))},
    ${shadow(0, 3, 16, 2, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 6, 6, -3, alpha(smoke['300'], 0.02))},
    ${shadow(0, 10, 14, 1, alpha(smoke['500'], 0.03))},
    ${shadow(0, 4, 18, 3, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 6, 7, -4, alpha(smoke['300'], 0.02))},
    ${shadow(0, 11, 15, 1, alpha(smoke['500'], 0.03))},
    ${shadow(0, 4, 20, 3, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 7, 8, -4, alpha(smoke['300'], 0.02))},
    ${shadow(0, 12, 17, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 5, 22, 4, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 7, 8, -4, alpha(smoke['300'], 0.02))},
    ${shadow(0, 13, 19, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 5, 24, 4, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 7, 9, -4, alpha(smoke['300'], 0.02))},
    ${shadow(0, 14, 21, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 5, 26, 4, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 8, 9, -5, alpha(smoke['300'], 0.02))},
    ${shadow(0, 15, 22, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 6, 28, 5, alpha(smoke['800'], 0.06))}
  `,
  `
    ${shadow(0, 8, 10, -5, alpha(smoke['300'], 0.02))},
    ${shadow(0, 16, 24, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 6, 30, 5, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 8, 11, -5, alpha(smoke['300'], 0.02))},
    ${shadow(0, 17, 26, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 6, 32, 5, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 9, 11, -5, alpha(smoke['300'], 0.02))},
    ${shadow(0, 18, 28, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 7, 34, 6, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 9, 12, -6, alpha(smoke['300'], 0.02))},
    ${shadow(0, 19, 29, 2, alpha(smoke['500'], 0.03))},
    ${shadow(0, 7, 36, 6, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 10, 13, -6, alpha(smoke['300'], 0.02))},
    ${shadow(0, 20, 31, 3, alpha(smoke['500'], 0.03))},
    ${shadow(0, 8, 38, 7, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 10, 13, -6, alpha(smoke['300'], 0.02))},
    ${shadow(0, 21, 33, 3, alpha(smoke['500'], 0.03))},
    ${shadow(0, 8, 40, 7, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 10, 14, -6, alpha(smoke['300'], 0.02))},
    ${shadow(0, 22, 35, 3, alpha(smoke['500'], 0.03))},
    ${shadow(0, 8, 42, 7, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 11, 14, -7, alpha(smoke['300'], 0.02))},
    ${shadow(0, 23, 36, 3, alpha(smoke['500'], 0.03))},
    ${shadow(0, 9, 44, 8, alpha(smoke['800'], 0.08))}
  `,
  `
    ${shadow(0, 11, 15, -7, alpha(smoke['300'], 0.02))},
    ${shadow(0, 24, 38, 3, alpha(smoke['500'], 0.03))},
    ${shadow(0, 9, 46, 8, alpha(smoke['800'], 0.08))}`
];
