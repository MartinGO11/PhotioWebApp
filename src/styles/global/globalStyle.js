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
    background: colors.blue_1,
    color: colors.white,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    padding: '0px',
    // marginBottom: '-15px',
    maxHeight: '10vh'
  },
  footerComponent: {
    background: colors.blue_2,
    color: colors.white,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '12px',
    paddingTop: '20px',
    paddingBottom: '10px',
  },
  cardComponentDesktop: {
    marginTop: '60px',
    marginBottom: '60px',
  },
  cardComponentTextDesktop: {
    marginLeft: '35px',
    paddingTop: '10px',
    fontFamily: 'Lato, sans-serif',
  },
  newsResumenComponent: {
    color: colors.green_1
  },
  paragraphTitle: {
    fontSize: '28px',
    fontWeight: '900'
  },
  paragraphImportant: {
    fontSize: '18px'
  },
  paragraph: {
    fontSize: '18px'
  },
  center: {
    textAlign: 'center'
  },
  sliderDescription: {
    color: 'white',
    fontSize: '18px',
    padding: '20px 30px 20px 30px',
    background: 'rgba(24,70,102,0.8)',
    position: 'absolute',
    top: '80%',
    left: '60%',
    marginRight: '10vw',
  }
}));

export default globalStyle;
