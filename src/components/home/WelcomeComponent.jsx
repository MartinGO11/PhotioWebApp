import React from 'react';
import { Grid, Hidden, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../styles/global/homeStyle';
import colors from '../../styles/global/colors';
import { default as welcome } from './welcome.svg';
import { default as openKey } from './openKey.svg';

const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    backgroundColor: colors.green_2,
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

export const WelcomeComponent = ({ welcomeText }) => {

  const classesStyle = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={1} >
      <Grid item xs={4} md={3} style={{ textAlign: 'center' }} >
        <img src={welcome} alt="welcome" />
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'right', paddingTop: '25px', paddingBottom: '25px' }}>
        <img src={openKey} alt="openKey" style={{ marginRight: '20px' }} />
      </Grid>
      <Grid item xs={7} md={4} className={classesStyle.fontLato} >
        <p style={{ marginRight: '20px' }}>{welcomeText.description}</p>
      </Grid>
      <Hidden smDown>
        <Grid item md={4} className={classesStyle.fontPoppins} style={{ textAlign: 'center' }}>
          <p className={classesStyle.paragraphTitle} style={{ color: colors.blue_1, fontWeight: 'bold' }}>{welcomeText.titleAction}</p>
          <p className={classesStyle.paragraph} style={{ marginLeft: '50px', marginRight: '50px' }}>{welcomeText.descriptionAction}</p>
          <ColorButton variant="contained">{welcomeText.textButtonAction}</ColorButton>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={`${classesStyle.fontPoppins} ${classesStyle.odsComponent}`} >
          <Grid item xs={7} >
            <p className={classesStyle.paragraphTitle} style={{ color: colors.blue_1, fontWeight: 'bold', marginLeft: '50px' }}>{welcomeText.titleAction}</p>
            <p className={classesStyle.paragraph} style={{ marginLeft: '50px', marginRight: '50px' }}>{welcomeText.descriptionAction}</p>
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={4}>
            <ColorButton variant="contained">{welcomeText.textButtonAction}</ColorButton>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  )
}
