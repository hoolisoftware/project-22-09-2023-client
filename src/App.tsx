import CssBaseline from '@mui/material/CssBaseline';

import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { teal, lightBlue } from '@mui/material/colors';

import { RootState } from './app/store';
import Router from './Router';

const themeDark = createTheme({
  palette: {
    mode: 'dark'
  },
});

const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: teal,
    secondary: lightBlue,
  },
});

export default function App() {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <ThemeProvider theme={ theme.modeDark ? themeDark : themeLight }>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  )
}