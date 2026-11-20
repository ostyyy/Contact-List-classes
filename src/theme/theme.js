import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#e0fbfc',
            main: '#b8f4ff',
            dark: '#50bccf',
            contrastText: '#ff7de3',
        },
        secondary: {
            main: '#50bccf',
            contrastText: '#c673f0',
        },
        error: {
            main: '#e96787',
        },
        success: {
            main: '#a8e6c2',
            contrastText: '#1d5c42',
        },
    },

    typography: {
        fontFamily: '"VT323", monospace',
        body1: {
            fontSize: '25px', 
        },
        button: {
            fontFamily: '"VT323", monospace',
            fontSize: '21px',
            textTransform: 'none', 
            fontWeight: 600,
        },
        h1: {
            fontSize: '3rem',
        },
        h2: {
            fontSize: '2.5rem',
        },
    },

    custom: {
        mainBg: '#fffdf2',
        icon: '#c673f0',
        newBtn: {
            bg: '#f2d9ff',
            text: '#8a4fcf',
        },
    },
});
