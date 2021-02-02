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
  }
}));
export default useStyles;
