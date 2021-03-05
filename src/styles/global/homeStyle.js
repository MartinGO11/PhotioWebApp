import { makeStyles } from '@material-ui/styles';
import colors from './colors';

const homeStyle = makeStyles(theme => ({
  indicatorComponent: {
    color: colors.green_1,
    textAlign: 'center',
    paddingTop: '25px',
    paddingBottom: '25px'
  },
  odsComponent: {
    background: 'rgba(224, 224, 224, 0.7)',
    color: colors.blue_1,
    paddingTop: '25px',
    paddingBottom: '25px'
  },
  newsResumenComponent: {
    color: colors.green_1,
    paddingTop: '25px',
    paddingBottom: '25px'
  }
}));

export default homeStyle;
