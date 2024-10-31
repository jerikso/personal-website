import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
    main: '#000000',
    contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Lexend Exa',
    h1: {
      fontFamily: 'Lexend Exa',
    },
    h2: {
      fontFamily: 'Lexend Exa',
    },
    h3: {
      fontFamily: 'Lexend Exa',
    },
    h4: {
      fontFamily: 'Lexend Exa',
    },
    h5: {
      fontFamily: 'Lexend Exa',
    },
    h6: {
      fontFamily: 'Lexend Exa',
    },
    button: {
      fontFamily: 'Lexend Exa',
      fontSize: 16,
      fontWeight: 400,
      textTransform: 'none'
    },
  },
  components: {
    MuiButton: {
    styleOverrides: {
      root: {
      opacity:1,
      backgroundColor: '#000000',
      color: '#ffffff',
      '&:hover': {
        opacity:0.8,
      },
      },
    },
    },
  },
});

export { theme };