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
            light: '#ff8fab',
            contrastText: '#fff',
        },
        success: {
            main: '#a8e6c2',
            dark: '#67c193',
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
            fontSize: '25px',
            textTransform: 'none',
            letterSpacing: '1px',
            fontWeight: 600,
        },
        h1: {
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '60px',
            letterSpacing: '3px',
        },
    },

    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#50bccf',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#e064ff',
                        borderWidth: '2px',
                    },
                    backgroundColor: '#e0fbfc',
                },
                notchedOutline: { borderColor: '#00d9ff', borderWidth: '2px' },
                input: { color: '#ca5fff' },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
                size: 'medium',
            },
            styleOverrides: {
                root: {
                    borderRadius: '7px',
                    boxShadow: ' 0 0 14px rgba(146, 201, 218, 0.35)',
                    '&:hover': {
                        boxShadow: '1px 1px 0px rgba(46, 80, 90, 0.35)',
                    },
                },
            },
        },
    },

    custom: {
        mainBg: '#fffdf2',
        icon: '#c673f0',
        newBtn: {
            bg: '#f2d9ff',
            text: '#8a4fcf',
            border: '#d8a7f0',
        },
    },
});

