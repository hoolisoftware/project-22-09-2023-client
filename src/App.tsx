import CssBaseline from '@mui/material/CssBaseline';

import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { teal, lightBlue } from '@mui/material/colors';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { RootState } from './app/store'
import Router from './Router'

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={ theme.modeDark ? themeDark : themeLight }>
        <CssBaseline/>
        <Router/>
      </ThemeProvider>
    </LocalizationProvider>
  )
}