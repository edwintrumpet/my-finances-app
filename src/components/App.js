import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../styles/muiTheme';
import { WalletsPlaceholder } from './screens';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WalletsPlaceholder />
    </ThemeProvider>
  );
}
