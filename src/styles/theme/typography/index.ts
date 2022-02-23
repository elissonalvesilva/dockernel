import { ROOT_FONT_SIZE } from '../constants';
import { typography as typographyPrinciples } from '../principles';
import { pxToRem } from '../../utils';

const typography: any = {
  fontFamily: 'Open Sans',
  fontSize: ROOT_FONT_SIZE,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  pxToRem,
  h1: typographyPrinciples.h1,
  h2: typographyPrinciples.h2,
  h3: typographyPrinciples.h3,
  h4: typographyPrinciples.h4,
  h5: typographyPrinciples.h5,
  h6: typographyPrinciples.h6,
  subtitle1: typographyPrinciples.subtitle1,
  subtitle2: typographyPrinciples.subtitle2,
  body1: typographyPrinciples.body1,
  body2: typographyPrinciples.body2,
  button: typographyPrinciples.button,
  caption: typographyPrinciples.caption,
  overline: typographyPrinciples.overline
};

export default typography;
