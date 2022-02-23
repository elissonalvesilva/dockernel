import { colors } from '../principles';

export default {
  primary: {
    light: colors.blue[100],
    main: colors.blue[500],
    dark: colors.blue[700],
    contrastText: colors.root[0]
  },
  secondary: {
    light: colors.blue[50],
    main: colors.blue[500],
    dark: colors.blue[700],
    contrastText: colors.blue[100]
  },
  error: {
    light: colors.red[100],
    main: colors.red[500],
    dark: colors.red[700],
    contrastText: colors.red[50]
  },
  success: {
    light: colors.green[100],
    main: colors.green[500],
    dark: colors.green[700],
    contrastText: colors.green[50]
  },
  info: {
    light: colors.smoke[100],
    main: colors.smoke[500],
    dark: colors.smoke[900],
    contrastText: colors.root[0]
  },
  warning: {
    light: colors.yellow[50],
    main: colors.yellow[500],
    dark: colors.yellow[700],
    contrastText: colors.smoke[900]
  },
  text: {
    primary: colors.smoke[900],
    secondary: colors.smoke[700],
    disabled: colors.smoke[300],
    hint: colors.smoke[500]
  },
  background: {
    default: colors.smoke[50]
  },
  grey: {
    50: colors.smoke[50],
    100: colors.smoke[100],
    200: colors.smoke[200],
    300: colors.smoke[300],
    400: colors.smoke[400],
    500: colors.smoke[500],
    600: colors.smoke[600],
    700: colors.smoke[700],
    800: colors.smoke[800],
    900: colors.smoke[900],
    A100: colors.smoke.A100,
    A200: colors.smoke.A200,
    A400: colors.smoke.A400,
    A700: colors.smoke.A700
  },
  common: {
    black: colors.root[900],
    white: colors.root[0]
  },
  header: {
    gradient: colors.gradients.sanches
  },
  action: {
    hover: colors.blue[50]
  }
};
