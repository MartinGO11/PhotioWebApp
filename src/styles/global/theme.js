import { createMuiTheme } from '@material-ui/core/styles';
import { default as colors } from './colors';

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: colors.primary,
    // },
    // secondary: {
    //   main: colors.dark,
    // },
    // error: {
    //   main: colors.red_critical,
    // },
    background: {
     default: colors.white,
    },
  },
  typography: {
    h1: {
      fontSize: "2.4rem",
      fontWeight: 'bold',
      color: colors.black,
      margin: 10
    },
    button: {
      textTransform: 'none',
      fontSize: '16px'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // '@font-face': "Titillium Web",
        'min-height': '100vh'
      }
    },
    MuiGrid:{
      root:{
        margin:0,
        padding:0
      }
    },
    MuiCard:{
      root:{
        padding: 0,
        margin: 0
      }
    },
    MuiCardHeader:{
      root:{
        margin:0,
        padding:0,
        paddingLeft:5
      }
    },
    MuiCardActions:{
      root:{
        padding:3,
        margin:0
      }
    },
    MuiCardContent:{
      root:{
        padding: 0,
        margin: 0
      }
    },
    MuiCollapse:{
      root:{
        margin:0,
        padding:3
      }
    },
    MuiButton:{
      root:{
        margin: 5,
        textDecorationLine:"none"
      },
      containedPrimary:{
        background: colors.primary,
        color: colors.white,
      },
    }
  },
});

export default theme;
