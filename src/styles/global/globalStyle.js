import { makeStyles } from '@material-ui/styles';
import colors from './colors';

const globalStyle = makeStyles(theme => ({
  fontLato: {
    fontFamily: 'Lato, sans-serif',
  },
  fontPoppins: {
    fontFamily: 'Poppins, sans-serif',
  },
  principalComponent: {
    background: colors.blue_2,
    color: colors.gray_6
  },
  secondaryComponent: {
    background: colors.gray,
    color: colors.blue_1
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
  },
  cardComponentDesktop: {
    marginTop: '60px',
    marginBottom: '60px',
  },
  cardComponentTextDesktop: {
    marginLeft: '35px',
    paddingTop: '50px',
    fontFamily: 'Lato, sans-serif',
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

export default globalStyle;
