import { makeStyles } from '@material-ui/styles';
import colors from './colors'

const useStyles = makeStyles(theme => ({
  root: {
    background: colors.white,
    color: colors.black,
    height: '100%',
    width: '100%',
    justify: 'right'
  },
  content:{
    height: '100vh'
  },
  navbarComponent: {
    background: colors.gray_2,
    color: colors.white,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold'
  },
  footerComponent: {
    background: colors.blue_2,
    color: colors.white,
    fontFamily: 'Poppins, sans-serif',
    width: '100%',
    fontSize: '12px'
  }
}));
export default useStyles;
