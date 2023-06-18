import { createTheme } from '@mui/system'

export const themeOne = createTheme({
    palette: {
        background: {
          paper: '#E6FF88',
        },
        text: {
          primary: '#173A5E',
          secondary: '#46505A',
        },
        action: {
          active: '#001E3C',
        },
        success: {
          dark: '#009688',
        },
    },
})

export const themeTwo = createTheme({
    palette: {
        background: {
          paper: '#FFF888',
        },
        text: {
          secondary: '#46505A',
          primary: '#173A5E',
        },
        action: {
          active: '#001E3C',
        },
        success: {
          dark: '#009688',
        },
    },
})