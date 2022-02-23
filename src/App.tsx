import { ThemeProvider } from '@mui/material/styles';

import theme from './styles/theme';
import Container from './components/container';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}
