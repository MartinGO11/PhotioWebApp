import { makeStyles } from '@material-ui/styles';
import colors from './colors';

const useStyles = makeStyles(theme => ({
  fontLato: {
    fontFamily: 'Lato, sans-serif',
  },
  fontPoppins: {
    fontFamily: 'Poppins, sans-serif',
  },
  welcomeComponent: {
    background: colors.blue_2,
    color: colors.gray_6
  },
  indicatorComponet: {
    color: colors.green_1
  },
  odsComponent: {
    background: colors.gray,
    color: colors.blue_1
  },
  newsResumenComponent: {
    color: colors.green_1
  },
  paragraphTitle: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  paragraphImportant: {
    fontSize: '18px'
  },
  paragraph: {
    fontSize: '14px'
  },
  center: {
    textAlign: 'center'
  }

}));

export default useStyles;
