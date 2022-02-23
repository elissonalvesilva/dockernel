import { ThemeProvider } from "@material-ui/system";

import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>OI</h1>
    </ThemeProvider>
  );
}
